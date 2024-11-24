import { FastifyRequest, FastifyReply} from 'fastify'
import {ListConsultaService} from '../services/ListConsultaService'

class ListConsultaController{

    async handle(request:FastifyRequest, reply:FastifyReply) {
        const listConsultaService = new ListConsultaService();

        const consultas = await listConsultaService.execute();

        reply.send(consultas);
    }

}

export { ListConsultaController }