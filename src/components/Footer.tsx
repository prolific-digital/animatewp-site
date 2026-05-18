import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div className="mx-auto flex max-w-[var(--container-content)] flex-col items-center gap-3 px-6 pb-10 pt-4 sm:px-10">
        <Link
          href="/"
          aria-current="page"
          className="text-sm font-semibold tracking-wide text-ink"
        >
          AnimateWP
        </Link>
        <p className="text-sm text-ink/90">
          Designed with{" "}
          <a
            href="https://wordpress.org"
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4"
          >
            WordPress
          </a>{" "}
          by{" "}
          <a
            href="https://prolificdigital.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4"
          >
            Prolific Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
