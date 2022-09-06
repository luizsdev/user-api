import express from "express";
import router from "./Routes/userRoutes"
const app = express();
app.use(express.json());
app.use("/", router);

app.listen(3000, async () => {
  console.log("Server listening on port " + 3000);
});

export default app;
