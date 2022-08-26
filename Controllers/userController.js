const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();

class userController{

    static async getAllUser(req,res){
            const users = await prisma.user.findMany({})
                if(users){
                    return res.json(users)
                }
                else{
                    res.status(500)
                }
        }
        static async getUserById(req,res){
            const {id} =  parseInt(req.params);
             const user = await prisma.user.findUnique({
                where:{
                    id
                }
             })
             if(user){
                return res.send(user)
             }
             else{
                res.status(500)
             }
        }
}
module.exports = userController;