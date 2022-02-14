
//rendering all pages

const home = (req, res) =>{
    res.render('index', {title :"HomePage"})
    
}

const about = (req, res) =>{
    res.render('about', {title :"About"})
    
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
    login,
    about
}


