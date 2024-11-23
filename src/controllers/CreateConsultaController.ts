import { FastifyRequest, FastifyReply} from 'fastify'
import {CreateConsultaService} from '../services/CreateConsultaService'

class CreateConsultaController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{name, email} = request.body as { name: string, email: string};
        const consultaService = new CreateConsultaService()

        const consulta = await consultaService.execute({name, email});
        reply.send(consulta)
    }
}
export{CreateConsultaController}