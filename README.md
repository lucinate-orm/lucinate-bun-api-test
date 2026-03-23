# lucinate-api-test

## Installation

```bash
bun install
```

## Generating files (`lucinate` CLI)

From the project root (where `config/` and `database/` live):

| Command | Description |
|---------|-------------|
| `bunx lucinate make:migration <name>` | Generates a migration file under `database/migrations` |
| `bunx lucinate make:model <Name>` | Generates a model under `src/models` (use PascalCase, e.g. `Post`) |
| `bunx lucinate make:seeder <name>` | Generates a seeder under `database/seeders` |

Useful options:

- **`--create`** / **`--alter`** — migration intent (can also be inferred from the name, e.g. `create_posts_table`).
- **`--dir`** — output directory (overrides the path from `config/database.ts`).

Generators **do not overwrite** existing files (they print `[skip]`).

### Shortcut: migration + model + seeder

In one command, generates the migration plus the model and seeder (names derived from the table):

```bash
bunx lucinate make:migration create_posts_table -m -s
```

- **`-m`** / **`--with-model`** — also generates the model.
- **`-s`** / **`--with-seeder`** — also generates the seeder.

This is equivalent to running `make:migration` and then `make:model` / `make:seeder` separately, but with a single coherent name.

## Running migrations

```bash
bunx lucinate migrate
# or
bun run migrate
```

Rollback:

```bash
bunx lucinate migrate:down
# or
bun run migrate:down
```

## Running seeders

```bash
bunx lucinate seed
# or
bun run seed
```

Specific seeders only:

```bash
bunx lucinate seed -f comments_seeder -f medias_seeder
```

## Running the API

```bash
bun run index.ts
```

---

This project was created with `bun init` using bun v1.3.11. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
