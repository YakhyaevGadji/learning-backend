const Router = require('express');
const userController = require("../controller/userController");
const router = new Router();


router.get('/auth', userController.check);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;