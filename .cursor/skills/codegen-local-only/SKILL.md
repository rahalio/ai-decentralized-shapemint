---
name: codegen-local-only
description: >-
  Shapemint rule: .codegen is local-only and must never be committed or pushed.
  Use when bootstrapping zero-codegen, cloning the repo, or about to stage .codegen.
---

# Codegen tool is local-only

## Hard rule

**Never commit or push `.codegen/`** (or `codegen/`, `**/zero_codegen/`).

The Python `zero_codegen` tool lives under `.codegen/` for local generation only. It is listed in `.gitignore`. Do not use `git add -f` on it.

## Bootstrap (once per machine)

```bash
# From repo root
rsync -a --exclude 'node_modules' \
  /path/to/zero-apps-codegen-scaffold/.codegen/ \
  ./.codegen/

pnpm codegen:paths
```

Canonical scaffold path on this workstation:

`/Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen/`

After copy, set `package_scope` to `@shapemint` in `.codegen/zero-codegen.json` and `.codegen/.zero-codegen-merged.json` if the scaffold defaults differ, then re-run `pnpm codegen:paths`.

## What *is* committed

- OpenAPI YAML under `packages/openapi-core/src/`
- Generated/hand-fit TypeScript under `packages/core` and `platform/`
- Cursor skills/rules that document this policy

## Related

- `ddd-codegen` — generate commands (Mode A / Mode B)
- `ddd-platform` — layer conventions
