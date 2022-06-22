import fastifyAutoload from '@fastify/autoload';
import { Static, Type } from '@sinclair/typebox';
import fastifySwagger from '@fastify/swagger';
import { ajvTypeBoxPlugin, TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import fastify from 'fastify';
import { join } from 'path';
import { addloginroutes } from './routes/user/get-account';
export const server= fastify({logger:true,
  ajv:{
    plugins: [ajvTypeBoxPlugin]
  }
});



server.register(fastifySwagger, {
	routePrefix: '/docs',
	exposeRoute: true,
	mode: 'dynamic',
	openapi: {
		info: {
			title: 'cesarean delivery prediction API',
			version: '0.0.1',
		},
	},
});


server.register(fastifyAutoload,{
  dir :join(__dirname, 'routes')
});


  addloginroutes(server);
