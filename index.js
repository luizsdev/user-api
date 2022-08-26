require("dotenv").config()
const express = require("express")
const app = express();
const router = require("./Routes/userRoutes")
const bodyParser = require("body-parser");
const PORT = process.env.PORT;
app.use(bodyParser.json())
app.use("/",router)

app.listen(PORT,()=>{
    console.log("Server listening on port " + PORT)
})