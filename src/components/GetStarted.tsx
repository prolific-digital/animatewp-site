import AnimateOnScroll from "./AnimateOnScroll";

export default function GetStarted() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container-content)] px-6 py-20 sm:px-10 sm:py-28">
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.15] text-ink">
            Get Started Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/90">
            Whether you&rsquo;re enhancing user interaction or adding visual
            flair, AnimateWP provides the flexibility and control you need.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/prolific-digital/animatewp"
              target="_blank"
              rel="noreferrer noopener"
              className="awp-button"
            >
              Get Started
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
