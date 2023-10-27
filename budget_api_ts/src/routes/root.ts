import { FastifyPluginAsync } from "fastify"

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    // should check if logged in
    return "home screen"
  })
}

export default root

// This is more for FE than backend route
// Poll the database for initial screens
// show budget limit
// show how much you spent already $99/1000
// what you spent it on




/**
 * User {
 *  name
 *  password
 *  email
 *  username
 * } could have many budgets (daily/monthy vs vacation)
 * has many expenses through budget
 *
 * -> Budget tble {
 *  name: daily/ vacation
 *
 * } has many expenses & future expenses
 *
 * => Expenses tble {
 *  name of expense
 *  id of purchase?
 *  cost of purchase in local currency
 *  impact of purchase
 * }
 *
 */
