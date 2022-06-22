
import { FastifyInstance } from "fastify";



export let note: any[]=[
  {},{},{},{},{},{},{}
]
 export default function (server:FastifyInstance){

    server.route({
      method: 'GET',
        url: '/note/create',
        schema: {
          summary: 'Create a new',
            tags: [],
            body: {},

    },
  handler: async (request, reply) => {
    return { msg:'create note' };
  }
});

server.route({
  method: 'DELETE',
  url:'/note/delete',
schema: {
  summary: 'Deletes a note',
  tags:['note']},
handler: async (request, reply) => {
  const id = (request.params as any).id as string;

   note =note.filter((p) => p.id !== +id);

  return note;
}
})
 }
