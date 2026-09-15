import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createIncentivePolicy_Body = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string().min(1).max(200),
    bands: z
      .array(
        z
          .object({
            minScore: z.number(),
            maxScore: z.number(),
            payout: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
  })
  .passthrough();
const mintIncentive_Body = z
  .object({
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
    influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
  })
  .passthrough();
const clawbackIncentive_Body = z
  .object({
    rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
    reason: z.string().min(1).max(2000),
  })
  .passthrough();
const createSettlementStatement_Body = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ObligationStatus = z.enum(['pending', 'paid', 'clawed_back']);
const InfluenceBand = z
  .object({
    minScore: z.number(),
    maxScore: z.number(),
    payout: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
  })
  .passthrough();
const IncentivePolicy = z
  .object({
    policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string().min(1).max(200),
    bands: z
      .array(
        z
          .object({
            minScore: z.number(),
            maxScore: z.number(),
            payout: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
    status: z.enum(['draft', 'active', 'retired']),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const PolicyCreateRequest = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    name: z.string().min(1).max(200),
    bands: z
      .array(
        z
          .object({
            minScore: z.number(),
            maxScore: z.number(),
            payout: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .passthrough()
      )
      .min(1),
  })
  .passthrough();
const PolicyAcceptRequest = z
  .object({ contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/) })
  .passthrough();
const PolicyAcceptance = z
  .object({
    policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
    contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
    acceptedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const IncentiveObligation = z
  .object({
    obligationId: z.string().regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
    policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
    amount: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    status: z.enum(['pending', 'paid', 'clawed_back']),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const IncentiveMintRequest = z
  .object({
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
    influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
  })
  .passthrough();
const ClawbackRequest = z
  .object({
    rulingId: z.string().regex(/^rul_[0-9A-HJKMNP-TV-Z]{26}$/),
    reason: z.string().min(1).max(2000),
  })
  .passthrough();
const SettlementLine = z
  .object({
    contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
    influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
    score: z.number(),
    amount: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
  })
  .passthrough();
const SettlementStatement = z
  .object({
    statementId: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
    lines: z.array(
      z
        .object({
          contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
          influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
          score: z.number(),
          amount: z
            .object({
              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
              currency: z
                .string()
                .min(3)
                .max(3)
                .regex(/^[A-Z]{3}$/),
            })
            .passthrough(),
        })
        .passthrough()
    ),
    total: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    createdAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const StatementCreateRequest = z
  .object({
    modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
  })
  .passthrough();
const PolicyResponse = z
  .object({
    data: z
      .object({
        policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
        name: z.string().min(1).max(200),
        bands: z
          .array(
            z
              .object({
                minScore: z.number(),
                maxScore: z.number(),
                payout: z
                  .object({
                    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                    currency: z
                      .string()
                      .min(3)
                      .max(3)
                      .regex(/^[A-Z]{3}$/),
                  })
                  .passthrough(),
              })
              .passthrough()
          )
          .min(1),
        status: z.enum(['draft', 'active', 'retired']),
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
const PolicyListData = z
  .object({
    items: z.array(
      z
        .object({
          policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
          name: z.string().min(1).max(200),
          bands: z
            .array(
              z
                .object({
                  minScore: z.number(),
                  maxScore: z.number(),
                  payout: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                })
                .passthrough()
            )
            .min(1),
          status: z.enum(['draft', 'active', 'retired']),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
  })
  .passthrough();
const PolicyListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
              name: z.string().min(1).max(200),
              bands: z
                .array(
                  z
                    .object({
                      minScore: z.number(),
                      maxScore: z.number(),
                      payout: z
                        .object({
                          amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                          currency: z
                            .string()
                            .min(3)
                            .max(3)
                            .regex(/^[A-Z]{3}$/),
                        })
                        .passthrough(),
                    })
                    .passthrough()
                )
                .min(1),
              status: z.enum(['draft', 'active', 'retired']),
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
const PolicyAcceptanceResponse = z
  .object({
    data: z
      .object({
        policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
        contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
        acceptedAt: z.string().datetime({ offset: true }),
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
const ObligationResponse = z
  .object({
    data: z
      .object({
        obligationId: z.string().regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
        contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
        influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
        policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
        amount: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough(),
        status: z.enum(['pending', 'paid', 'clawed_back']),
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
const ObligationListData = z
  .object({
    items: z.array(
      z
        .object({
          obligationId: z.string().regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
          contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
          influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
          policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
          amount: z
            .object({
              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
              currency: z
                .string()
                .min(3)
                .max(3)
                .regex(/^[A-Z]{3}$/),
            })
            .passthrough(),
          status: z.enum(['pending', 'paid', 'clawed_back']),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
  })
  .passthrough();
const ObligationListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              obligationId: z.string().regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
              contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
              influenceScoreId: z
                .string()
                .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
              policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
              amount: z
                .object({
                  amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                  currency: z
                    .string()
                    .min(3)
                    .max(3)
                    .regex(/^[A-Z]{3}$/),
                })
                .passthrough(),
              status: z.enum(['pending', 'paid', 'clawed_back']),
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
const StatementResponse = z
  .object({
    data: z
      .object({
        statementId: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
        modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
        periodStart: z.string().datetime({ offset: true }),
        periodEnd: z.string().datetime({ offset: true }),
        lines: z.array(
          z
            .object({
              contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
              influenceScoreId: z
                .string()
                .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
              score: z.number(),
              amount: z
                .object({
                  amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                  currency: z
                    .string()
                    .min(3)
                    .max(3)
                    .regex(/^[A-Z]{3}$/),
                })
                .passthrough(),
            })
            .passthrough()
        ),
        total: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough(),
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
const StatementListData = z
  .object({
    items: z.array(
      z
        .object({
          statementId: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
          modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
          periodStart: z.string().datetime({ offset: true }),
          periodEnd: z.string().datetime({ offset: true }),
          lines: z.array(
            z
              .object({
                contributionId: z
                  .string()
                  .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                influenceScoreId: z
                  .string()
                  .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
                score: z.number(),
                amount: z
                  .object({
                    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                    currency: z
                      .string()
                      .min(3)
                      .max(3)
                      .regex(/^[A-Z]{3}$/),
                  })
                  .passthrough(),
              })
              .passthrough()
          ),
          total: z
            .object({
              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
              currency: z
                .string()
                .min(3)
                .max(3)
                .regex(/^[A-Z]{3}$/),
            })
            .passthrough(),
          createdAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
  })
  .passthrough();
const StatementListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              statementId: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
              modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
              periodStart: z.string().datetime({ offset: true }),
              periodEnd: z.string().datetime({ offset: true }),
              lines: z.array(
                z
                  .object({
                    contributionId: z
                      .string()
                      .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                    influenceScoreId: z
                      .string()
                      .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
                    score: z.number(),
                    amount: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              ),
              total: z
                .object({
                  amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                  currency: z
                    .string()
                    .min(3)
                    .max(3)
                    .regex(/^[A-Z]{3}$/),
                })
                .passthrough(),
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
const PolicyId = z.string();
const Currency = z.string();
const Money = z
  .object({
    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
    currency: z
      .string()
      .min(3)
      .max(3)
      .regex(/^[A-Z]{3}$/),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const UserId = z.string();
const ObligationId = z.string();
const ContributionId = z.string();
const InfluenceScoreId = z.string();
const RulingId = z.string();
const StatementId = z.string();

export const schemas: any = {
  createIncentivePolicy_Body,
  mintIncentive_Body,
  clawbackIncentive_Body,
  createSettlementStatement_Body,
  ObligationStatus,
  InfluenceBand,
  IncentivePolicy,
  PolicyCreateRequest,
  PolicyAcceptRequest,
  PolicyAcceptance,
  IncentiveObligation,
  IncentiveMintRequest,
  ClawbackRequest,
  SettlementLine,
  SettlementStatement,
  StatementCreateRequest,
  PolicyResponse,
  PolicyListData,
  PolicyListResponse,
  PolicyAcceptanceResponse,
  ObligationResponse,
  ObligationListData,
  ObligationListResponse,
  StatementResponse,
  StatementListData,
  StatementListResponse,
  ModelId,
  Problem,
  PolicyId,
  Currency,
  Money,
  ResponseMeta,
  UserId,
  ObligationId,
  ContributionId,
  InfluenceScoreId,
  RulingId,
  StatementId,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/incentive-policies',
    alias: 'listIncentivePolicies',
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
                  policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
                  name: z.string().min(1).max(200),
                  bands: z
                    .array(
                      z
                        .object({
                          minScore: z.number(),
                          maxScore: z.number(),
                          payout: z
                            .object({
                              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                              currency: z
                                .string()
                                .min(3)
                                .max(3)
                                .regex(/^[A-Z]{3}$/),
                            })
                            .passthrough(),
                        })
                        .passthrough()
                    )
                    .min(1),
                  status: z.enum(['draft', 'active', 'retired']),
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
    path: '/v1/incentive-policies',
    alias: 'createIncentivePolicy',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createIncentivePolicy_Body,
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
            policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1).max(200),
            bands: z
              .array(
                z
                  .object({
                    minScore: z.number(),
                    maxScore: z.number(),
                    payout: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            status: z.enum(['draft', 'active', 'retired']),
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
    method: 'get',
    path: '/v1/incentive-policies/:policyId',
    alias: 'getIncentivePolicy',
    requestFormat: 'json',
    parameters: [
      {
        name: 'policyId',
        type: 'Path',
        schema: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            name: z.string().min(1).max(200),
            bands: z
              .array(
                z
                  .object({
                    minScore: z.number(),
                    maxScore: z.number(),
                    payout: z
                      .object({
                        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                        currency: z
                          .string()
                          .min(3)
                          .max(3)
                          .regex(/^[A-Z]{3}$/),
                      })
                      .passthrough(),
                  })
                  .passthrough()
              )
              .min(1),
            status: z.enum(['draft', 'active', 'retired']),
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
    path: '/v1/incentive-policies/:policyId/accept',
    alias: 'acceptIncentivePolicy',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({
            contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
          })
          .passthrough(),
      },
      {
        name: 'policyId',
        type: 'Path',
        schema: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
            contributorId: z.string().regex(/^usr_[0-9A-HJKMNP-TV-Z]{26}$/),
            acceptedAt: z.string().datetime({ offset: true }),
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
    path: '/v1/incentives',
    alias: 'listIncentives',
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
        name: 'status',
        type: 'Query',
        schema: z.enum(['pending', 'paid', 'clawed_back']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  obligationId: z
                    .string()
                    .regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
                  contributionId: z
                    .string()
                    .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  influenceScoreId: z
                    .string()
                    .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
                  policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
                  amount: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                  status: z.enum(['pending', 'paid', 'clawed_back']),
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
    path: '/v1/incentives',
    alias: 'mintIncentive',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: mintIncentive_Body,
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
            obligationId: z.string().regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
            contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
            influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
            policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
            amount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            status: z.enum(['pending', 'paid', 'clawed_back']),
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
    method: 'post',
    path: '/v1/incentives/:obligationId/clawback',
    alias: 'clawbackIncentive',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: clawbackIncentive_Body,
      },
      {
        name: 'obligationId',
        type: 'Path',
        schema: z.string().regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            obligationId: z.string().regex(/^obl_[0-9A-HJKMNP-TV-Z]{26}$/),
            contributionId: z.string().regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
            influenceScoreId: z.string().regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
            policyId: z.string().regex(/^pol_[0-9A-HJKMNP-TV-Z]{26}$/),
            amount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            status: z.enum(['pending', 'paid', 'clawed_back']),
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
    path: '/v1/settlement-statements',
    alias: 'listSettlementStatements',
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
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  statementId: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
                  modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
                  periodStart: z.string().datetime({ offset: true }),
                  periodEnd: z.string().datetime({ offset: true }),
                  lines: z.array(
                    z
                      .object({
                        contributionId: z
                          .string()
                          .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                        influenceScoreId: z
                          .string()
                          .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
                        score: z.number(),
                        amount: z
                          .object({
                            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                            currency: z
                              .string()
                              .min(3)
                              .max(3)
                              .regex(/^[A-Z]{3}$/),
                          })
                          .passthrough(),
                      })
                      .passthrough()
                  ),
                  total: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
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
    path: '/v1/settlement-statements',
    alias: 'createSettlementStatement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createSettlementStatement_Body,
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
            statementId: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            lines: z.array(
              z
                .object({
                  contributionId: z
                    .string()
                    .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  influenceScoreId: z
                    .string()
                    .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
                  score: z.number(),
                  amount: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                })
                .passthrough()
            ),
            total: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
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
    path: '/v1/settlement-statements/:statementId',
    alias: 'getSettlementStatement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'statementId',
        type: 'Path',
        schema: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            statementId: z.string().regex(/^stm_[0-9A-HJKMNP-TV-Z]{26}$/),
            modelId: z.string().regex(/^mdl_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            lines: z.array(
              z
                .object({
                  contributionId: z
                    .string()
                    .regex(/^ctr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  influenceScoreId: z
                    .string()
                    .regex(/^inf_[0-9A-HJKMNP-TV-Z]{26}$/),
                  score: z.number(),
                  amount: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                })
                .passthrough()
            ),
            total: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
