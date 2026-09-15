# Codegen guide (Shapemint)

Package scope: `@shapemint`.

## `.codegen` is local-only

**Never commit or push `.codegen/`.** See skill `codegen-local-only` and rule `codegen-never-commit`.

Bootstrap:

```bash
rsync -a --exclude 'node_modules' \
  /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen/ \
  ./.codegen/
pnpm codegen:paths
```

## Modes

| Mode | When | Action |
|------|------|--------|
| **A — New domain** | First time a domain YAML has no layers | Full multi-layer `generate --domain X` |
| **B — YAML edit** | Domain already scaffolded | Bundle → `--layers core` → handwrite platform |

## Commands

```bash
pnpm codegen:paths
pnpm lint:openapi
pnpm bundle:openapi
pnpm codegen:core
pnpm codegen:identity   # full identity scaffold
```

Config: `.codegen/.zero-codegen-merged.json`  
Tool: `PYTHONPATH=.codegen/codegen/src python3 -m zero_codegen.cli.main`

## OpenAPI shape

- `packages/openapi-core/src/common/` — envelopes, problem, security, parameters, primitives
- `packages/openapi-core/src/{domain}.yaml` — one file per domain
- Domains: `identity`, `models`, `contributions`, `influence`, `protocols`, `incentives`, `governance`, `reporting`

## Related skills

- `codegen-local-only` — never commit `.codegen`
- `ddd-platform` — architecture & anti-drift
- `ddd-codegen` — pipeline commands
- `ddd-identity` — auth blueprint
