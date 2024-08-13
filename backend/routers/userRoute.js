const express = require('express');
const app = express();
const router = express.Router();

const {getUsers,addUser,updateUser,deleteUser} = require('../controllers/userController')  

router.get('/',getUsers);

router.post('/signup',addUser)             //should match with frontend

router.patch('/update',updateUser)

router.delete('/delete',deleteUser)

module.exports = router;