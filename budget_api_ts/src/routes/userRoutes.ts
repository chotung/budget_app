import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"

interface RegisterRequestBody {
    email: string;
    password: string;
}

const userSchema = {
    schema: {
        body: {
            type: 'object',
            required: ['username', 'password'],
            properties: {
                email: { type: 'string', minLength: 3 },
                password: { type: 'string', minLength: 6 },
                name: { type: "string", minLength: 1,}
            },
        },
    },
}


const userRoutes: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    console.log("User Routes File load: ", __filename);
    console.log(fastify.pg);

    // Get User
    fastify.get("/users", async (request: FastifyRequest<{ Params: { username: string } }>, reply: FastifyReply) => {
        try {
            const authUser = await fastify.pg.query('SELECT * FROM users');
            return authUser.rows;
        } catch (err) {
            console.error(err);
            return 'error';
        }
  
    })

    // Create User
    fastify.post("/register", userSchema, async function (request: FastifyRequest<{ Body: RegisterRequestBody }>, reply: FastifyReply) {
        try {
            const { email, password } = request?.body;
            console.log("email", email);
            console.log("password", password);
            // const hashedPW = fastify.hashPassword(password)





        } catch (err) {
            reply.status(500).send({ success: false, error: "Internal Server Error" });
        }
    })
}

export default userRoutes


/*
 don't do this
 // Example to avoid dynamic queries
const unsafeQuery = `SELECT * FROM users WHERE username = '${username}'`;
// Avoid such construction, prefer parameterized queries as shown in example 1.

*/


/**
 * 
 * 
const result = await client.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

if (result.rows.length > 0) {
reply.send({ success: true, user: result.rows[0] });
} else {
reply.send({ success: false, message: 'Invalid credentials' });
}
 */



            // Validate input and check if the user already exists in the database
          
            // For simplicity, let's assume you have a function to create a new user in the database
            // const newUser = await createUser(username, password);

            // return { success: true, user: newUser };