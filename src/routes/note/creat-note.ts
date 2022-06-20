
import { FastifyInstance } from "fastify";

export function addnoteroutes(server:FastifyInstance){
   server.get('/note/create', async (request, reply) => {
       return { msg: 'create note' };
     })
}
