# Shapemint

Influence-and-incentive ledger for multi-party AI consortia. OpenAPI-first DDD monorepo based on the zero-apps codegen scaffold.

**Product docs:** [PRODUCT.md](./PRODUCT.md) · [USER_STORIES.md](./USER_STORIES.md) · [WEBAPP.md](./WEBAPP.md)

## Layout

| Area | Path |
|------|------|
| OpenAPI | `packages/openapi-core/src/` |
| Core | `packages/core` (`@shapemint/core`) |
| Services / adapters / API | `platform/{services,adapters,api-server}` |
| Webapp | `platform/webapp` (`@shapemint/webapp`) |
| Codegen tool (local only) | `.codegen/` — **never commit** |
| Agent skills | `.cursor/skills/{ddd-platform,ddd-codegen,ddd-identity}/` |

## Bootstrap `.codegen`

`.codegen/` is gitignored. Copy it from the scaffold once per machine:

```bash
rsync -a --exclude 'node_modules' \
  /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen/ \
  ./.codegen/
pnpm codegen:paths
```

## Commands

```bash
pnpm install
pnpm lint:openapi && pnpm bundle:openapi
pnpm codegen:paths
pnpm build
pnpm dev:api   # http://127.0.0.1:4000/health — X-API-Key: shapemint_demo_local_dev_key
```

See [docs/CODEGEN.md](./docs/CODEGEN.md).
