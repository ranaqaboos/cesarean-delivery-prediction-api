import fastify from 'fastify';
import { addnoteroutes } from './routes/note/creat-note';
import { addperdictionroutes } from './routes/perdiction/creat-prediction';
import { addloginroutes } from './routes/user/get-account';
export const server= fastify({logger:true});


server.get('/', async (request, reply) => {
  return { hey: 'cesarean delivery predicton' }
})

server.get('/prediction', async (request, reply) => {
    return { hello: 'world' }
  })

  addloginroutes(server);
  addnoteroutes(server);
  addperdictionroutes(server)