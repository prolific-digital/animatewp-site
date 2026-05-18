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
      className="w-full scroll-mt-24 bg-[var(--color-paper-2)]"
    >
      <div className="mx-auto max-w-[var(--container-content)] px-6 py-20 sm:px-10 sm:py-28">
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.15] text-ink">
            Why Choose AnimateWP?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/90">
            Transform your WordPress site with dynamic, visually stunning
            animations seamlessly integrated into the block editor. Highlight
            key information, captivate your audience, and add visual flair with
            ease.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll
          as="div"
          preset="fade-up-stagger"
          stagger={0.12}
          staggerSelector=".feature-card"
          className="mt-14 grid gap-10 sm:gap-12 md:grid-cols-3"
        >
          {features.map((f) => (
            <article key={f.title} className="feature-card text-center">
              <h3 className="font-sans text-base font-semibold leading-snug text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/85">
                {f.body}
              </p>
            </article>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
