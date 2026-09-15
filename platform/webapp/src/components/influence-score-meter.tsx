'use client';

import { DEMO_SCORE } from '@/lib/demo-data';

export function InfluenceScoreMeter({
  score = DEMO_SCORE.score,
  breakdown = DEMO_SCORE.breakdown,
}: {
  score?: number;
  breakdown?: Record<string, number>;
}) {
  const entries = Object.entries(breakdown);
  const max = Math.max(...entries.map(([, v]) => v), 0.01);

  return (
    <div className="score-land space-y-4">
      <div className="flex items-end gap-3">
        <p className="font-display text-5xl font-semibold tabular-nums text-mint">{score.toFixed(2)}</p>
        <p className="pb-2 text-sm text-steel">quantified influence</p>
      </div>
      <ul className="space-y-2">
        {entries.map(([metric, value]) => (
          <li key={metric}>
            <div className="mb-1 flex justify-between text-xs text-steel">
              <span>{metric}</span>
              <span className="font-mono text-ink">{value.toFixed(2)}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-sm bg-assay-700">
              <div
                className="h-full rounded-sm bg-mint transition-[width] duration-200"
                style={{ width: `${(value / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
