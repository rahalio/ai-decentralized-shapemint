/**
 * IdGeneratorService Port — starter prefixes (extend in consumer repos).
 */

import type { DomainCode } from '@shapemint/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  mdlId(): string;
  ctrId(): string;
  infId(): string;
  prtId(): string;
  incId(): string;
  govId(): string;
  rptId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
