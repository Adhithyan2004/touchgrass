"use client";

import { useState } from "react";

import LandingScreen from "@/components/landing/LandingScreen";
import PreferencesScreen, {
  Preferences,
} from "@/components/preferences/PreferencesScreen";
import QuestScreen from "@/components/quest/QuestScreen";
import ActiveQuestScreen from "@/components/active/ActiveQuestScreen";
import CompletionScreen from "@/components/complete/CompletionScreen";
import { Quest } from "@/types/quest";

type Screen = "landing" | "preferences" | "quest" | "active" | "complete";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("landing");

  const [preferences, setPreferences] = useState<Preferences | null>(null);

  const [quest, setQuest] = useState<Quest>();

  const handleGenerateQuest = async (preferences: Preferences) => {
    try {
      setPreferences(preferences);

      const response = await fetch("/api/quest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferences),
      });

      if (!response.ok) {
        throw new Error("Failed to generate quest");
      }

      const data = await response.json();

      setQuest(data.quest);
      setScreen("quest");
    } catch (error) {
      console.error(error);
    }
  };
  switch (screen) {
    case "landing":
      return <LandingScreen onNext={() => setScreen("preferences")} />;

    case "preferences":
      return (
        <PreferencesScreen
          onBack={() => setScreen("landing")}
          onNext={handleGenerateQuest}
        />
      );

    case "quest":
      if (!quest) {
        return null;
      }

      return <QuestScreen quest={quest} onStart={() => setScreen("active")} />;

    case "active":
      return <ActiveQuestScreen onComplete={() => setScreen("complete")} />;

    case "complete":
      return <CompletionScreen onFinish={() => setScreen("landing")} />;
  }
}
