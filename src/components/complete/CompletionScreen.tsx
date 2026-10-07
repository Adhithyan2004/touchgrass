"use client";

import { useState } from "react";

type CompletionScreenProps = {
  onFinish: () => void;
};

const confettiColors = ["#B7FF4A", "#FF4FBF", "#55D9FF", "#FF8A3D", "#FFE45C"];

export default function CompletionScreen({ onFinish }: CompletionScreenProps) {
  const [celebrating, setCelebrating] = useState(false);

  const handleFinish = () => {
    setCelebrating(true);

    setTimeout(() => {
      onFinish();
    }, 2200);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#101A16] px-6 py-12 text-[#F5F7E9]">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `radial-gradient(circle, #B7FF4A 1.5px, transparent 1.5px)`,
          backgroundSize: "24px 24px",
        }}
      />
      {/* Celebration glows */}
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#B7FF4A] opacity-[0.14] blur-[110px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[20%] h-80 w-80 rounded-full bg-[#FF4FBF] opacity-[0.14] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-80 w-80 rounded-full bg-[#55D9FF] opacity-[0.12] blur-[110px]" />
      {/* Celebration shapes */}
      <div className="pointer-events-none absolute left-[12%] top-[20%] h-8 w-8 rotate-12 rounded-lg bg-[#FF8A3D] animate-[float_4s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute right-[15%] top-[18%] text-4xl text-[#FFE45C] animate-[float_5s_ease-in-out_infinite]">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[20%] right-[12%] h-10 w-10 rounded-full bg-[#55D9FF] animate-[float_6s_ease-in-out_infinite]" />
      {/* Confetti */}
      {celebrating && (
        <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
          {Array.from({ length: 55 }).map((_, index) => {
            const color = confettiColors[index % confettiColors.length];
            const left = (index * 37) % 100;
            const delay = (index % 10) * 0.06;
            const rotation = (index * 47) % 360;

            return (
              <span
                key={index}
                className="absolute top-[-20px] h-3 w-2 rounded-sm animate-[confettiFall_2s_ease-out_forwards]"
                style={{
                  left: `${left}%`,
                  backgroundColor: color,
                  transform: `rotate(${rotation}deg)`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
        </div>
      )}
      <section className="relative z-10 w-full max-w-xl text-center">
        {/* Completion badge */}
        <div
          className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#B7FF4A] text-5xl shadow-[0_0_70px_rgba(183,255,74,0.18)] ${
            celebrating ? "animate-[pop_0.5s_ease-out]" : ""
          }`}
        >
          🌱
        </div>

        {/* Label */}
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#B7FF4A]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B7FF4A]">
          <span>✦</span>
          Quest complete
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
          You actually
          <br />
          <span className="text-[#FF4FBF]">did it.</span>
        </h1>

        {/* Wholesome message */}
        <p className="mx-auto mt-7 max-w-md text-base leading-7 text-[#9BA99F] sm:text-lg sm:leading-8">
          You stepped away from the screen, went outside, and made a little
          adventure out of an ordinary day.
        </p>

        <p className="mt-6 text-lg font-bold text-[#F5F7E9]">
          That's the whole point. 🌱
        </p>

        {/* Finish */}
        <button
          onClick={handleFinish}
          disabled={celebrating}
          className="
        group
        mt-9
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-[#B7FF4A]
        px-8
        py-5
        text-base
        font-bold
        text-[#101A16]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#FF4FBF]
        hover:shadow-[0_18px_50px_rgba(255,79,191,0.2)]
        active:translate-y-0
        disabled:cursor-default
        disabled:hover:translate-y-0
      "
        >
          {celebrating ? "Nice. 🌱" : "Finish"}
          {!celebrating && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          )}
        </button>

        <p className="mt-5 text-xs text-[#536057]">Now go live your life.</p>
      </section>
    </main>
  );
}
