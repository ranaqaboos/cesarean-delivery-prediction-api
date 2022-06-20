import { FastifyInstance } from "fastify";

 export function addperdictionroutes(server:FastifyInstance){
    server.get('/perdiction/create', async (request, reply) => {
        return { msg:'create perdiction' };
      })
}
