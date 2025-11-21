# drizzle-pglite-open-reproduction

## Connected Issue

https://github.com/drizzle-team/drizzle-orm/issues/4278

## Reproduction

1. Creating a new SvelteKit app:
```sh
npx sv create my-app
```

2. Follow the "[Get Started with Drizzle and PGlite](https://orm.drizzle.team/docs/get-started/pglite-new)" guide.
3. Add `driver: 'pglite'` to `drizzle.config.ts` to get rid of `To connect to Postgres database - please install either of 'pg', 'postgres', '@neondatabase/serverless' or '@vercel/postgres' drivers`.
4. Create an `.env` file with the contents from `.env.example`
5. Run `npx drizzle-kit push`
6. This puts out following error in the zsh:

```zsh
lukas@Mac readii % npx drizzle-kit push
No config path provided, using default 'drizzle.config.ts'
Reading config file '/Users/lukas/Documents/priv/readii/drizzle.config.ts'
TypeError: Cannot read properties of null (reading 'open')
    at Object.getDB (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/release/postgres.js:9:113692)
    at Object.getRemoteSet (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/release/postgres.js:9:114890)
    at callback (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/release/postgres.js:9:113341)
    at Object.getLocalSet (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/release/postgres.js:9:114798)
    at Object.syncfs (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/release/postgres.js:9:113275)
    at mount (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/release/postgres.js:9:131497)
    at Array.forEach (<anonymous>)
    at Object.syncfs (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/release/postgres.js:9:131429)
    at <anonymous> (/Users/lukas/Documents/priv/readii/node_modules/.pnpm/@electric-sql+pglite@0.2.17/node_modules/@electric-sql/pglite/src/fs/idbfs.ts:31:26)
    at new Promise (<anonymous>)
```
