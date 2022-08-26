const {Router} = require("express")
const router = Router()
const userController = require("../Controllers/userController")

router.get("/users",userController.getAllUser);
router.get("/users/:id",userController.getUserById)

module.exports = router;

