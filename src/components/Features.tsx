import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const keyBenefits = [
  { label: "Compatibility", body: "Integrates smoothly with all WordPress blocks." },
  { label: "Advanced Controls", body: "Detailed settings for precise animation customization." },
  { label: "Presets", body: "A variety of presets for quick and easy animation application." },
  { label: "Customizable", body: "Create and tailor animations to your specific needs." },
  { label: "Scroll Triggers", body: "Control when animations occur with scroll trigger options." },
];

const steps = [
  { label: "Select Your Block", body: "Choose the block you want to animate." },
  { label: "Pick an Animation", body: "Click on the animations icon in the block toolbar and select a preset animation type from the dropdown menu." },
  { label: "Customize Settings", body: "Adjust advanced settings like duration, delay, easing, and more to perfect your animation." },
];

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mt-1 h-4 w-4 flex-none text-ink"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export default function Features() {
  return (
    <div className="mx-auto max-w-[var(--container-content)] px-6 py-20 sm:px-10 sm:py-28">
      <AnimateOnScroll
        as="div"
        preset="fade-up"
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-serif text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.15] text-ink">
          Features at a Glance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/90">
          Discover the powerful tools that make AnimateWP essential for creating
          stunning, dynamic WordPress sites. Enhance your content effortlessly
          with these standout features.
        </p>
      </AnimateOnScroll>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        <AnimateOnScroll as="div" preset="fade-up">
          <h3 className="font-serif text-[clamp(1.5rem,2.4vw,1.85rem)] leading-tight text-ink">
            Key Benefits
          </h3>
          <ul className="mt-5 space-y-3">
            {keyBenefits.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 text-base leading-relaxed text-ink/90"
              >
                <Check />
                <span>
                  <strong className="font-semibold text-ink">
                    {item.label}:
                  </strong>{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll as="div" preset="fade-up" delay={0.1}>
          <h3 className="font-serif text-[clamp(1.5rem,2.4vw,1.85rem)] leading-tight text-ink">
            Simple to Use
          </h3>
          <ol className="mt-5 space-y-4">
            {steps.map((step, i) => (
              <li
                key={step.label}
                className="flex items-start gap-3 text-base leading-relaxed text-ink/90"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-ink/40 font-serif text-sm leading-none text-ink"
                >
                  {i + 1}
                </span>
                <span>
                  <strong className="font-semibold text-ink">
                    {step.label}:
                  </strong>{" "}
                  {step.body}
                </span>
              </li>
            ))}
          </ol>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll as="div" preset="zoom-in" className="mt-16 sm:mt-20">
        <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl">
          <Image
            src="/images/abstract-2.webp"
            alt=""
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1280px) 1024px, 100vw"
          />
        </div>
      </AnimateOnScroll>
    </div>
  );
}
