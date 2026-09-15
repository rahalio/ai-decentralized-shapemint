import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const submitContribution_Body = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
    contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
    privacyMode: z.boolean(),
    artefactRef: z.string().optional(),
    policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
    policyAccepted: z.boolean(),
  })
  .passthrough();
const ContributionKind = z.enum(['model_update', 'data_ref', 'hitl_batch']);
const ContributionStatus = z.enum([
  'draft',
  'submitted',
  'scoring',
  'accepted',
  'rejected',
  'withdrawn',
]);
const Contribution = z
  .object({
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
    kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
    status: z.enum([
      'draft',
      'submitted',
      'scoring',
      'accepted',
      'rejected',
      'withdrawn',
    ]),
    privacyMode: z.boolean(),
    artefactRef: z.string().optional(),
    policyId: z
      .string()
      .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    policyAccepted: z.boolean(),
    policyAcceptedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ContributionCreateRequest = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
    contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
    privacyMode: z.boolean(),
    artefactRef: z.string().optional(),
    policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
    policyAccepted: z.boolean(),
  })
  .passthrough();
const ContributionResponse = z
  .object({
    data: z
      .object({
        contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
        contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
        kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
        status: z.enum([
          'draft',
          'submitted',
          'scoring',
          'accepted',
          'rejected',
          'withdrawn',
        ]),
        privacyMode: z.boolean(),
        artefactRef: z.string().optional(),
        policyId: z
          .string()
          .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        policyAccepted: z.boolean(),
        policyAcceptedAt: z.string().datetime({ offset: true }).optional(),
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
const ContributionListData = z
  .object({
    items: z.array(
      z
        .object({
          contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
          contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
          kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
          status: z.enum([
            'draft',
            'submitted',
            'scoring',
            'accepted',
            'rejected',
            'withdrawn',
          ]),
          privacyMode: z.boolean(),
          artefactRef: z.string().optional(),
          policyId: z
            .string()
            .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          policyAccepted: z.boolean(),
          policyAcceptedAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
  })
  .passthrough();
const ContributionListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
              contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
              kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
              status: z.enum([
                'draft',
                'submitted',
                'scoring',
                'accepted',
                'rejected',
                'withdrawn',
              ]),
              privacyMode: z.boolean(),
              artefactRef: z.string().optional(),
              policyId: z
                .string()
                .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              policyAccepted: z.boolean(),
              policyAcceptedAt: z
                .string()
                .datetime({ offset: true })
                .optional(),
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
const ContributionId = z.string();
const UserId = z.string();
const PolicyId = z.string();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();

export const schemas: any = {
  submitContribution_Body,
  ContributionKind,
  ContributionStatus,
  Contribution,
  ContributionCreateRequest,
  ContributionResponse,
  ContributionListData,
  ContributionListResponse,
  ModelId,
  Problem,
  ContributionId,
  UserId,
  PolicyId,
  ResponseMeta,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/contributions',
    alias: 'listContributions',
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
        name: 'status',
        type: 'Query',
        schema: z
          .enum([
            'draft',
            'submitted',
            'scoring',
            'accepted',
            'rejected',
            'withdrawn',
          ])
          .optional(),
      },
      {
        name: 'kind',
        type: 'Query',
        schema: z.enum(['model_update', 'data_ref', 'hitl_batch']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  contributionId: z
                    .string()
                    .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
                  contributorId: z
                    .string()
                    .regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
                  status: z.enum([
                    'draft',
                    'submitted',
                    'scoring',
                    'accepted',
                    'rejected',
                    'withdrawn',
                  ]),
                  privacyMode: z.boolean(),
                  artefactRef: z.string().optional(),
                  policyId: z
                    .string()
                    .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  policyAccepted: z.boolean(),
                  policyAcceptedAt: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
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
    method: 'post',
    path: '/v1/contributions',
    alias: 'submitContribution',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: submitContribution_Body,
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
            contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
            kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
            status: z.enum([
              'draft',
              'submitted',
              'scoring',
              'accepted',
              'rejected',
              'withdrawn',
            ]),
            privacyMode: z.boolean(),
            artefactRef: z.string().optional(),
            policyId: z
              .string()
              .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            policyAccepted: z.boolean(),
            policyAcceptedAt: z.string().datetime({ offset: true }).optional(),
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
      {
        status: 422,
        description: `Semantically invalid request (e.g. PACK_EMPTY)`,
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
    path: '/v1/contributions/:contributionId',
    alias: 'getContribution',
    requestFormat: 'json',
    parameters: [
      {
        name: 'contributionId',
        type: 'Path',
        schema: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
            kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
            status: z.enum([
              'draft',
              'submitted',
              'scoring',
              'accepted',
              'rejected',
              'withdrawn',
            ]),
            privacyMode: z.boolean(),
            artefactRef: z.string().optional(),
            policyId: z
              .string()
              .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            policyAccepted: z.boolean(),
            policyAcceptedAt: z.string().datetime({ offset: true }).optional(),
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
    method: 'post',
    path: '/v1/contributions/drafts',
    alias: 'saveContributionDraft',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: submitContribution_Body,
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
            contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
            kind: z.enum(['model_update', 'data_ref', 'hitl_batch']),
            status: z.enum([
              'draft',
              'submitted',
              'scoring',
              'accepted',
              'rejected',
              'withdrawn',
            ]),
            privacyMode: z.boolean(),
            artefactRef: z.string().optional(),
            policyId: z
              .string()
              .regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            policyAccepted: z.boolean(),
            policyAcceptedAt: z.string().datetime({ offset: true }).optional(),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
