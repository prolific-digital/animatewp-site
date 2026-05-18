import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    title: "Dynamic and Engaging",
    body: "Transform static content into dynamic, engaging experiences that captivate and retain visitors. AnimateWP makes it easy to add visual flair, emphasize important content, and enhance user interaction with stunning animations.",
  },
  {
    title: "Seamless Integration",
    body: "AnimateWP works seamlessly with core blocks, third-party blocks, and custom blocks, ensuring compatibility and ease of use within the WordPress block editor.",
  },
  {
    title: "Advanced Customization",
    body: "Gain full access to detailed animation settings for precise customization. Tailor presets or create custom animations to fit your unique needs and achieve the exact look and feel you desire.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="learn-more"
      className="w-full scroll-mt-24 bg-[var(--color-paper-2)] px-[var(--section-gutter)] py-[var(--section-gutter)]"
    >
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="mx-auto flex w-full max-w-[var(--container-narrow)] flex-col items-center text-center"
        >
          <h2 className="awp-asterisk awp-asterisk-center awp-display text-center font-serif font-normal text-ink">
            Why Choose AnimateWP?
          </h2>
          <div aria-hidden="true" className="h-5" />
          <p className="text-[1.05rem] leading-[1.55] text-ink">
            Transform your WordPress site with dynamic, visually stunning
            animations seamlessly integrated into the block editor. Highlight
            key information, captivate your audience, and add visual flair with
            ease.
          </p>
        </AnimateOnScroll>

        <div aria-hidden="true" className="h-16" />

        <AnimateOnScroll
          as="div"
          preset="fade-up-stagger"
          stagger={0.12}
          staggerSelector=".feature-card"
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16"
        >
          {features.map((f) => (
            <article key={f.title} className="feature-card text-left">
              <h3 className="awp-asterisk font-sans text-[1.05rem] font-semibold leading-[1.2] text-ink">
                {f.title}
              </h3>
              <p className="mt-4 text-[1.05rem] leading-[1.55] text-ink">
                {f.body}
              </p>
            </article>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
