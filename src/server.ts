import cors from '@fastify/cors';
import 'dotenv/config';
import Fastify from 'fastify';
import { routes } from './routes';


const app = Fastify({logger: true})

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message: error.message})
})

const start = async () => {

    app.register(cors, {origin:true});
    await app.register(routes);

    try{
        await app.listen({ port: 3333})
    }catch(err){
        process.exit(1)
    }
}
start();