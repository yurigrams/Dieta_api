const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


class PartidaController{


   async create(request, response){
       try{
           const { data, local, placar, idTimeDaCasa, idTimeVisitante  } = request.body


           const partida = await prisma.partida.create({
               data: {
                   data,
                   local,
                   placar,
                   idTimeDaCasa, 
                   idTimeVisitante,
               },
           })


           response.json(partida)
       }catch (err) {
           return response.status(409).send()
       }
   }


   

    async update(request, response){
        try{
            
            const { data, local, placar, idTimeDaCasa, idTimeVisitante  } = request.body
            const { id } = request.params
            
            const result = await prisma.partida.update({
                where: {
                    id: id,
                },
                data: {
                    data: data,
                    local: local,
                    placar: placar,
                    idTimeDaCasa: idTimeDaCasa, 
                    idTimeVisitante: idTimeVisitante,
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

        
            const deletePartida = await prisma.partida.delete({
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


module.exports = PartidaController