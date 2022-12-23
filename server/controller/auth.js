const { user } = require('../model/user');
const {hashPassword, comparePassword} = require('../utils/helpers')


const register = ('/register', async(req, res)=>{
    const {name, password} = req.body;
    const hashedPassword = await hashPassword(password);
    const userDB = await user.findOne({ where: [{name: name}]});
    if (userDB){
        res.status(400).json({msg:'User already exists!'})
    } else {
    const newUser = await user.create({name: name, password: hashedPassword});
    const saveUser = newUser.save();
    return res.status(200).json({msg:"Information sent"})
    }
})

const login = ('/login', async(req, res)=>{
    const {name, password} = req.body;
    if (!name || !password) {
        return res.status(400).send("Email or password is missing");
    }
    const userDB = await user.findOne({ where: { name: name } });
    if (userDB === null) {
        return res.status(401).send("No such user exists");
    }
    const isValid = await comparePassword(password, userDB.password);
    if (isValid === true){
        req.session.user = userDB;
        return res.status(200).json({msg: "Successful login"})
    } else if (isValid === false) {
        return res.status(401).json({msg: "Wrong password"})
    }
})

module.exports = {register, login}