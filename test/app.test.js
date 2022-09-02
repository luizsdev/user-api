const request = require("supertest");
const app = require("../index");

test("Check if get route is working", async () => {
  const res = await request(app).get("/users");
  expect(res.statusCode).toBe(200);
});

test("Check if getting user by id is working", async () => {
  const res = await request(app).get("/users/1");
  expect(res.statusCode).toBe(200);
});

test("Check if creating user is working", async () => {
  const data = {
    name: "John",
    user: "Johnsmith12",
    email: "testmail@gmail.com",
  };
  const res = await request(app).post("/createuser", data);
  expect(res.text).toBe("User already exists");
  expect(res.text).toBe("User created successfully");
});
