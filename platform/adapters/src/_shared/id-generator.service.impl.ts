/**
 * ID Generator Service Implementation — starter prefixes.
 */

import type { DomainCode } from '@shapemint/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@shapemint/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@shapemint/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  mdlId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.models);
  }
  ctrId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.contributions);
  }
  infId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.influence);
  }
  prtId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.protocols);
  }
  incId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.incentives);
  }
  govId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.governance);
  }
  rptId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.reporting);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
