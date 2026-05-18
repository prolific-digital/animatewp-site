import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-[var(--container-content)] items-center justify-between gap-5 px-[var(--section-gutter)] py-5">
        <Link
          href="/"
          aria-current="page"
          className="font-sans text-[1.2rem] font-semibold leading-[1.55] tracking-tight text-ink no-underline"
        >
          AnimateWP
        </Link>
        <a
          href="https://github.com/prolific-digital/animatewp"
          target="_blank"
          rel="noreferrer noopener nofollow"
          aria-label="AnimateWP on GitHub"
          className="inline-flex h-6 w-6 items-center justify-center text-[var(--color-ink-github)] transition-transform hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5C5.73.5.66 5.57.66 11.85c0 5.02 3.25 9.27 7.76 10.77.57.1.78-.25.78-.55v-1.92c-3.16.69-3.83-1.52-3.83-1.52-.52-1.32-1.27-1.67-1.27-1.67-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.52-.29-5.18-1.26-5.18-5.6 0-1.24.44-2.25 1.17-3.05-.12-.29-.5-1.45.1-3.02 0 0 .96-.31 3.15 1.16.91-.25 1.89-.38 2.87-.38s1.96.13 2.87.38c2.18-1.47 3.14-1.16 3.14-1.16.61 1.57.23 2.73.11 3.02.73.8 1.17 1.81 1.17 3.05 0 4.35-2.67 5.31-5.21 5.59.41.36.78 1.05.78 2.12v3.14c0 .31.21.66.79.55 4.5-1.5 7.75-5.74 7.75-10.76C23.34 5.57 18.27.5 12 .5z" />
          </svg>
          <span className="sr-only">AnimateWP on GitHub</span>
        </a>
      </div>
    </header>
  );
}
