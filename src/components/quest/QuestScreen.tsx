import { Quest } from "@/types/quest";

type QuestScreenProps = {
  quest: Quest;
  onStart: () => void;
};

export default function QuestScreen({ quest, onStart }: QuestScreenProps) {
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

      {/* Ambient colors */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B7FF4A] opacity-[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-[#FF4FBF] opacity-[0.07] blur-[120px]" />

      <section className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>

            <span className="text-sm font-bold tracking-tight">touchgrass</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#66756D]">
            <span className="h-2 w-2 rounded-full bg-[#B7FF4A] shadow-[0_0_10px_#B7FF4A]" />
            Quest Ready
          </div>
        </div>

        {/* Quest label */}
        <div className="mt-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF4FBF]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FF4FBF]">
            <span>✦</span>
            Your quest
          </div>
        </div>

        {/* Main quest card */}
        <div className="relative mt-6 overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#18251F]/80 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-10">
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#B7FF4A] opacity-[0.08] blur-[50px]" />

          {/* Metadata */}
          <div className="relative flex flex-wrap gap-2">
            <span className="rounded-full bg-[#B7FF4A]/10 px-3 py-1.5 text-xs font-semibold text-[#B7FF4A]">
              {quest.duration}
            </span>

            <span className="rounded-full bg-[#55D9FF]/10 px-3 py-1.5 text-xs font-semibold text-[#55D9FF]">
              {quest.cost}
            </span>

            <span className="rounded-full bg-[#FF8A3D]/10 px-3 py-1.5 text-xs font-semibold text-[#FF8A3D]">
              {quest.difficulty}
            </span>
          </div>

          {/* Title */}
          <h1 className="relative mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
            {quest.title}
          </h1>

          {/* Description */}
          <p className="relative mt-6 max-w-2xl text-base leading-7 text-[#9BA99F] sm:text-lg sm:leading-8">
            {quest.description}
          </p>

          {/* Divider */}
          <div className="my-9 h-px bg-white/[0.08]" />

          {/* Objectives */}
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#F5F7E9]">
                Your objectives
              </h2>

              <span className="text-xs text-[#66756D]">
                {quest.steps.length} steps
              </span>
            </div>

            <div className="space-y-3">
              {quest.steps.map((step, index) => (
                <div
                  key={step}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-[#101A16]/60
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#B7FF4A]/20
                    hover:bg-[#B7FF4A]/[0.04]
                  "
                >
                  {/* Number */}
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#B7FF4A]
                      text-xs
                      font-bold
                      text-[#101A16]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-[#D2DAD4]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge */}
          <div className="mt-8 rounded-2xl border border-[#FF4FBF]/15 bg-[#FF4FBF]/[0.05] p-5">
            <div className="flex items-center gap-2">
              <span className="text-lg">⚡</span>

              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF4FBF]">
                Your challenge
              </p>
            </div>

            <p className="mt-3 text-sm font-medium leading-6 text-[#F5F7E9]">
              {quest.challenge}
            </p>
          </div>

          {/* Start button */}
          <button
            onClick={onStart}
            className="
              group
              mt-8
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
            "
          >
            Start Quest
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="mt-4 text-center text-xs text-[#66756D]">
            Once you start, close the app and go outside.
          </p>
        </div>
      </section>
    </main>
  );
}
