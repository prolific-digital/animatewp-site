import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const settings = [
  "Enable/Disable Animation",
  "Loop Animations",
  "Auto Play Options",
  "Animation Duration and Delay",
  "Easing Functions",
  "Position Settings (PX and %)",
  "Scale and Rotation Adjustments",
  "Opacity and Repeat Controls",
  "Scroll Trigger Options",
];

export default function AdvancedSettings() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-6 pb-20 sm:px-10 sm:pb-28">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <AnimateOnScroll as="div" preset="fade-up">
          <h3 className="font-serif text-[clamp(1.5rem,2.4vw,1.85rem)] leading-tight text-ink">
            Advanced Animation Settings
          </h3>
          <ul className="mt-6 space-y-2.5">
            {settings.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base leading-relaxed text-ink/90"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ink"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll as="div" preset="fade-up" delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/abstract-3.webp"
              alt=""
              width={1200}
              height={1200}
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 540px, 100vw"
            />
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll as="div" preset="zoom-in" className="mt-16 sm:mt-20">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(166,43,12,0.18)]">
          <Image
            src="/images/screenshot.png"
            alt="Detailed screenshot of the AnimateWP advanced animation settings panel inside the WordPress block editor sidebar"
            width={2560}
            height={1353}
            className="h-auto w-full"
            sizes="(min-width: 1280px) 1152px, 100vw"
          />
        </div>
      </AnimateOnScroll>
    </div>
  );
}
