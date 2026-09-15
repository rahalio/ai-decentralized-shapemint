import { clsx } from 'clsx';

export function PageHeader({
  title,
  subtitle,
  brandMark = false,
}: {
  title: string;
  subtitle?: string;
  brandMark?: boolean;
}) {
  return (
    <header className="mb-8">
      {brandMark ? (
        <p className="mb-2 text-xs uppercase tracking-[0.28em] text-brand">Shapemint</p>
      ) : null}
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink">{title}</h1>
      {subtitle ? <p className="mt-2 max-w-2xl text-steel">{subtitle}</p> : null}
    </header>
  );
}

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={clsx(
        'rounded-md border border-assay-700/80 bg-assay-900/70 p-5 shadow-[inset_0_1px_0_rgba(159,217,184,0.06)]',
        className,
      )}
    >
      {children}
    </section>
  );
}

export function StatusPill({
  status,
}: {
  status: string;
}) {
  const tone =
    status === 'accepted' || status === 'paid' || status === 'published' || status === 'minted'
      ? 'text-mint border-mint/40 bg-mint/10'
      : status === 'pending' || status === 'scoring' || status === 'submitted' || status === 'draft'
        ? 'text-amber border-amber/40 bg-amber/10'
        : status.includes('pause') || status === 'rejected' || status === 'clawed_back'
          ? 'text-coral border-coral/40 bg-coral/10'
          : 'text-steel border-assay-700 bg-assay-950';
  return (
    <span className={clsx('inline-flex rounded-sm border px-2 py-0.5 font-mono text-xs', tone)}>
      {status}
    </span>
  );
}

export function HitlParityBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-sm border border-mint/30 bg-mint/10 px-2 py-0.5 text-xs text-mint">
      HITL parity
    </span>
  );
}
