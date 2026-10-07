"use client";

type HowItWorksOverlayProps = {
  onClose: () => void;
};

const steps = [
  {
    number: "01",
    color: "#B7FF4A",
    title: "Tell us what you're up for",
    description:
      "Choose how much time you have, your mood, budget, and how adventurous you're feeling.",
    visual: "YOU",
  },
  {
    number: "02",
    color: "#55D9FF",
    title: "AI creates your quest",
    description:
      "TouchGrass turns your preferences into a personalized outdoor adventure.",
    visual: "AI",
  },
  {
    number: "03",
    color: "#FF4FBF",
    title: "Go outside",
    description:
      "Start your quest, close the app, and actually do the thing. No endless scrolling.",
    visual: "🌳",
  },
  {
    number: "04",
    color: "#FF8A3D",
    title: "Come back & reflect",
    description:
      "Complete your quest and tell us what you discovered along the way.",
    visual: "✓",
  },
];

export default function HowItWorksOverlay({ onClose }: HowItWorksOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#07100C]/80 px-4 py-6 backdrop-blur-md sm:py-8"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          max-h-[88vh]
          w-full
          max-w-3xl
          overflow-y-auto
          rounded-[32px]
          border border-white/[0.08]
          bg-[#101A16]
          p-6
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          sm:p-8
          animate-[overlayIn_0.3s_ease-out]
        "
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#B7FF4A] opacity-[0.08] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#FF4FBF] opacity-[0.08] blur-[100px]" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute right-105 z-20
            text-4xl
            text-[#9BA99F]
            transition-all duration-200
            hover:rotate-90
            hover:border-[#FF4FBF]/40
            hover:text-[#FF4FBF]
          "
        >
          ×
        </button>

        {/* Header */}
        <div className="relative z-10 max-w-2xl pr-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B7FF4A]">
            How it works
          </span>

          <h2 className="mt-3 text-4xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
            Four steps.
            <br />
            <span className="text-[#FF4FBF]">Then go touch grass.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#89968F] sm:text-base sm:leading-7">
            TouchGrass uses AI to turn a few simple preferences into an outdoor
            quest designed for you.
          </p>
        </div>

        {/* Steps */}
        <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/[0.07]
                bg-[#18251F]/70
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/[0.14]
              "
            >
              {/* Color accent */}
              <div
                className="absolute left-0 top-0 h-1 w-full opacity-70"
                style={{ backgroundColor: step.color }}
              />

              <div className="flex items-start justify-between">
                <span
                  className="text-sm font-bold"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>

                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                  }}
                >
                  {step.visual}
                </div>
              </div>

              <h3 className="mt-5 text-lg font-bold sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#89968F]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="relative z-10 mt-5 rounded-lg bg-[#B7FF4A] px-5 py-4 text-center text-[#101A16]">
          <p className="text-sm font-bold sm:text-base">
            The goal isn't to keep you here.
            <span className="ml-1">It's to get you out there.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
