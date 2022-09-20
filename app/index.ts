import express from "express";
import cors from 'cors';
import router from "./Routes/userRoutes"
const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use("/", router);
const options: cors.CorsOptions = {
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: "*",
};
app.use(cors(options));
app.listen(PORT, async () => {
  console.log("Server listening on port " + PORT);
});

export default app;
