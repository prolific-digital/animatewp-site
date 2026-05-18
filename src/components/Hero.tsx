import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="w-full px-[var(--section-gutter)] py-[var(--section-gutter)]">
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="mx-auto flex w-full max-w-[var(--container-narrow)] flex-col items-center text-center"
        >
          <h1 className="awp-display mx-auto max-w-[var(--container-text)] font-serif font-normal text-ink">
            Transform Your WordPress Site with Stunning Animations
          </h1>
          <div aria-hidden="true" className="h-5" />
          <p className="mx-auto max-w-[var(--container-text)] text-[1.05rem] leading-[1.55] text-ink">
            AnimateWP is the ultimate solution for adding captivating animations
            to your WordPress site. Effortlessly bring your content to life and
            enhance user interaction with stunning visual effects.
          </p>
          <div aria-hidden="true" className="h-5" />
          <div className="flex flex-wrap items-center justify-center gap-[11.2px]">
            <a href="#learn-more" className="awp-button">
              Learn more
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          as="div"
          preset="fade-up"
          delay={0.15}
          className="mt-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/demo.gif"
            alt="Animated GIF of AnimateWP in action"
            className="awp-rounded mx-auto block w-full"
            loading="eager"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
