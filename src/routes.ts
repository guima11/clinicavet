import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import {CreateConsultaController} from "./controllers/CreateConsultaController";
import {ListConsultaController} from './controllers/ListConsultaController';
import {DeleteConsultaController} from "./controllers/DeleteConsultaController";
import 'dotenv/config';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/consulta", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateConsultaController().handle(request, reply)
    })
    fastify.get("/list-consultas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListConsultaController().handle(request, reply)
    })
    fastify.delete("/consulta", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteConsultaController().handle(request, reply)
    })
}