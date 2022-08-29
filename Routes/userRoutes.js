const {Router} = require("express")
const router = Router()
const userController = require("../Controllers/userController")

router.get("/users",userController.getAllUser);
router.get("/users/:id",userController.getUserById)
router.post("/createuser",userController.createUser)
router.post("/updateuser/:id",userController.updateUser)

module.exports = router;

