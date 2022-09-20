import express from "express";
import cors from 'cors';
import router from "./Routes/userRoutes"
const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use("/", router);
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: "https://portfolio-luizsdev.vercel.app",
  preflightContinue: false,
};
router.use(cors(options));
router.options('*', cors(options));
app.listen(PORT, async () => {
  console.log("Server listening on port " + PORT);
});

export default app;
