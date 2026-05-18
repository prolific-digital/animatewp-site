import AnimateOnScroll from "./AnimateOnScroll";

export default function GetStarted() {
  return (
    <section className="w-full px-[var(--section-gutter)] py-[var(--section-gutter)]">
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="rounded-none bg-[var(--color-paper-2)] px-[var(--section-gutter)] py-16"
        >
          <div className="mx-auto flex w-full max-w-[var(--container-narrow)] flex-col items-center text-center">
            <div aria-hidden="true" className="h-4" />
            <h2 className="awp-display font-serif font-normal text-ink">
              Get Started Today
            </h2>
            <div aria-hidden="true" className="h-5" />
            <p className="text-[1.05rem] leading-[1.55] text-ink">
              Whether you&rsquo;re enhancing user interaction or adding visual
              flair, AnimateWP provides the flexibility and control you need.
            </p>
            <div aria-hidden="true" className="h-5" />
            <div className="flex flex-wrap items-center justify-center gap-[11.2px]">
              <a
                href="https://github.com/prolific-digital/animatewp"
                target="_blank"
                rel="noreferrer noopener"
                className="awp-button"
              >
                Get Started
              </a>
            </div>
            <div aria-hidden="true" className="h-4" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
