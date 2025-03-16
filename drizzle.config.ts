import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) throw new Error('Add `DATABASE_URL` to your `.env` file');

export default defineConfig({
  out: './drizzle',
  schema: './src/lib/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  driver: 'pglite',
});
