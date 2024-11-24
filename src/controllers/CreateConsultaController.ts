import { FastifyRequest, FastifyReply} from 'fastify'
import {CreateConsultaService} from '../services/CreateConsultaService'

class CreateConsultaController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const{name, email, pago, tipo_pagamento, valor, condicao} = request.body as { name: string, email: string, pago: boolean, tipo_pagamento: string, valor: number, condicao: string};
        const consultaService = new CreateConsultaService()

        const consulta = await consultaService.execute({name, email, pago, tipo_pagamento, valor, condicao});
        reply.send(consulta)
    }
}
export{CreateConsultaController}