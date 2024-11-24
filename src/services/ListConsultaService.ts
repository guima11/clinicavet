import prismaClient from "../prisma";

class ListConsultaService{
    async execute(){

        const consultas = await prismaClient.consulta.findMany()

        return consultas;
    }
}

export { ListConsultaService }