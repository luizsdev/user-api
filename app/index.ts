import express from "express";
import router from "./Routes/userRoutes"
import cors from "cors"
const PORT = process.env.PORT || 5000
const app = express();
router.use(cors())
app.use(cors())
app.use(express.json());
app.use("/", router);
app.listen(PORT, async () => {
  console.log("Server listening on port " + PORT);
});

export default app;
