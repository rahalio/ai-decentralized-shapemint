/**
 * Incentives Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/incentives.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type IncentiveObligation = components["schemas"]["IncentiveObligation"];
export type IncentivePolicy = components["schemas"]["IncentivePolicy"];
export type InfluenceBand = components["schemas"]["InfluenceBand"];
export type ObligationListData = components["schemas"]["ObligationListData"];
export type ObligationStatus = components["schemas"]["ObligationStatus"];
export type PolicyAcceptance = components["schemas"]["PolicyAcceptance"];
export type PolicyListData = components["schemas"]["PolicyListData"];
export type SettlementLine = components["schemas"]["SettlementLine"];
export type SettlementStatement = components["schemas"]["SettlementStatement"];
export type StatementListData = components["schemas"]["StatementListData"];
export type ClawbackRequest = components["schemas"]["ClawbackRequest"];
export type IncentiveMintRequest = components["schemas"]["IncentiveMintRequest"];
export type PolicyAcceptRequest = components["schemas"]["PolicyAcceptRequest"];
export type PolicyCreateRequest = components["schemas"]["PolicyCreateRequest"];
export type StatementCreateRequest = components["schemas"]["StatementCreateRequest"];
export type Incentive = operations["listIncentives"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateIncentivePolicyRequestInput = NonNullable<operations["createIncentivePolicy"]["requestBody"]>["content"]["application/json"];
export type AcceptIncentivePolicyRequestInput = NonNullable<operations["acceptIncentivePolicy"]["requestBody"]>["content"]["application/json"];
export type MintIncentiveRequestInput = NonNullable<operations["mintIncentive"]["requestBody"]>["content"]["application/json"];
export type ClawbackIncentiveRequestInput = NonNullable<operations["clawbackIncentive"]["requestBody"]>["content"]["application/json"];
export type CreateSettlementStatementRequestInput = NonNullable<operations["createSettlementStatement"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListIncentivePoliciesParams = NonNullable<operations["listIncentivePolicies"]["parameters"]["query"]>;
export type GetIncentivePolicyParams = operations["getIncentivePolicy"]["parameters"]["path"];
export type AcceptIncentivePolicyParams = operations["acceptIncentivePolicy"]["parameters"]["path"];
export type ListIncentivesParams = NonNullable<operations["listIncentives"]["parameters"]["query"]>;
export type ClawbackIncentiveParams = operations["clawbackIncentive"]["parameters"]["path"];
export type ListSettlementStatementsParams = NonNullable<operations["listSettlementStatements"]["parameters"]["query"]>;
export type GetSettlementStatementParams = operations["getSettlementStatement"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListIncentivePoliciesResponse = operations["listIncentivePolicies"]["responses"]["200"]["content"]["application/json"];
export type CreateIncentivePolicyResponse = operations["createIncentivePolicy"]["responses"]["201"]["content"]["application/json"];
export type GetIncentivePolicyResponse = operations["getIncentivePolicy"]["responses"]["200"]["content"]["application/json"];
export type AcceptIncentivePolicyResponse = operations["acceptIncentivePolicy"]["responses"]["200"]["content"]["application/json"];
export type ListIncentivesResponse = operations["listIncentives"]["responses"]["200"]["content"]["application/json"];
export type MintIncentiveResponse = operations["mintIncentive"]["responses"]["201"]["content"]["application/json"];
export type ClawbackIncentiveResponse = operations["clawbackIncentive"]["responses"]["200"]["content"]["application/json"];
export type ListSettlementStatementsResponse = operations["listSettlementStatements"]["responses"]["200"]["content"]["application/json"];
export type CreateSettlementStatementResponse = operations["createSettlementStatement"]["responses"]["201"]["content"]["application/json"];
export type GetSettlementStatementResponse = operations["getSettlementStatement"]["responses"]["200"]["content"]["application/json"];


