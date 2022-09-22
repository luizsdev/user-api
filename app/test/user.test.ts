import app from "../index"
import supertest from "supertest"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let userId:Number;
describe("GET ROUTES",()=>{
    it('USERS REQUEST',async ()=>{
        const result = await supertest(app).get("/users");
        expect(result.statusCode).toBe(200);
    })
    it('USER BY ID',async ()=>{
        const result = await supertest(app).get("/users/1")
        expect(result.statusCode).toBe(200);
    })
})
describe("POST ROUTES",()=>{
    it("CREATE USER REQUEST",async ()=>{
        const testData = {
            "name":"John",
            "user":"johnxd12",
            "email":"johnxd12@gmail.com"
        }
        const result = await supertest(app).post("/createuser").send(testData)
        expect(result.statusCode).toBe(200)
    })
})
describe("UPDATE ROUTES",()=>{
    it("UPDATE USER REQUEST",async ()=>{
        const updatingData = {
            "name":"Olivia",
            "user":"oliviaxd12",
            "email":"oliviaxd12@gmail.com"
        }
         const user = await prisma.user.findFirst({
             where: {
                email: "johnxd12@gmail.com"
             },
         })
            userId = user!.id
         const result = await supertest(app).post(`/updateuser/${userId}`).send(updatingData)
         expect(result.statusCode).toBe(200)
        
    })
})
describe("DELETE ROUTES",()=>{
    it("DELETE USER REQUEST",async ()=>{
        const result = await supertest(app).get(`/deleteuser/${userId}`)
        expect(result.statusCode).toBe(200);
    })
})
    
   