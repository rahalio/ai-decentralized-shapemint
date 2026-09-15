/**
 * Protocols Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/protocols.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type EvaluationProtocol = components["schemas"]["EvaluationProtocol"];
export type ProtocolListData = components["schemas"]["ProtocolListData"];
export type ProtocolStatus = components["schemas"]["ProtocolStatus"];
export type ProtocolBindRequest = components["schemas"]["ProtocolBindRequest"];
export type ProtocolCreateRequest = components["schemas"]["ProtocolCreateRequest"];
export type Protocol = components["schemas"]["ProtocolResponse"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateProtocolRequestInput = NonNullable<operations["createProtocol"]["requestBody"]>["content"]["application/json"];
export type BindProtocolToModelRequestInput = NonNullable<operations["bindProtocolToModel"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListProtocolsParams = NonNullable<operations["listProtocols"]["parameters"]["query"]>;
export type GetProtocolParams = operations["getProtocol"]["parameters"]["path"];
export type PublishProtocolParams = operations["publishProtocol"]["parameters"]["path"];
export type DeprecateProtocolParams = operations["deprecateProtocol"]["parameters"]["path"];
export type BindProtocolToModelParams = operations["bindProtocolToModel"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListProtocolsResponse = operations["listProtocols"]["responses"]["200"]["content"]["application/json"];
export type CreateProtocolResponse = operations["createProtocol"]["responses"]["201"]["content"]["application/json"];
export type GetProtocolResponse = operations["getProtocol"]["responses"]["200"]["content"]["application/json"];
export type PublishProtocolResponse = operations["publishProtocol"]["responses"]["200"]["content"]["application/json"];
export type DeprecateProtocolResponse = operations["deprecateProtocol"]["responses"]["200"]["content"]["application/json"];
export type BindProtocolToModelResponse = operations["bindProtocolToModel"]["responses"]["200"]["content"]["application/json"];


