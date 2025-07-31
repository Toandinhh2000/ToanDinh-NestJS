import {
  pgTable,
  serial,
  text,
  interger,
  jsonb,
  primaryKey,
  timestamp,
  index,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

// Profile information table (one-to-one with users)
export const profile = pgTable('profile_info', {
  id: serial('id').primaryKey(),
  userId: interger('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
}