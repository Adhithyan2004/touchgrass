import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const preferences = await req.json();

    const prompt = `
Create ONE short outdoor quest based on these preferences:

Time: ${preferences.time}
Mood: ${preferences.mood}
Budget: ${preferences.budget}
Difficulty: ${preferences.difficulty}

Rules:
- The quest must be achievable by an ordinary person.
- The quest must require going outside.
- The quest must fit within the requested time.
- Respect the requested budget.
- Do not require special equipment.
- Do not require dangerous locations or activities.
- Never encourage trespassing or entering private property.
- Do not require internet access.
- Give the user one clear objective.
- Never tell the user to collect, damage, touch, or remove plants, animals, insects, rocks, soil, or other natural objects.
- Never invent a specific location, park, street, landmark, business, or trail.
- Use generic places such as a nearby public park, sidewalk, neighborhood, or public space.
- Never require entering water, climbing, leaving marked paths, or crossing roads unsafely.
- Keep the quest simple, realistic, and fun.
- Locations must always be relative and generic.
- Use phrases like "a nearby public park", "a nearby cafe", "your neighborhood", "a nearby sidewalk", or "a nearby public space".
- Never name a specific park, cafe, restaurant, street, landmark, city, or tourist attraction.
- Never assume the user is in a particular city or country.
- Never suggest famous or distant locations such as Times Square, Central Park, Eiffel Tower, etc.
- The quest should be realistically reachable from the user's current area without requiring travel to another part of the city.
- If a quest involves a cafe, say "a nearby cafe" rather than naming one.

Possible categories:
Nature, Exploration, Movement, Photography, Mindfulness, Observation, Creativity, Social.

OUTPUT RULES:

Return ONLY valid JSON.
Do NOT use Markdown.
Do NOT use \`\`\`.
Do NOT add text before or after the JSON.
Use normal double quotes only.
Do NOT use smart quotes.

Return exactly this structure:

{
  "title": "string",
  "duration": "string",
  "cost": "string",
  "difficulty": "string",
  "description": "string",
  "steps": [
    "string",
    "string",
    "string"
  ]
}

IMPORTANT:
- cost must be a string such as "Free", "₹100", or "₹500".
- duration must be a string.
- difficulty must be exactly "Easy", "Moderate", or "Adventurous".
- steps must contain at least 3 short strings.
`;

    const response = await fetch("http://192.168.29.143:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma3:1b",
        prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error("Ollama request failed");
    }

    const data = await response.json();

    console.log("RAW GEMMA RESPONSE:", data.response);

    // Clean common formatting mistakes from the small model
    const cleanedResponse = data.response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .trim();

    const generatedQuest = JSON.parse(cleanedResponse);

    // Normalize the difficulty
    const difficulty = String(generatedQuest.difficulty).toLowerCase().trim();

    let normalizedDifficulty: "Easy" | "Moderate" | "Adventurous";

    if (difficulty.includes("adventur")) {
      normalizedDifficulty = "Adventurous";
    } else if (
      difficulty.includes("moderate") ||
      difficulty.includes("medium")
    ) {
      normalizedDifficulty = "Moderate";
    } else {
      normalizedDifficulty = "Easy";
    }

    // Validate the creative output
    if (
      typeof generatedQuest.title !== "string" ||
      typeof generatedQuest.duration !== "string" ||
      typeof generatedQuest.cost !== "string" ||
      typeof generatedQuest.description !== "string" ||
      !Array.isArray(generatedQuest.steps) ||
      generatedQuest.steps.length < 3 ||
      !generatedQuest.steps.every((step: unknown) => typeof step === "string")
    ) {
      throw new Error("Invalid quest structure");
    }

    // Application-controlled fields
    const quest = {
      title: generatedQuest.title,
      duration: generatedQuest.duration,
      cost: generatedQuest.cost,
      difficulty: normalizedDifficulty,
      description: generatedQuest.description,
      steps: generatedQuest.steps,
      challenge:
        "Complete the quest without rushing and notice one thing you normally would not notice.",
      safetyNote:
        "Stay in safe public areas, remain aware of your surroundings, and stop if the activity feels unsafe.",
    };

    return NextResponse.json({ quest });
  } catch (error) {
    console.error("Quest generation error:", error);

    return NextResponse.json(
      { error: "Failed to generate quest" },
      { status: 500 },
    );
  }
}
