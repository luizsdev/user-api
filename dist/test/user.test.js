"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let userId;
describe("GET ROUTES", () => {
    it('USERS REQUEST', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(index_1.default).get("/users");
        expect(result.statusCode).toBe(200);
    }));
    it('USER BY ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(index_1.default).get("/users/1");
        expect(result.statusCode).toBe(200);
    }));
});
describe("POST ROUTES", () => {
    it("CREATE USER REQUEST", () => __awaiter(void 0, void 0, void 0, function* () {
        const testData = {
            "name": "John",
            "user": "johnxd12",
            "email": "johnxd12@gmail.com"
        };
        const result = yield (0, supertest_1.default)(index_1.default).post("/createuser").send(testData);
        expect(result.statusCode).toBe(200);
    }));
});
describe("UPDATE ROUTES", () => {
    it("UPDATE USER REQUEST", () => __awaiter(void 0, void 0, void 0, function* () {
        const updatingData = {
            "name": "Olivia",
            "user": "oliviaxd12",
            "email": "oliviaxd12@gmail.com"
        };
        const user = yield prisma.user.findFirst({
            where: {
                email: "johnxd12@gmail.com"
            },
        });
        userId = user.id;
        const result = yield (0, supertest_1.default)(index_1.default).post(`/updateuser/${userId}`).send(updatingData);
        expect(result.statusCode).toBe(200);
    }));
});
describe("DELETE ROUTES", () => {
    it("DELETE USER REQUEST", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(index_1.default).get(`/deleteuser/${userId}`);
        expect(result.statusCode).toBe(200);
    }));
});
