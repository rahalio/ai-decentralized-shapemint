import { PageHeader, Panel, StatusPill, HitlParityBadge } from '@/components/ui';
import { InfluenceScoreMeter } from '@/components/influence-score-meter';
import { IncentiveBandTable } from '@/components/incentive-band-table';
import {
  DEMO_CONTRIBUTIONS,
  DEMO_LEDGER,
  DEMO_MODEL,
  DEMO_OBLIGATIONS,
  DEMO_POISON_QUEUE,
  DEMO_PROTOCOLS,
  DEMO_SCORE,
  DEMO_STATEMENT,
  DEMO_GRANTS,
} from '@/lib/demo-data';
import Link from 'next/link';

export function OwnerHome() {
  return (
    <>
      <PageHeader
        brandMark
        title="Which contributions moved behaviour?"
        subtitle="Influence inflow versus treasury obligations — assay before mint."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-2">
          <h2 className="mb-4 text-sm uppercase tracking-wide text-steel">Influence inflow</h2>
          <InfluenceScoreMeter />
        </Panel>
        <Panel>
          <h2 className="mb-3 text-sm uppercase tracking-wide text-steel">Treasury draft</h2>
          <p className="font-display text-3xl text-mint">USD 1,250</p>
          <p className="mt-1 text-sm text-steel">pending obligations</p>
          <Link href="/minting" className="mt-4 inline-block text-sm text-brand underline-offset-2 hover:underline">
            Open minting
          </Link>
        </Panel>
        <Panel className="lg:col-span-3">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm uppercase tracking-wide text-steel">Poison queue</h2>
            <Link href="/governance" className="text-sm text-coral">
              Review
            </Link>
          </div>
          {DEMO_POISON_QUEUE.map((item) => (
            <div key={item.contributionId} className="flex flex-wrap items-center justify-between gap-2 border-t border-assay-700/50 py-3">
              <div>
                <p className="font-mono text-xs text-steel">{item.contributionId}</p>
                <p className="text-sm text-ink">{item.evidence}</p>
              </div>
              <span className="font-mono text-coral">{item.delta}</span>
            </div>
          ))}
        </Panel>
      </div>
    </>
  );
}

export function ContributorHome() {
  return (
    <>
      <PageHeader
        brandMark
        title="Your pending influence"
        subtitle="See pending, accepted, and rejected scores with reasons before settlement."
      />
      <div className="mb-4">
        <Link
          href="/contribute"
          className="inline-flex rounded-sm bg-mint px-4 py-2 text-sm font-medium text-assay-950 transition hover:bg-brand"
        >
          Submit contribution
        </Link>
      </div>
      <div className="space-y-3">
        {DEMO_CONTRIBUTIONS.map((c) => (
          <Panel key={c.contributionId}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-steel">{c.contributionId}</p>
                <p className="mt-1 flex items-center gap-2 text-ink">
                  {c.kind.replace('_', ' ')}
                  {c.kind === 'hitl_batch' ? <HitlParityBadge /> : null}
                  {c.privacyMode ? <span className="text-xs text-steel">privacy mode</span> : null}
                </p>
              </div>
              <StatusPill status={c.status} />
            </div>
          </Panel>
        ))}
      </div>
    </>
  );
}

export function AuditorHome() {
  return (
    <>
      <PageHeader
        brandMark
        title="Reproduce without raw data"
        subtitle="Attestations and aggregates only — confirm scores or flag drift."
      />
      <Panel>
        <p className="font-mono text-xs text-steel">{DEMO_SCORE.influenceScoreId}</p>
        <p className="mt-2 text-ink">Score under review · recorded {DEMO_SCORE.score.toFixed(2)}</p>
        <Link
          href="/reproduce"
          className="mt-4 inline-flex rounded-sm border border-mint/40 px-3 py-1.5 text-sm text-mint hover:bg-mint/10"
        >
          Open reproduce workspace
        </Link>
      </Panel>
    </>
  );
}

export function OpsHome() {
  return (
    <>
      <PageHeader brandMark title="Mint and close" subtitle="Score → amount. Pause blocks mint until resume." />
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h2 className="mb-3 text-sm text-steel">Policy bands</h2>
          <IncentiveBandTable />
          <Link href="/minting" className="mt-4 inline-block text-sm text-brand hover:underline">
            Incentive minting
          </Link>
        </Panel>
        <Panel>
          <h2 className="mb-3 text-sm text-steel">Latest statement</h2>
          <p className="font-display text-2xl text-ink">{DEMO_STATEMENT.period}</p>
          <p className="text-mint">USD {DEMO_STATEMENT.total}</p>
          <Link href="/statements" className="mt-4 inline-block text-sm text-brand hover:underline">
            Settlement statements
          </Link>
        </Panel>
      </div>
    </>
  );
}

export function ComplianceHome() {
  return (
    <>
      <PageHeader
        brandMark
        title="Competitor isolation"
        subtitle="Parties see aggregate proofs relevant to them — not rival methods."
      />
      <Panel>
        <p className="text-sm text-steel">{DEMO_GRANTS.length} active grants on {DEMO_MODEL.name}</p>
        <Link href="/grants" className="mt-4 inline-block text-sm text-brand hover:underline">
          Manage isolation grants
        </Link>
      </Panel>
    </>
  );
}

export function ProtocolsPage() {
  return (
    <>
      <PageHeader
        title="Evaluation protocols"
        subtitle="Publish which behaviours count so out-of-scope gaming does not earn."
      />
      <div className="space-y-3">
        {DEMO_PROTOCOLS.map((p) => (
          <Panel key={p.protocolId}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-steel">{p.protocolId} · v{p.version}</p>
                <h2 className="mt-1 text-lg text-ink">{p.name}</h2>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {p.inScopeBehaviours.map((b) => (
                    <li key={b} className="rounded-sm border border-assay-700 px-2 py-0.5 font-mono text-xs text-steel">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <StatusPill status={p.status} />
            </div>
            {p.status === 'draft' ? (
              <button type="button" className="mt-4 rounded-sm bg-mint px-3 py-1.5 text-sm text-assay-950">
                Publish version
              </button>
            ) : null}
          </Panel>
        ))}
      </div>
    </>
  );
}

export function ContributePage() {
  return (
    <>
      <PageHeader
        title="Contribution intake"
        subtitle="Model updates, data refs, and HITL batches share the same metering."
      />
      <Panel className="max-w-xl space-y-4">
        <label className="block text-sm text-steel">
          Type
          <select className="mt-1 w-full rounded-sm border border-assay-700 bg-assay-950 px-3 py-2 text-ink">
            <option>model_update</option>
            <option>data_ref</option>
            <option>hitl_batch</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" defaultChecked className="accent-mint" />
          Privacy mode — never disclose underlying datasets
        </label>
        <label className="flex items-center gap-2 text-sm text-ink">
          <input type="checkbox" className="accent-mint" />
          I accept the incentive policy bands (required)
        </label>
        <label className="block text-sm text-steel">
          Artefact / reference
          <input
            className="mt-1 w-full rounded-sm border border-assay-700 bg-assay-950 px-3 py-2 font-mono text-ink"
            placeholder="s3://… or opaque hash under privacy mode"
          />
        </label>
        <div className="flex gap-2">
          <button type="button" className="rounded-sm bg-mint px-4 py-2 text-sm text-assay-950">
            Submit
          </button>
          <button type="button" className="rounded-sm border border-assay-700 px-4 py-2 text-sm text-steel">
            Save draft
          </button>
        </div>
        <div>
          <p className="mb-2 text-xs uppercase text-steel">Expected band (preview)</p>
          <IncentiveBandTable />
        </div>
      </Panel>
    </>
  );
}

export function InfluencePage() {
  return (
    <>
      <PageHeader brandMark title="Influence score" subtitle="Quantified behavioural impact with accept / reject reasons." />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <InfluenceScoreMeter />
          <div className="mt-4 flex items-center gap-2">
            <StatusPill status={DEMO_SCORE.status} />
            <span className="text-xs text-steel">{DEMO_SCORE.reproducible ? 'reproducible' : 'not reproducible'}</span>
          </div>
        </Panel>
        <Panel>
          <h2 className="mb-3 text-sm text-steel">Actions</h2>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="rounded-sm bg-mint px-3 py-1.5 text-sm text-assay-950">
              Accept
            </button>
            <button type="button" className="rounded-sm border border-amber/50 px-3 py-1.5 text-sm text-amber">
              Challenge
            </button>
            <Link href="/governance" className="rounded-sm border border-coral/50 px-3 py-1.5 text-sm text-coral">
              Open poison ruling
            </Link>
          </div>
          <Link href="/reproduce" className="mt-4 block text-sm text-brand hover:underline">
            Reproducibility pack
          </Link>
        </Panel>
      </div>
    </>
  );
}

export function LedgerPage() {
  return (
    <>
      <PageHeader brandMark title="Influence ledger" subtitle="Append-only activity — no discretionary rewrite." />
      <Panel>
        <ul className="divide-y divide-assay-700/60">
          {DEMO_LEDGER.map((e) => (
            <li key={e.eventId} className="flex flex-wrap items-center justify-between gap-2 py-3">
              <div>
                <StatusPill status={e.eventType} />
                <p className="mt-1 text-ink">{e.summary}</p>
              </div>
              <time className="font-mono text-xs text-steel">{e.at}</time>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}

export function ReproducePage() {
  return (
    <>
      <PageHeader
        title="Auditor reproduce workspace"
        subtitle="Recompute influence from hashes and aggregates — never raw training data."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <h2 className="mb-2 text-sm text-steel">Recorded score</h2>
          <p className="font-display text-4xl text-mint">{DEMO_SCORE.score.toFixed(2)}</p>
          <h3 className="mb-2 mt-6 text-sm text-steel">Attestation hashes</h3>
          <ul className="space-y-1 font-mono text-xs text-steel">
            {DEMO_SCORE.attestationHashes.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <h2 className="mb-3 text-sm text-steel">Reproduce run</h2>
          <p className="text-sm text-ink">Harness inputs: aggregate metrics only.</p>
          <p className="mt-4 font-mono text-sm text-steel">diff vs recorded: +0.00</p>
          <div className="mt-4 flex gap-2">
            <button type="button" className="rounded-sm bg-mint px-3 py-1.5 text-sm text-assay-950">
              Run reproduce
            </button>
            <button type="button" className="rounded-sm border border-coral/50 px-3 py-1.5 text-sm text-coral">
              Flag drift
            </button>
          </div>
        </Panel>
      </div>
    </>
  );
}

export function GovernancePage() {
  return (
    <>
      <PageHeader title="Negative-influence gate" subtitle="Zero-pay or clawback with a documented ruling." />
      <Panel>
        {DEMO_POISON_QUEUE.map((item) => (
          <div key={item.contributionId} className="space-y-3">
            <p className="font-mono text-xs text-steel">{item.contributionId}</p>
            <p className="text-ink">{item.evidence}</p>
            <p className="font-mono text-coral">behavioural delta {item.delta}</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="rounded-sm bg-coral px-3 py-1.5 text-sm text-ink">
                Rule zero_pay
              </button>
              <button type="button" className="rounded-sm border border-coral/50 px-3 py-1.5 text-sm text-coral">
                Clawback
              </button>
              <button type="button" className="rounded-sm border border-mint/40 px-3 py-1.5 text-sm text-mint">
                Cleared
              </button>
            </div>
          </div>
        ))}
      </Panel>
      <Panel className="mt-4">
        <h2 className="mb-2 text-sm text-steel">Minting pause</h2>
        <p className="text-coral">{DEMO_MODEL.pauseReason}</p>
        <button type="button" className="mt-3 rounded-sm border border-mint/40 px-3 py-1.5 text-sm text-mint">
          Resume minting
        </button>
      </Panel>
    </>
  );
}

export function MintingPage() {
  return (
    <>
      <PageHeader brandMark title="Incentive minting" subtitle="Map influence bands to payouts; pause blocks execute." />
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <h2 className="mb-3 text-sm text-steel">Policy bands</h2>
          <IncentiveBandTable />
        </Panel>
        <Panel>
          <h2 className="mb-3 text-sm text-steel">Obligation drafts</h2>
          {DEMO_OBLIGATIONS.map((o) => (
            <div key={o.obligationId} className="border-t border-assay-700/50 py-3">
              <p className="font-mono text-xs text-steel">{o.obligationId}</p>
              <p className="text-ink">
                score {o.score} → USD {o.amount}
              </p>
              <StatusPill status={o.status} />
            </div>
          ))}
          <button
            type="button"
            disabled={DEMO_MODEL.mintingPaused}
            className="mint-flash mt-4 rounded-sm bg-mint px-4 py-2 text-sm text-assay-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {DEMO_MODEL.mintingPaused ? 'Mint blocked (paused)' : 'Execute mint'}
          </button>
        </Panel>
      </div>
    </>
  );
}

export function StatementsPage() {
  return (
    <>
      <PageHeader brandMark title="Settlement statements" subtitle="Score → amount lines for finance and tax." />
      <Panel>
        <p className="font-mono text-xs text-steel">{DEMO_STATEMENT.statementId}</p>
        <p className="mt-1 font-display text-2xl text-ink">{DEMO_STATEMENT.period}</p>
        <p className="text-mint">Total USD {DEMO_STATEMENT.total}</p>
        <table className="mt-4 w-full text-sm">
          <thead className="text-xs text-steel">
            <tr>
              <th className="pb-2 text-left">Contribution</th>
              <th className="pb-2 text-left">Score</th>
              <th className="pb-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_STATEMENT.lines.map((line) => (
              <tr key={line.contributionId} className="border-t border-assay-700/50">
                <td className="py-2 font-mono text-xs">{line.contributionId}</td>
                <td className="py-2 font-mono">{line.score}</td>
                <td className="py-2 text-mint">USD {line.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="mt-4 rounded-sm border border-brand/40 px-3 py-1.5 text-sm text-brand">
          Download statement
        </button>
      </Panel>
    </>
  );
}

export function GrantsPage() {
  return (
    <>
      <PageHeader
        title="Competitor isolation grants"
        subtitle="Selective transparency — default-deny for rival method fields."
      />
      <Panel>
        <table className="w-full text-sm">
          <thead className="text-xs text-steel">
            <tr>
              <th className="pb-2 text-left">Party</th>
              <th className="pb-2 text-left">Visible fields</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_GRANTS.map((g) => (
              <tr key={g.grantId} className="border-t border-assay-700/50">
                <td className="py-3 font-mono text-xs">{g.granteePartyId}</td>
                <td className="py-3 text-steel">{g.visibleFields.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="mt-4 rounded-sm bg-mint px-3 py-1.5 text-sm text-assay-950">
          Simulate party view
        </button>
      </Panel>
    </>
  );
}
