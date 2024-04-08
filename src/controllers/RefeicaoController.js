const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


class RefeicaoController{


   async create(request, response){
       try{
           const { name, descricao, dataHora, dentroDieta } = request.body


           const refeicao = await prisma.refeicao.create({
               data: {
                   name,
                   descricao,
                   dataHora,
                   dentroDieta,
                },
           })


           response.json(refeicao)
       }catch (err) {
        console.log(err)
           return response.status(409).send()
       }
   }

   async show(request, response){
        try{
            const refeicoes = await prisma.refeicao.findMany();

            response.json(refeicoes)
            
        }catch (err) { 
            return response.status(409).send()
        }
    }

    async update(request, response){
        try{
            
            const { name, descricao, dataHora, dentroDieta } = request.body
            const { id } = request.params
            
            const result = await prisma.refeicao.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    descricao: descricao,
                    dataHora: dataHora,
                    dentroDieta: dentroDieta
                },
            });

            return response.status(200).send()

        }catch (err) { 
            console.log(err)
            return response.status(409).send()
        }

    }

    async delete(request, response){
        
        try{
            const { id } = request.params
            //const { id } = request.body
            console.log(`id: ${id}`)

        
            const deleteUser = await prisma.refeicao.delete({
                where: {
                    id: id,
                },
            })

            return response.status(200).send()

        }catch (err) { 
            return response.status(409).send()
        }

    }
}


module.exports = RefeicaoController