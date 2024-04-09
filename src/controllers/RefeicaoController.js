const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


class RefeicaoController{


   async create(request, response){
       try{
           const { name, descricao, dataHora, dentroDieta, idUser } = request.body
           


           const refeicao = await prisma.refeicao.create({
               data: {
                   name,
                   descricao,
                   dataHora,
                   dentroDieta,
                   idUser
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
            const { id } = request.params
            const refeicao = await prisma.refeicao.findMany({ where: { id } });
            response.json(refeicao)
            
        }catch (err) { 
            console.log(err)
            return response.status(409).send()
        }
    }

    async showRefeicaoUser(request, response){
        try{
            const {idUser} = request.params
            const showRefeicaoUser = await prisma.refeicao.findMany({ where: { idUser } });


            response.json(showRefeicaoUser)
            
        }catch (err){
            console.log(err)
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

    async showMetricaRefeicao(request, response){
        try{
            const { idUser } = request.params
            const totalRefeicao = await prisma.refeicao.count({ where: { idUser }})
            const refeicaoDentro = await prisma.refeicao.count({ where: { idUser, dentroDieta: true }})
            const refeicaoFora = await prisma.refeicao.count({ where: { idUser, dentroDieta: false }})
            const totalRefeicaoUser = await prisma.refeicao.findMany({ where: { idUser}, orderBy: [{dataHora: 'asc'}] })
            let sequencia = 0
            let sequenciaMaior = 0

            for (let index = 0; index < totalRefeicaoUser.length; index++) {
                const refeicao = totalRefeicaoUser[index];
                if (refeicao.dentroDieta) {
                    sequencia++
                    if (sequencia > sequenciaMaior) {
                        sequenciaMaior = sequencia
                    }
                } else {
                    sequencia = 0
                }
            }

            response.json({
                totalRefeicao,
                refeicaoDentro,
                refeicaoFora,
                sequenciaMaior
            })
        } catch {
            console.log(err)
            return response.status(409).send()
        }
    }
}

module.exports = RefeicaoController