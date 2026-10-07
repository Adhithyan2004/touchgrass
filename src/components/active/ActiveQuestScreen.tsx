type ActiveQuestScreenProps = {
  onComplete: () => void;
};

export default function ActiveQuestScreen({
  onComplete,
}: ActiveQuestScreenProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#101A16] px-6 py-5 text-[#F5F7E9]">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            radial-gradient(circle, #B7FF4A 1.5px, transparent 1.5px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B7FF4A] opacity-[0.07] blur-[140px]" />

      {/* Floating shapes */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-10 w-10 rounded-full bg-[#55D9FF] opacity-60 animate-[float_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute right-[12%] top-[30%] h-14 w-14 rotate-12 rounded-2xl bg-[#FF4FBF] opacity-60 animate-[float_5s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute bottom-[20%] left-[18%] h-7 w-7 rotate-45 bg-[#FF8A3D] opacity-70 animate-[float_4s_ease-in-out_infinite]" />

      <section className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Quest status */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#B7FF4A]/20 bg-[#B7FF4A]/[0.08] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#B7FF4A]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#B7FF4A] shadow-[0_0_12px_#B7FF4A]" />
          Quest started
        </div>

        {/* Nature icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#B7FF4A]/10 text-6xl shadow-[0_0_80px_rgba(183,255,74,0.08)]">
          🌳
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl">
          Stop looking
          <br />
          at your screen.
        </h1>

        {/* Highlight */}
        <div className="mx-auto mt-7 h-1.5 w-24 rounded-full bg-[#FF4FBF]" />

        {/* Description */}
        <p className="mx-auto mt-7 max-w-lg text-base leading-7 text-[#9BA99F] sm:text-lg sm:leading-8">
          Your quest has started.
          <br />
          Go outside. Do the thing.
          <br />
          Come back when you're done.
        </p>

        {/* Minimal quest state */}
        <div className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#18251F] px-5 py-3 text-sm text-[#89968F]">
          <span className="text-[#B7FF4A]">●</span>
          Adventure in progress
        </div>

        {/* Completion */}
        <button
          onClick={onComplete}
          className="
            group
            mt-10
            inline-flex
            items-center
            gap-2
            rounded-2xl
            bg-[#B7FF4A]
            px-8
            py-4
            text-base
            font-bold
            text-[#101A16]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#FF4FBF]
            hover:shadow-[0_18px_50px_rgba(255,79,191,0.2)]
            active:translate-y-0
          "
        >
          I'm back
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        {/* Tiny reminder */}
        <p className="mt-5 text-xs text-white">
          No rush. Enjoy being outside.
        </p>
      </section>
    </main>
  );
}
