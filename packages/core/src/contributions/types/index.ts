/**
 * Contributions Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/contributions.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Contribution = components["schemas"]["Contribution"];
export type ContributionKind = components["schemas"]["ContributionKind"];
export type ContributionListData = components["schemas"]["ContributionListData"];
export type ContributionStatus = components["schemas"]["ContributionStatus"];
export type ContributionCreateRequest = components["schemas"]["ContributionCreateRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SubmitContributionRequestInput = NonNullable<operations["submitContribution"]["requestBody"]>["content"]["application/json"];
export type SaveContributionDraftRequestInput = NonNullable<operations["saveContributionDraft"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListContributionsParams = NonNullable<operations["listContributions"]["parameters"]["query"]>;
export type GetContributionParams = operations["getContribution"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListContributionsResponse = operations["listContributions"]["responses"]["200"]["content"]["application/json"];
export type SubmitContributionResponse = operations["submitContribution"]["responses"]["201"]["content"]["application/json"];
export type GetContributionResponse = operations["getContribution"]["responses"]["200"]["content"]["application/json"];
export type SaveContributionDraftResponse = operations["saveContributionDraft"]["responses"]["201"]["content"]["application/json"];


