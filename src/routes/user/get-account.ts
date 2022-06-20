import { FastifyInstance } from "fastify";

 export function addloginroutes(se:FastifyInstance){
    se.get('/login', async (request, reply) => {
        return { hey: 'you are logged in' };
      })
}
