import { DEMO_POLICY_BANDS } from '@/lib/demo-data';

export function IncentiveBandTable() {
  return (
    <table className="w-full text-left text-sm">
      <thead className="text-xs uppercase tracking-wide text-steel">
        <tr>
          <th className="pb-2 font-medium">Min score</th>
          <th className="pb-2 font-medium">Max score</th>
          <th className="pb-2 font-medium">Payout</th>
        </tr>
      </thead>
      <tbody>
        {DEMO_POLICY_BANDS.map((band) => (
          <tr key={`${band.minScore}-${band.maxScore}`} className="border-t border-assay-700/60">
            <td className="py-2 font-mono">{band.minScore}</td>
            <td className="py-2 font-mono">{band.maxScore}</td>
            <td className="py-2 font-display text-mint">
              {band.currency} {band.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
