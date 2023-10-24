import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    // Poll the database for initial screens
    // show budget limit
    // show how much you spent already $99/1000
    // what you spent it on
    return "home screen"
  })
}

export default root;
