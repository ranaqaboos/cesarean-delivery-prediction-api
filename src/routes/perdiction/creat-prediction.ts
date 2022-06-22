import { Static, Type } from '@sinclair/typebox';
import { FastifyInstance } from "fastify";
import { upsertPerdictionController } from '../../controller/perdicion';

const perdiction = Type.Object({
	id: Type.String({ format: 'uuid' }),
  name:Type.String(),
	description: Type.String(),	
});


type perdiction = Static<typeof perdiction>;
const GetperdictionQuery = Type.Object({
	name: Type.Optional(Type.String()),
});

type GetperdictionQuery = Static<typeof GetperdictionQuery>;


export let perdictions: perdiction[] = [{
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', name:"rana", description: "qtrew"}];


export default async function (server: FastifyInstance) {
  server.route({
    method: "PUT",
    url: "/perdiction",
    schema: {
      summary: "Create a new",
      tags: ["perdictions"],
      body: perdiction,
    },
    handler: async (request, reply) => {
      const newperdiction: any = request.body;
      return upsertPerdictionController(perdictions, newperdiction);
    },
  });

  server.route({
    method: "DELETE",
    url: "/perdiction/delete/:id",
    schema: {
      summary: "Deletes a perdiction",
      tags: ['perdiction'],	
      	params: Type.Object({
				id: Type.String({ format: 'uuid' }),
			}),
    },
    handler: async (request, reply) => {
      const id = (request.params as any).id as string;
      
      perdictions = perdictions.filter((p) => p.id !== id);

      return perdictions;
    },
  });
  server.route({
    method: "GET",
    url: "/perdiction",
    schema: {
      summary: "Gets all perdictions",
      tags: ["perdictions"],
      params: Type.Object({
				id: Type.String({ format: 'uuid' }),
			}),
      response: {
				'2xx': Type.Union([perdiction, Type.Null()]),
			},
    },
    handler: async (request, reply) => {
      const id =(request.params as any).id as string;
      return perdiction.find((p:any)=>p.id===id);
    },
  });
}
