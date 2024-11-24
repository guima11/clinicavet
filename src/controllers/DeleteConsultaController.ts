import { FastifyRequest, FastifyReply} from 'fastify'
import {DeleteConsultaService} from '../services/DeleteConsultaService'


class DeleteConsultaController {

    async handle(request:FastifyRequest, reply:FastifyReply) {
        const {id} = request.query as {id: string}
        const consultaService = new DeleteConsultaService();
        const consulta = await consultaService.execute({id})
        reply.send(consulta);
    }

}

export { DeleteConsultaController }