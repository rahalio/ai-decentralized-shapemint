'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { DEMO_MODEL, ROLES, type Role } from '@/lib/demo-data';
import { clsx } from 'clsx';

const NAV: Record<Role, { href: string; label: string }[]> = {
  owner: [
    { href: '/owner', label: 'Home' },
    { href: '/protocols', label: 'Protocols' },
    { href: '/ledger', label: 'Ledger' },
    { href: '/governance', label: 'Governance' },
    { href: '/minting', label: 'Minting' },
  ],
  contributor: [
    { href: '/contributor', label: 'Home' },
    { href: '/contribute', label: 'Submit' },
    { href: '/influence', label: 'My influence' },
  ],
  auditor: [
    { href: '/auditor', label: 'Home' },
    { href: '/reproduce', label: 'Reproduce' },
    { href: '/ledger', label: 'Activity' },
  ],
  ops: [
    { href: '/ops', label: 'Home' },
    { href: '/minting', label: 'Minting' },
    { href: '/statements', label: 'Statements' },
  ],
  compliance: [
    { href: '/compliance', label: 'Home' },
    { href: '/governance', label: 'Governance' },
    { href: '/grants', label: 'Isolation grants' },
  ],
};

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [role, setRole] = useState<Role>('owner');

  useEffect(() => {
    const stored = window.localStorage.getItem('shapemint.role') as Role | null;
    if (stored && ROLES.some((r) => r.id === stored)) setRole(stored);
  }, []);

  function changeRole(next: Role) {
    setRole(next);
    window.localStorage.setItem('shapemint.role', next);
  }

  const links = NAV[role];

  return (
    <div className="min-h-screen">
      <header className="border-b border-assay-700/80 bg-assay-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link href={ROLES.find((r) => r.id === role)?.home ?? '/owner'} className="group">
            <span className="text-xs uppercase tracking-[0.28em] text-brand">Shapemint</span>
            <span className="mt-0.5 block font-display text-sm text-steel group-hover:text-ink">
              {DEMO_MODEL.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'rounded-sm px-3 py-1.5 text-sm transition-colors',
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'bg-mint-dim/40 text-mint'
                    : 'text-steel hover:bg-assay-700/40 hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <label className="flex items-center gap-2 text-xs text-steel">
            Role
            <select
              value={role}
              onChange={(e) => changeRole(e.target.value as Role)}
              className="rounded-sm border border-assay-700 bg-assay-950 px-2 py-1 text-ink"
            >
              {ROLES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>
      {DEMO_MODEL.mintingPaused ? (
        <div
          role="status"
          aria-live="polite"
          className="pause-pulse border-b border-coral/40 bg-coral/15 px-6 py-2 text-center text-sm text-coral"
        >
          Minting paused — {DEMO_MODEL.pauseReason}
        </div>
      ) : null}
      <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
    </div>
  );
}
