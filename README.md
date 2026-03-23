# lucinate-api-test

To install dependencies:

```bash
bun install
```

Run migrations
```bash
bunx lucinate migrate 
```

Run seeders
```bash
bunx lucinate seed
# or 
bunx lucinate seed -f comments_seeder -f medias_seeder
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.11. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
