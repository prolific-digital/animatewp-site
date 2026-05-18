import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-[var(--container-content)] px-[var(--section-gutter)] py-[var(--section-gutter)]">
        <div className="flex justify-center">
          <Link
            href="/"
            aria-current="page"
            className="font-sans text-[1.05rem] font-semibold leading-[1.55] tracking-tight text-ink no-underline"
          >
            AnimateWP
          </Link>
        </div>
        <div className="mt-[var(--section-gutter)]">
          <p className="text-center text-[0.9rem] leading-[1.55] text-ink">
            Designed and developed by{" "}
            <a
              href="https://prolificdigital.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline-offset-4 hover:underline"
            >
              Prolific Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
