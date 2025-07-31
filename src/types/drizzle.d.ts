import * as schema from 'drizzle-orm/schema';
import {NodePgDatabase} from 'drizzle-orm/node-postgres';

export type DrizzleDB = NodePgDatabase<typeof schema>;