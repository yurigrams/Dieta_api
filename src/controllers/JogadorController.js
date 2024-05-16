const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


class JogadorController{


   async create(request, response){
       try{
           const { name, idade, posicao, nacionalidade  } = request.body


           const jogador = await prisma.jogador.create({
               data: {
                   name,
                   idade,
                   posicao,
                   nacionalidade,
               },
           })


           response.json(jogador)
       }catch (err) {
           return response.status(409).send()
       }
   }

   async show(request, response){
        try{
            const jogadores = await prisma.jogador.findMany();

            response.json(jogadores)
            
        }catch (err) { 
            return response.status(409).send()
        }
    }

    async update(request, response){
        try{
            
            const { name, idade, posicao, nacionalidade  } = request.body
            const { id } = request.params
            
            const result = await prisma.jogador.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    idade: idade,
                    posicao: posicao,
                    nacionalidade: nacionalidade,
                },
            });

            return response.status(200).send()

        }catch (err) { 
            return response.status(409).send()
        }

    }

    async delete(request, response){
        
        try{
            const { id } = request.params
            console.log(`id: ${id}`)

        
            const deleteJogador = await prisma.jogador.delete({
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


module.exports = JogadorController