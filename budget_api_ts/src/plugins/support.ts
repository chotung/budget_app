import fp from "fastify-plugin";
import { hash } from "bcrypt";

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

export default fp<SupportPluginOptions>(async (fastify, opts) => {
  // Helper function: Hash a password securely
  fastify.decorate("hashPassword", async function (password: string): Promise<string> {
    const hashedPassword = await hash(password, 10); // Adjust the salt rounds as needed
    return hashedPassword;
  });
});

// When using .decorate you have to specify added properties for Typescript
declare module "fastify" {
  export interface FastifyInstance {
    hashPassword(password: string): Promise<string>;
    // Add other helper functions here
  }
}
