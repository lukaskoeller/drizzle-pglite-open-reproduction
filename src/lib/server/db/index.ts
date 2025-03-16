import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import { env } from '$env/dynamic/private';

const databaseURL = env.DATABASE_URL;

if (!databaseURL) throw new Error('Add `DATABASE_URL` to your `.env` file');

const client = new PGlite(databaseURL);
export const db = drizzle({ client });

