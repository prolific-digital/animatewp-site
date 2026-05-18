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

const advancedSettings = [
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="awp-asterisk awp-h3 font-serif font-normal text-ink">
      {children}
    </h3>
  );
}

export default function Features() {
  return (
    <section className="w-full px-[var(--section-gutter)] py-[var(--section-gutter)]">
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        {/* Intro */}
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="mx-auto flex w-full max-w-[var(--container-narrow)] flex-col items-center text-center"
        >
          <h2 className="awp-asterisk awp-asterisk-center awp-display text-center font-serif font-normal text-ink">
            Features at a Glance
          </h2>
          <div aria-hidden="true" className="h-4" />
          <p className="text-[1.05rem] leading-[1.55] text-ink">
            Discover the powerful tools that make AnimateWP essential for
            creating stunning, dynamic WordPress sites. Enhance your content
            effortlessly with these standout features.
          </p>
        </AnimateOnScroll>

        <div aria-hidden="true" className="h-16" />

        {/* Row 1: Key Benefits (text-left) + abstract-2 (image-right) */}
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="grid items-center gap-10 md:[grid-template-columns:473fr_591fr] md:gap-x-[168px]"
        >
          <div>
            <H3>Key Benefits</H3>
            <ul className="awp-checkmark-list mt-5 text-[1.05rem] text-ink">
              {keyBenefits.map((item) => (
                <li key={item.label}>
                  <strong className="font-semibold">{item.label}:</strong>{" "}
                  {item.body}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/images/abstract-2.webp"
              alt="AnimateWP abstract image"
              width={1024}
              height={585}
              className="awp-rounded h-auto w-full"
              sizes="(min-width: 768px) 591px, 100vw"
            />
          </div>
        </AnimateOnScroll>

        <div aria-hidden="true" className="h-16" />

        {/* Row 2: screenshot (image-left) + Simple to Use (text-right) */}
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="grid items-center gap-10 md:[grid-template-columns:591fr_473fr] md:gap-x-[168px]"
        >
          <div>
            <Image
              src="/images/screenshot.png"
              alt="Screenshot of AnimateWP in action"
              width={1439}
              height={761}
              className="awp-rounded h-auto w-full"
              sizes="(min-width: 768px) 591px, 100vw"
            />
          </div>
          <div>
            <H3>Simple to Use</H3>
            <ol className="awp-numbered-list mt-5 text-[1.05rem] text-ink">
              {steps.map((step) => (
                <li key={step.label}>
                  <strong className="font-semibold">{step.label}:</strong>{" "}
                  {step.body}
                </li>
              ))}
            </ol>
          </div>
        </AnimateOnScroll>

        <div aria-hidden="true" className="h-16" />

        {/* Row 3: Advanced Animation Settings (text-left) + abstract-3 (image-right) */}
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="grid items-center gap-10 md:[grid-template-columns:473fr_591fr] md:gap-x-[168px]"
        >
          <div>
            <H3>Advanced Animation Settings</H3>
            <ul className="awp-checkmark-list mt-5 text-[1.05rem] text-ink">
              {advancedSettings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/images/abstract-3.webp"
              alt="AnimateWP abstract image"
              width={1024}
              height={585}
              className="awp-rounded h-auto w-full"
              sizes="(min-width: 768px) 591px, 100vw"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
