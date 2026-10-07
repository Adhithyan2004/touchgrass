type PreferenceGroupProps = {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function PreferenceGroup({
  title,
  options,
  value,
  onChange,
}: PreferenceGroupProps) {
  return (
    <div className="rounded-3xl border border-white/[0.07] bg-[#18251F]/70 p-5 backdrop-blur-sm sm:p-6">
      <h2 className="mb-5 text-sm font-semibold tracking-tight text-[#F5F7E9]">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const selected = option === value;

          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`
                rounded-full
                border
                px-5
                py-3
                text-sm
                font-medium
                transition-all
                duration-200
                ease-out

                ${
                  selected
                    ? `
                      border-[#B7FF4A]
                      bg-[#B7FF4A]
                      text-[#101A16]
                      shadow-[0_6px_20px_rgba(183,255,74,0.12)]
                      -translate-y-0.5
                    `
                    : `
                      border-white/10
                      bg-[#101A16]/70
                      text-[#9BA99F]
                      hover:-translate-y-0.5
                      hover:border-[#B7FF4A]/40
                      hover:bg-[#B7FF4A]/[0.06]
                      hover:text-[#F5F7E9]
                    `
                }
              `}
            >
              {selected && (
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#101A16] align-middle" />
              )}

              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
