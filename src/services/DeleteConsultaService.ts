import prismaClient from "../prisma";

interface DeleteConsultaProps{
    id: string;
}

class DeleteConsultaService {
    async execute({id}: DeleteConsultaProps) {
        if (!id){
            throw new Error("Solicitação inválida!")
        }

        const findConsulta = await prismaClient.consulta.findFirst({
            where:{
               id:  id
            }
        })

        if(!findConsulta){
            throw new Error("Cliente não existe!")
        }

        await prismaClient.consulta.delete({
            where:{
                id: findConsulta.id
            }
        })

        return { message: "Deletado com sucesso!"}
    }

}

export { DeleteConsultaService }