import express from "express";
import router from "./Routes/userRoutes"
const PORT = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use("/", router);

app.listen(3000, async () => {
  console.log("Server listening on port " + PORT);
});

export default app;
