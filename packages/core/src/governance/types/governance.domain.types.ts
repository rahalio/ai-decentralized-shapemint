/**
 * Governance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/governance.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type GrantListData = components["schemas"]["GrantListData"];
export type MintingPause = components["schemas"]["MintingPause"];
export type MintingPauseCreate = components["schemas"]["MintingPauseCreate"];
export type NegativeInfluenceRuling = components["schemas"]["NegativeInfluenceRuling"];
export type NegativeInfluenceRulingCreate = components["schemas"]["NegativeInfluenceRulingCreate"];
export type PauseListData = components["schemas"]["PauseListData"];
export type RulingListData = components["schemas"]["RulingListData"];
export type RulingOutcome = components["schemas"]["RulingOutcome"];
export type TransparencyGrant = components["schemas"]["TransparencyGrant"];
export type TransparencyGrantCreate = components["schemas"]["TransparencyGrantCreate"];
export type NegativeInfluence = operations["listNegativeInfluenceRulings"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RuleNegativeInfluenceRequestInput = NonNullable<operations["ruleNegativeInfluence"]["requestBody"]>["content"]["application/json"];
export type PauseMintingRequestInput = NonNullable<operations["pauseMinting"]["requestBody"]>["content"]["application/json"];
export type CreateTransparencyGrantRequestInput = NonNullable<operations["createTransparencyGrant"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListNegativeInfluenceRulingsParams = NonNullable<operations["listNegativeInfluenceRulings"]["parameters"]["query"]>;
export type ResumeMintingParams = operations["resumeMinting"]["parameters"]["path"];
export type ListMintingPausesParams = NonNullable<operations["listMintingPauses"]["parameters"]["query"]>;
export type ListTransparencyGrantsParams = NonNullable<operations["listTransparencyGrants"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListNegativeInfluenceRulingsResponse = operations["listNegativeInfluenceRulings"]["responses"]["200"]["content"]["application/json"];
export type RuleNegativeInfluenceResponse = operations["ruleNegativeInfluence"]["responses"]["201"]["content"]["application/json"];
export type PauseMintingResponse = operations["pauseMinting"]["responses"]["201"]["content"]["application/json"];
export type ResumeMintingResponse = operations["resumeMinting"]["responses"]["200"]["content"]["application/json"];
export type ListMintingPausesResponse = operations["listMintingPauses"]["responses"]["200"]["content"]["application/json"];
export type ListTransparencyGrantsResponse = operations["listTransparencyGrants"]["responses"]["200"]["content"]["application/json"];
export type CreateTransparencyGrantResponse = operations["createTransparencyGrant"]["responses"]["201"]["content"]["application/json"];


