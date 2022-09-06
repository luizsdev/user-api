import request from "supertest"
import app from "../index"
describe("TEST GET ALL USERS ROUTES",async ()=>{
    const user = await request(app).get("/users")
    expect(user.statusCode).toBe(200)
})