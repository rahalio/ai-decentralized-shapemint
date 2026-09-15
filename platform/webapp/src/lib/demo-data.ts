export type Role = 'owner' | 'contributor' | 'auditor' | 'ops' | 'compliance';

export const ROLES: { id: Role; label: string; home: string }[] = [
  { id: 'owner', label: 'Model owner', home: '/owner' },
  { id: 'contributor', label: 'Contributor / HITL', home: '/contributor' },
  { id: 'auditor', label: 'Auditor', home: '/auditor' },
  { id: 'ops', label: 'Incentive ops', home: '/ops' },
  { id: 'compliance', label: 'Compliance', home: '/compliance' },
];

export const DEMO_MODEL = {
  modelId: 'mdl_01JZDEMO000000000000000001',
  name: 'Consortium Clinical Risk v3',
  mintingPaused: true,
  pauseReason: 'Evaluation drift on fairness slice (holdout Δ > 2σ)',
};

export const DEMO_PROTOCOLS = [
  {
    protocolId: 'prt_01JZDEMO000000000000000001',
    name: 'In-scope behaviours · fairness + holdout',
    version: '2.1.0',
    status: 'published' as const,
    inScopeBehaviours: ['holdout_accuracy', 'fairness_slice_a', 'calibration_brier'],
  },
  {
    protocolId: 'prt_01JZDEMO000000000000000002',
    name: 'Draft · toxicity guardrails',
    version: '0.3.0',
    status: 'draft' as const,
    inScopeBehaviours: ['toxicity_recall'],
  },
];

export const DEMO_CONTRIBUTIONS = [
  {
    contributionId: 'ctr_01JZDEMO000000000000000011',
    kind: 'model_update' as const,
    status: 'scoring' as const,
    privacyMode: true,
    contributor: 'lab.north@external',
  },
  {
    contributionId: 'ctr_01JZDEMO000000000000000012',
    kind: 'hitl_batch' as const,
    status: 'accepted' as const,
    privacyMode: false,
    contributor: 'annotator.pool@hitl',
  },
  {
    contributionId: 'ctr_01JZDEMO000000000000000013',
    kind: 'data_ref' as const,
    status: 'submitted' as const,
    privacyMode: true,
    contributor: 'hospital.east@partner',
  },
];

export const DEMO_SCORE = {
  influenceScoreId: 'inf_01JZDEMO000000000000000021',
  contributionId: 'ctr_01JZDEMO000000000000000012',
  score: 0.42,
  status: 'pending' as const,
  reproducible: true,
  breakdown: {
    holdout_accuracy: 0.18,
    fairness_slice_a: 0.16,
    calibration_brier: 0.08,
  },
  attestationHashes: [
    'sha256:9f2a…c1e4',
    'sha256:44b0…91aa',
  ],
};

export const DEMO_LEDGER = [
  { eventId: 'led_1', eventType: 'submitted', summary: 'HITL batch received', at: '2026-09-14T09:12:00Z' },
  { eventId: 'led_2', eventType: 'scored', summary: 'Influence 0.42 vs protocol 2.1.0', at: '2026-09-14T09:18:00Z' },
  { eventId: 'led_3', eventType: 'minting_paused', summary: 'Governance pause — eval drift', at: '2026-09-14T10:02:00Z' },
  { eventId: 'led_4', eventType: 'accepted', summary: 'Owner accepted prior update', at: '2026-09-13T16:40:00Z' },
  { eventId: 'led_5', eventType: 'minted', summary: 'Obligation USD 1,250 pending', at: '2026-09-13T16:55:00Z' },
];

export const DEMO_POISON_QUEUE = [
  {
    contributionId: 'ctr_01JZDEMO000000000000000099',
    delta: -0.31,
    evidence: 'Holdout accuracy collapsed on fairness slice A',
  },
];

export const DEMO_POLICY_BANDS = [
  { minScore: 0.1, maxScore: 0.25, amount: '250.00', currency: 'USD' },
  { minScore: 0.25, maxScore: 0.5, amount: '1250.00', currency: 'USD' },
  { minScore: 0.5, maxScore: 1.0, amount: '4000.00', currency: 'USD' },
];

export const DEMO_OBLIGATIONS = [
  {
    obligationId: 'obl_01JZDEMO000000000000000031',
    contributionId: 'ctr_01JZDEMO000000000000000012',
    amount: '1250.00',
    status: 'pending' as const,
    score: 0.42,
  },
];

export const DEMO_STATEMENT = {
  statementId: 'stm_01JZDEMO000000000000000041',
  period: '2026-Q3',
  total: '12,450.00',
  lines: [
    { contributionId: 'ctr_…012', score: 0.42, amount: '1,250.00' },
    { contributionId: 'ctr_…008', score: 0.61, amount: '4,000.00' },
    { contributionId: 'ctr_…003', score: 0.19, amount: '250.00' },
  ],
};

export const DEMO_GRANTS = [
  {
    grantId: 'grn_01JZDEMO000000000000000051',
    granteePartyId: 'party.hospital-east',
    visibleFields: ['aggregate_score', 'protocol_version', 'status'],
  },
  {
    grantId: 'grn_01JZDEMO000000000000000052',
    granteePartyId: 'party.lab-north',
    visibleFields: ['aggregate_score', 'status'],
  },
];
