const exprss=require("express");
const user=exprss.Router();   //user router
const {loginpage,signup}=require('../controllers/usercontroll')

user.get('/',loginpage)
user.get('/signup',signup)
module.exports=user;