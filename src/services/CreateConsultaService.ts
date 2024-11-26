import prismaClient from "../prisma";
import prisma from "../prisma";

interface CreateConsultaProps{
    name: string;
    email: string;
    pago: boolean;
    tipo_pagamento: string;
    valor: number;
    condicao: string;
}

class CreateConsultaService{
    async execute({ name, email, pago, tipo_pagamento, valor, condicao }: CreateConsultaProps) {
        if (!name || !email || !pago || !tipo_pagamento || !valor || !condicao) {
            throw new Error("Preencha todos os campos obrigatórios");
        }
        const consulta = await prismaClient.consulta.create({
            data: {
                name,
                email,
                pago,
                tipo_pagamento,
                valor,
                condicao,
            },
        });

        return consulta

    }
}
export { CreateConsultaService }