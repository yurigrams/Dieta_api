const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


class TimeController{


   async create(request, response){
       try{
           const { nome, fundacao, tecnico, nacionalidade, idJogador } = request.body
           
           const time = await prisma.time.create({
               data: {
                   nome,
                   fundacao,
                   tecnico,
                   nacionalidade,
                   idJogador
                },
           })


           response.json(time)
       }catch (err) {
            console.log(err)
            return response.status(409).send()
       }
   }

   async show(request, response){
        try{
            const { id } = request.params
            const time = await prisma.time.findMany({ where: { id } });
            response.json(time)
            
        }catch (err) { 
            console.log(err)
            return response.status(409).send()
        }
    }

}
module.exports = TimeController