const express = require('express')

const UserController = require("../controllers/UserController")
const router = express.Router();

router.get('/create', UserController.create_get);  //ok
router.get('/', UserController.home);  //ok
router.get('/list', UserController.findAll);  //ok
router.get('/:id', UserController.findOne);   //ok
router.post('/create', UserController.create_post);
router.post('/update/:id', UserController.update);
router.get('/edit/:id', UserController.findOne);
router.delete('/:id', UserController.destroy);

module.exports = router
