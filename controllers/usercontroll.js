const loginpage=(req,res)=>{

    const img="/login/logo.png"
    res.render('login',{img})
}
const signup=(req,res)=>{
    res.render('signup')

}

module.exports={loginpage,signup};
