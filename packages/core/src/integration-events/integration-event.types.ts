/**
 * Integration event type definition — shared by generated registry.
 */

export type IntegrationEventTypeDefinition = {
  eventType: string;
  sourceDomain: string;
  schemaVersion: number;
  description?: string;
};
