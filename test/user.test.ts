import app from "../app/index"
import supertest from "supertest"

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