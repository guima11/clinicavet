import prismaClient from "../prisma";
import prisma from "../prisma";

interface CreateConsultaProps{
    name: string;
    email: string;
}

class CreateConsultaService{
    async execute({name, email}: CreateConsultaProps) {
        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }
        const consulta = await prismaClient.consulta.create({
            data:{
                name,
                email,
                pago: false,
                tipo_pagamento: "Não Pago",
                valor: 150.00,
                condicao: "Estresse",
            }
        })

        return consulta

    }
}
export { CreateConsultaService }