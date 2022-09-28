import app from '../index';
import supertest from 'supertest';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
let userId: number;
let adminId: number;
let token: string;
describe('AUTH ROUTES', () => {
  it('REGISTER REQUEST', async () => {
    const testAuth = {
      user: 'testUser',
      password: 'testPassword',
    };
    const result = await supertest(app).post('/auth/register').send(testAuth);
    expect(result.status).toBe(200);
  });
  describe('LOGIN REQUEST', () => {
    it('LOGIN REQUEST', async () => {
      const testAuth = {
        user: 'testUser',
        password: 'testPassword',
      };
      const result = await supertest(app).get('/auth/login').send(testAuth);
      token = result.body.token;
      expect(result.status).toBe(200);
    });
  });
});
describe('GET ROUTES', () => {
  it('USERS REQUEST', async () => {
    const result = await supertest(app).get('/users').set({ token: token });
    expect(result.statusCode).toBe(200);
  });
  it('USER BY ID', async () => {
    const result = await supertest(app).get('/users/1').set({ token: token });
    expect(result.statusCode).toBe(200);
  });
});
describe('POST ROUTES', () => {
  it('CREATE USER REQUEST', async () => {
    const testData = {
      name: 'John',
      user: 'johnxd12',
      email: 'johnxd12@gmail.com',
    };
    const result = await supertest(app).post('/createuser').set({ token: token }).send(testData);
    expect(result.statusCode).toBe(200);
  });
});
describe('UPDATE ROUTES', () => {
  it('UPDATE USER REQUEST', async () => {
    const updatingData = {
      name: 'Olivia',
      user: 'oliviaxd12',
      email: 'oliviaxd12@gmail.com',
    };
    const user = await prisma.user.findFirst({
      where: {
        email: 'johnxd12@gmail.com',
      },
    });
    userId = user!.id;
    const result = await supertest(app).put(`/updateuser/${userId}`).set({ token: token }).send(updatingData);
    expect(result.statusCode).toBe(200);
  });
});
describe('DELETE ROUTES', () => {
  it('DELETE USER REQUEST', async () => {
    const result = await supertest(app).delete(`/deleteuser/${userId}`).set({ token: token });
    expect(result.statusCode).toBe(200);
  });
  it('DELETE ADMIN REQUEST', async () => {
    const admin = await prisma.admin.findFirst({
      where: {
        user: 'testUser',
      },
    });
    adminId = admin!.id;
    const result = await supertest(app).delete(`/auth/deleteadmin/${adminId}`).set({ token: token });
    expect(result.statusCode).toBe(200);
  });
});
