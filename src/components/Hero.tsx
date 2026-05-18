import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[var(--container-content)] px-6 pt-8 pb-12 sm:px-10 sm:pt-12 sm:pb-16">
        <AnimateOnScroll
          as="div"
          preset="fade-up"
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="font-serif text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.15] text-ink">
            Transform Your WordPress Site with Stunning Animations
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/90">
            AnimateWP is the ultimate solution for adding captivating animations
            to your WordPress site. Effortlessly bring your content to life and
            enhance user interaction with stunning visual effects.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#learn-more" className="awp-button">
              Learn more
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll
          as="div"
          preset="fade-up"
          delay={0.15}
          className="mt-10 sm:mt-14"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/demo.gif"
            alt="AnimateWP demo showing animations applied inside the WordPress block editor"
            className="mx-auto block w-full max-w-5xl rounded-3xl shadow-[0_20px_60px_-20px_rgba(166,43,12,0.18)]"
            loading="eager"
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
