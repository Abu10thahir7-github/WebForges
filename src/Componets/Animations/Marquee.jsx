import React from "react";

/**
 * Marquee
 * A reusable, infinitely-scrolling horizontal list (tech stack, logos, tags, etc).
 *
 * Props:
 * - items: string[]                 Required. Items to display.
 * - speed: number                   Seconds for one full loop (default 25). Lower = faster.
 * - direction: 'left' | 'right'     Scroll direction (default 'left').
 * - pauseOnHover: boolean           Pause the animation on hover (default true).
 * - dotColor: string                Hex/CSS color for the leading dot (default '#f6bc17').
 * - className: string               Extra classes for the outer wrapper.
 * - itemClassName: string           Extra classes for each pill.
 */
export default function Marquee({
  items = [],
  speed = 25,
  direction = "left",
  pauseOnHover = true,
  dotColor = "#f6bc17",
  className = "",
  itemClassName = "",
}) {
  const duplicated = [...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`marquee-track flex w-max items-center gap-4 ${
          pauseOnHover ? "marquee-pausable" : ""
        }`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicated.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className={`flex shrink-0 items-center gap-2.5 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:border-[#f6bc17] hover:bg-[#FCF2D9] ${itemClassName}`}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: dotColor }}
            />
            {item}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-pausable:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

/* -------------------- Usage -------------------- */
// const STACK = [
//   'Next.js', 'React', 'TypeScript', 'Node.js',
//   'Tailwind CSS', 'SQL', 'MongoDB', 'REST APIs', 'Figma',
// ];
//
// <Marquee items={STACK} speed={30} />
// <Marquee items={STACK} direction="right" speed={20} pauseOnHover={false} />