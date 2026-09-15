import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-24 md:justify-center md:pb-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(61,204,140,0.18),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(232,93,76,0.1),transparent_45%)]"
      />
      <div className="relative mx-auto w-full max-w-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-brand">Shapemint</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Pay for measured influence
        </h1>
        <p className="mt-4 max-w-md text-steel">
          Consortium assay ledger — score behavioural impact before incentives mint.
        </p>
        <Link
          href="/owner"
          className="mt-8 inline-flex rounded-sm bg-mint px-5 py-2.5 text-sm font-medium text-assay-950 transition hover:bg-brand"
        >
          Enter console
        </Link>
      </div>
    </main>
  );
}
