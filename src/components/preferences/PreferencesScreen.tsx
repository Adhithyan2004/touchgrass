"use client";

import { useState } from "react";
import PreferenceGroup from "./PreferenceGroup";

export type Preferences = {
  time: string;
  mood: string;
  budget: string;
  difficulty: string;
};

type PreferencesScreenProps = {
  onBack: () => void;
  onNext: (preferences: Preferences) => void;
};

export default function PreferencesScreen({
  onBack,
  onNext,
}: PreferencesScreenProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>({
    time: "30 min",
    mood: "Explore",
    budget: "₹0",
    difficulty: "Easy",
  });

  const updatePreference = (key: keyof Preferences, value: string) => {
    setPreferences((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101A16] px-6 py-10 text-[#F5F7E9] sm:py-14">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            radial-gradient(circle, #B7FF4A 1.5px, transparent 1.5px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B7FF4A] opacity-[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FF4FBF] opacity-[0.08] blur-[120px]" />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute left-[5%] top-[35%] hidden h-12 w-12 rotate-12 rounded-2xl bg-[#FF8A3D] opacity-80 sm:block animate-[float_5s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute right-[6%] top-[20%] hidden h-8 w-8 rotate-45 bg-[#55D9FF] opacity-80 sm:block animate-[float_4s_ease-in-out_infinite]" />

      <section className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="
              group
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-[#89968F]
              transition-colors
              hover:text-[#B7FF4A]
            "
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#66756D]">
            <span className="h-2 w-2 rounded-full bg-[#B7FF4A]" />
            Quest Setup
          </div>
        </div>

        {/* Header */}
        <header className="mt-12">
          <div className="mb-5 inline-flex items-center rounded-full bg-[#B7FF4A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#B7FF4A]">
            Step 01
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            What are you
            <br />
            <span className="text-[#FF4FBF]">up for?</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#89968F] sm:text-lg">
            Give us a few details and we'll create an adventure that actually
            fits your day.
          </p>
        </header>

        {/* Preferences */}
        <div className="mt-12 space-y-5">
          <PreferenceGroup
            title="How much time do you have?"
            options={["15 min", "30 min", "1 hour", "2+ hours"]}
            value={preferences.time}
            onChange={(value) => updatePreference("time", value)}
          />

          <PreferenceGroup
            title="What's the mood?"
            options={["Relax", "Explore", "Exercise", "Social", "Surprise me"]}
            value={preferences.mood}
            onChange={(value) => updatePreference("mood", value)}
          />

          <PreferenceGroup
            title="How much can you spend?"
            options={["₹0", "₹100", "₹500+"]}
            value={preferences.budget}
            onChange={(value) => updatePreference("budget", value)}
          />

          <PreferenceGroup
            title="How adventurous?"
            options={["Easy", "Moderate", "Adventurous"]}
            value={preferences.difficulty}
            onChange={(value) => updatePreference("difficulty", value)}
          />
        </div>

        {/* Generate */}
        <div className="mt-10 pb-8">
          <button
            onClick={async () => {
              setIsGenerating(true);
              await onNext(preferences);
              setIsGenerating(false);
            }}
            disabled={isGenerating}
            className="
      group
      flex
      w-full
      items-center
      justify-center
      gap-2
      rounded-2xl
      bg-[#B7FF4A]
      px-8
      py-5
      font-bold
      text-[#101A16]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#FF4FBF]
      hover:shadow-[0_18px_50px_rgba(255,79,191,0.18)]
      active:translate-y-0
      disabled:cursor-wait
      disabled:opacity-70
      disabled:hover:translate-y-0
    "
          >
            {isGenerating ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#101A16]/30 border-t-[#101A16]" />
                Cooking up your quest...
              </>
            ) : (
              <>
                Generate My Quest
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </button>

          <p className="mt-4 text-center text-white">
            {isGenerating
              ? "Note : Our AI is running on a potato-powered laptop, so this might take a moment. 🥔"
              : "Your choices shape the adventure."}
          </p>
        </div>
      </section>
    </main>
  );
}
