// src/plugins/postgres-plugin.ts
import { FastifyPluginCallback } from "fastify"
import { Pool } from "pg"
import { config } from "dotenv"

config()

const plugin: FastifyPluginCallback = (fastify, options, done) => {
  const isProduction = process.env.NODE_ENV === "production"
  // console.log(isProduction)
  // console.log(process.env.DB_NAME);
  const pool = new Pool({
    connectionString: isProduction
      ? process.env.DATABASE_URL // Heroku-style environment variable in production
      : `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
  })

  fastify.decorate("pg", pool)

  done()
}

export default plugin
