import express from "express";
import  cors from "cors"
import router from "./Routes/userRoutes"
const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use("/", router);
app.use(cors())
app.options("*", cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }));
app.listen(PORT, async () => {
  console.log("Server listening on port " + PORT);
});

export default app;
