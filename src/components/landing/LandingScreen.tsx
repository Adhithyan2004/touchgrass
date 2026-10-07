"use client";

import { useState } from "react";
import HowItWorksOverlay from "../HowItWorksOverlay";

type LandingScreenProps = {
  onNext: () => void;
};

export default function LandingScreen({ onNext }: LandingScreenProps) {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101A16] font-sans text-[#F5F7E9]">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            radial-gradient(circle, #B7FF4A 1.5px, transparent 1.5px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient color */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#B7FF4A] opacity-20 blur-[100px]" />

      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#FF4FBF] opacity-20 blur-[100px]" />

      <div className="absolute bottom-[-180px] left-[30%] h-96 w-96 rounded-full bg-[#55D9FF] opacity-20 blur-[120px]" />

      {/* Floating decorative shapes */}
      <div className="absolute left-[10%] top-[28%] hidden rotate-12 sm:block">
        <div className="h-16 w-16 rounded-[20px] bg-[#FF8A3D] shadow-[0_12px_40px_rgba(255,138,61,0.2)] animate-[float_5s_ease-in-out_infinite]" />
      </div>

      <div className="absolute right-[13%] top-[38%] hidden sm:block">
        <div className="h-10 w-10 rotate-45 rounded-lg bg-[#55D9FF] shadow-[0_10px_30px_rgba(85,217,255,0.25)] animate-[float_4s_ease-in-out_infinite]" />
      </div>

      <div className="absolute bottom-[20%] right-[20%] hidden sm:block">
        <div className="h-14 w-14 rounded-full bg-[#B7FF4A] shadow-[0_10px_30px_rgba(183,255,74,0.2)] animate-[float_6s_ease-in-out_infinite]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">Touchgrass</span>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-[#9BA99F] sm:flex">
          <button
            onClick={() => setShowHowItWorks(true)}
            className="cursor-pointer transition-colors hover:text-[#B7FF4A]"
          >
            How it works
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-24 pt-12 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B7FF4A]/20 bg-[#B7FF4A]/10 px-4 py-2 text-sm font-bold text-[#B7FF4A] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#B7FF4A] shadow-[0_0_12px_#B7FF4A]" />

              <span>YOUR NEXT ADVENTURE</span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Go outside.
              <br />
              <span className="relative inline-block text-[#FF4FBF] drop-shadow-[0_0_30px_rgba(255,79,191,0.15)]">
                Seriously.
                {/* <span className="absolute -bottom-2 left-0 h-3 w-full -rotate-1 rounded-full bg-[#B7FF4A]" /> */}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-9 max-w-xl text-lg leading-8 text-[#9BA99F] sm:text-xl">
              An AI that gives you a reason to close your laptop, step outside,
              and actually do something.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                onClick={onNext}
                className="
                  group
                  rounded-2xl
                  bg-[#B7FF4A]
                  px-7
                  py-4
                  text-lg
                  font-bold
                  text-[#101A16]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#FF4FBF]
                  hover:shadow-[0_14px_40px_rgba(255,79,191,0.25)]
                  active:translate-y-0
                "
              >
                Get a Quest
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <span className="text-sm font-medium text-[#718078]">
                Takes less than a minute.
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto hidden w-full max-w-lg lg:block">
            <div className="relative aspect-square">
              {/* Green ambient shape */}
              <div className="absolute inset-[10%] rotate-[-8deg] rounded-[42%_58%_63%_37%/48%_42%_58%_52%] bg-[#B7FF4A] opacity-90 shadow-[0_30px_100px_rgba(183,255,74,0.12)] transition-transform duration-700 hover:rotate-[-3deg]" />

              {/* Blue blob */}
              <div className="absolute right-[5%] top-[8%] h-32 w-32 rounded-full bg-[#55D9FF] opacity-90 shadow-[0_20px_60px_rgba(85,217,255,0.15)]" />

              {/* Pink blob */}
              <div className="absolute bottom-[8%] left-[5%] h-28 w-28 rounded-[35%] bg-[#FF5BBE] opacity-90 shadow-[0_20px_60px_rgba(255,91,190,0.15)]" />

              {/* Quest card */}
              <div className="absolute left-[12%] top-[18%] w-[76%] rotate-[3deg] rounded-[28px] border border-white/10 bg-[#18251F]/90 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#FF4FBF]">
                    NEW QUEST
                  </span>

                  <span className="rounded-full bg-[#FFE45C] px-3 py-1 text-xs font-bold text-[#17211B]">
                    30 MIN
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-bold">The Stranger</h2>

                <p className="mt-3 text-sm leading-6 text-[#9BA99F]">
                  Walk somewhere you've never explored before.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B7FF4A] text-[#101A16]">
                      ✓
                    </span>
                    Find something unusual
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#55D9FF] text-[#101A16]">
                      ✓
                    </span>
                    Take one photograph
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5BBE] text-[#101A16]">
                      ✓
                    </span>
                    Sit somewhere quietly
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-[12%] right-[2%] rotate-[-8deg] rounded-2xl bg-[#FF8A3D] px-5 py-3 font-bold text-[#101A16] shadow-[0_15px_40px_rgba(255,138,61,0.2)] animate-[float_5s_ease-in-out_infinite]">
                🌿 GO OUTSIDE
              </div>

              {/* Decorative star */}
              <div className="absolute left-[3%] top-[8%] text-5xl text-[#B7FF4A] drop-shadow-[0_0_15px_rgba(183,255,74,0.3)]">
                ✦
              </div>
            </div>
          </div>
        </div>
      </section>
      {showHowItWorks && (
        <HowItWorksOverlay onClose={() => setShowHowItWorks(false)} />
      )}
    </main>
  );
}
