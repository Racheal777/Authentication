
//rendering all pages

const home = (req, res) =>{
    res.render('index', {title :"HomePage"})
}


const signup = (req, res) =>{
    res.render('signup', {title :"Register"})
}


const login = (req, res) =>{
    res.render('login', {title :"Login"})
}


module.exports = {
    home,
    signup,
    login
}


