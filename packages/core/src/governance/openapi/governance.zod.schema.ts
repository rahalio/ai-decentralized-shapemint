import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const ruleNegativeInfluence_Body = z
  .object({
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z
      .string()
      .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
    reason: z.string().max(2000).optional(),
  })
  .passthrough();
const pauseMinting_Body = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    reason: z.string().min(1).max(2000),
  })
  .passthrough();
const createTransparencyGrant_Body = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    granteePartyId: z.string().min(1),
    visibleFields: z.array(z.string()).min(1),
  })
  .passthrough();
const RulingOutcome = z.enum(['zero_pay', 'clawback', 'cleared']);
const NegativeInfluenceRuling = z
  .object({
    rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z
      .string()
      .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
    reason: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const NegativeInfluenceRulingCreate = z
  .object({
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z
      .string()
      .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
    reason: z.string().max(2000).optional(),
  })
  .passthrough();
const MintingPause = z
  .object({
    pauseId: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    active: z.boolean(),
    reason: z.string().optional(),
    resumedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const MintingPauseCreate = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    reason: z.string().min(1).max(2000),
  })
  .passthrough();
const TransparencyGrant = z
  .object({
    grantId: z.string().regex(/^grn_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    granteePartyId: z.string().min(1),
    visibleFields: z.array(z.string()),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const TransparencyGrantCreate = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    granteePartyId: z.string().min(1),
    visibleFields: z.array(z.string()).min(1),
  })
  .passthrough();
const RulingResponse = z
  .object({
    data: z
      .object({
        rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
        contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelId: z
          .string()
          .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
        reason: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const RulingListData = z
  .object({
    items: z.array(
      z
        .object({
          rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
          contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelId: z
            .string()
            .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
          reason: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
  })
  .passthrough();
const RulingListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
              contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelId: z
                .string()
                .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
              reason: z.string().optional(),
              createdAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const PauseResponse = z
  .object({
    data: z
      .object({
        pauseId: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
        active: z.boolean(),
        reason: z.string().optional(),
        resumedAt: z.string().datetime({ offset: true }).optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const PauseListData = z
  .object({
    items: z.array(
      z
        .object({
          pauseId: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
          active: z.boolean(),
          reason: z.string().optional(),
          resumedAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
  })
  .passthrough();
const PauseListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              pauseId: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
              active: z.boolean(),
              reason: z.string().optional(),
              resumedAt: z.string().datetime({ offset: true }).optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const GrantResponse = z
  .object({
    data: z
      .object({
        grantId: z.string().regex(/^grn_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
        granteePartyId: z.string().min(1),
        visibleFields: z.array(z.string()),
        createdAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const GrantListData = z
  .object({
    items: z.array(
      z
        .object({
          grantId: z.string().regex(/^grn_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
          granteePartyId: z.string().min(1),
          visibleFields: z.array(z.string()),
          createdAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
  })
  .passthrough();
const GrantListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              grantId: z.string().regex(/^grn_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
              granteePartyId: z.string().min(1),
              visibleFields: z.array(z.string()),
              createdAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const ModelId = z.string();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const RulingId = z.string();
const ContributionId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const PauseId = z.string();
const GrantId = z.string();

export const schemas: any = {
  ruleNegativeInfluence_Body,
  pauseMinting_Body,
  createTransparencyGrant_Body,
  RulingOutcome,
  NegativeInfluenceRuling,
  NegativeInfluenceRulingCreate,
  MintingPause,
  MintingPauseCreate,
  TransparencyGrant,
  TransparencyGrantCreate,
  RulingResponse,
  RulingListData,
  RulingListResponse,
  PauseResponse,
  PauseListData,
  PauseListResponse,
  GrantResponse,
  GrantListData,
  GrantListResponse,
  ModelId,
  Problem,
  RulingId,
  ContributionId,
  ResponseMeta,
  PauseId,
  GrantId,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/v1/governance/minting-pause',
    alias: 'pauseMinting',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: pauseMinting_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            pauseId: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            active: z.boolean(),
            reason: z.string().optional(),
            resumedAt: z.string().datetime({ offset: true }).optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/governance/minting-pause/:pauseId/resume',
    alias: 'resumeMinting',
    requestFormat: 'json',
    parameters: [
      {
        name: 'pauseId',
        type: 'Path',
        schema: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            pauseId: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            active: z.boolean(),
            reason: z.string().optional(),
            resumedAt: z.string().datetime({ offset: true }).optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/governance/minting-pauses',
    alias: 'listMintingPauses',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'modelId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
      {
        name: 'active',
        type: 'Query',
        schema: z.boolean().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  pauseId: z.string().regex(/^pse_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
                  active: z.boolean(),
                  reason: z.string().optional(),
                  resumedAt: z.string().datetime({ offset: true }).optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/governance/negative-influence',
    alias: 'listNegativeInfluenceRulings',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'modelId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
                  contributionId: z
                    .string()
                    .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelId: z
                    .string()
                    .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
                  reason: z.string().optional(),
                  createdAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/governance/negative-influence',
    alias: 'ruleNegativeInfluence',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: ruleNegativeInfluence_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
            contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z
              .string()
              .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            outcome: z.enum(['zero_pay', 'clawback', 'cleared']),
            reason: z.string().optional(),
            createdAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/governance/transparency-grants',
    alias: 'listTransparencyGrants',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
      {
        name: 'modelId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  grantId: z.string().regex(/^grn_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
                  granteePartyId: z.string().min(1),
                  visibleFields: z.array(z.string()),
                  createdAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/governance/transparency-grants',
    alias: 'createTransparencyGrant',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createTransparencyGrant_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            grantId: z.string().regex(/^grn_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            granteePartyId: z.string().min(1),
            visibleFields: z.array(z.string()),
            createdAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
