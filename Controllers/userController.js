const {PrismaClient} = require("@prisma/client");
const { warnEnvConflicts } = require("@prisma/client/runtime");
const { parse } = require("dotenv");
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
            const toParseId =  req.params.id;
            const id = parseInt(toParseId);
             const user = await prisma.user.findUnique({
                where:{
                    id
                }
             })
             if(user){
                return res.send(user)
             }
             else{
                res.send("Couldn't find user with given id")
             }
        }
        static async createUser(req,res){
            const {name,user,email} = await req.body;
            const checkUser = await prisma.user.findFirst({
                where:{
                    email
                }
            })
                if(checkUser){
                    res.send("User already exists")
                }
                else{
                    await prisma.user.create({
                        data:{
                            name,
                            user,
                            email
                        }
                    }).then(()=>{
                        res.send("User created sucessfully")
                    }).catch(()=>{
                        res.send("Couldn't create user")
                    })
                }
        }
        static async updateUser(req,res){
            const {id} = req.params
            const parsedId = parseInt(id)
            const {user,email,name} = req.body
            const checkuser = await prisma.user.findUnique({
                where:{
                    id:parsedId
                }
            })
            if(checkuser){
                await prisma.user.update({
                    where:{
                        id:parsedId
                    },
                    data:{
                        user:user,
                        email:email,
                        name:name
                    }
                }).then(()=>{
                    res.send("User updated sucessfully")
                }).catch(()=>{
                    res.send("Couldn't update user")
                })
            }
            else{
                res.send("Couldn't find user with given id")
            }
        }
            static async deleteUser(req,res){
                const {id} = req.params
                const parsedId = parseInt(id)
                const checkUser = await prisma.user.findUnique({
                    where:{
                        id:parsedId
                    }
                })
                if(checkUser){
                    await prisma.user.delete({
                        where:{
                            id:parsedId
                        }
                    }).then(()=>{
                        res.send("User deleted sucessfully")
                    }).catch(()=>{
                        res.send("Couldn't delete user")
                    })
                }
                else{
                   res.send("Couldn't not find user with given id")
                }
            }
}
module.exports = userController;