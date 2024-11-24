import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import {CreateConsultaController} from "./controllers/CreateConsultaController";
import {ListConsultaController} from './controllers/ListConsultaController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    fastify.post("/consulta", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateConsultaController().handle(request, reply)
    })
    fastify.get("/list-consultas", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListConsultaController().handle(request, reply)
    })
}