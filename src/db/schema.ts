import { integer, text, boolean, pgTable, date } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const user = pgTable("users", {
  id: integer("id").primaryKey(),
  username: text("user_name").notNull(),
  createdAt: date("created_at").notNull(),
});