/**
 * Influence Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/influence.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type InfluenceScore = components["schemas"]["InfluenceScore"];
export type InfluenceStatus = components["schemas"]["InfluenceStatus"];
export type LedgerEvent = components["schemas"]["LedgerEvent"];
export type LedgerEventType = components["schemas"]["LedgerEventType"];
export type LedgerListData = components["schemas"]["LedgerListData"];
export type ReproducePack = components["schemas"]["ReproducePack"];
export type InfluenceRejectRequest = components["schemas"]["InfluenceRejectRequest"];
export type InfluenceScoreCreateRequest = components["schemas"]["InfluenceScoreCreateRequest"];
export type Ledger = operations["listInfluenceLedger"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ScoreInfluenceRequestInput = NonNullable<operations["scoreInfluence"]["requestBody"]>["content"]["application/json"];
export type RejectInfluenceRequestInput = NonNullable<operations["rejectInfluence"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type GetInfluenceParams = operations["getInfluence"]["parameters"]["path"];
export type ScoreInfluenceParams = operations["scoreInfluence"]["parameters"]["path"];
export type AcceptInfluenceParams = operations["acceptInfluence"]["parameters"]["path"];
export type RejectInfluenceParams = operations["rejectInfluence"]["parameters"]["path"];
export type ListInfluenceLedgerParams = NonNullable<operations["listInfluenceLedger"]["parameters"]["query"]>;
export type GetReproducePackParams = operations["getReproducePack"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type GetInfluenceResponse = operations["getInfluence"]["responses"]["200"]["content"]["application/json"];
export type ScoreInfluenceResponse = operations["scoreInfluence"]["responses"]["201"]["content"]["application/json"];
export type AcceptInfluenceResponse = operations["acceptInfluence"]["responses"]["200"]["content"]["application/json"];
export type RejectInfluenceResponse = operations["rejectInfluence"]["responses"]["200"]["content"]["application/json"];
export type ListInfluenceLedgerResponse = operations["listInfluenceLedger"]["responses"]["200"]["content"]["application/json"];
export type GetReproducePackResponse = operations["getReproducePack"]["responses"]["200"]["content"]["application/json"];


