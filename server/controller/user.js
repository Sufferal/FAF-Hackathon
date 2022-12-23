const { user } = require('../model/user');
const {hashPassword, comparePassword} = require('../utils/helpers') 

const getUser = ('/user', async(req, res)=>{
    const userDB = await user.findAll({attributes: ['name']});
    if(userDB){
        res.status(200).json(userDB);
    } else {
        res.status(400).json({msg:'There are no existing users'});
    }
})

const getUserID = ('/user/:id', async(req, res)=>{
    const {id} = req.params;
    const userDB = await user.findOne({where: {user_id: id}})
    if(userDB){
        res.status(200).json(userDB);
    } else {
        res.status(400).json({msg:'There are no existing users'});
    }
})

const postUser = ('/user', async(req, res)=>{
    const {name, password} = req.body;
    if (!name) {
        return res.status(400).send("The name is missing");
    } else {
    const hashedPassword = await hashPassword(password);     
    const newUser = await user.create({name: name, password: hashedPassword});
    const saveUser = newUser.save();
    res.status(200).json({msg:'User was added with success'})
    }
})

const putUser = ('/user/:id', async(req, res)=>{
    const {id} = req.params;
    const {name, password} = req.body;
    if (!name){
        return res.status(400).send("The name is missing");
    } else {
        const hashedPassword = await hashPassword(password); 
        const userDB = await user.update({name: name, password: hashedPassword},
            {where: {user_id: id}
        });
        return res.status(200).json({msg: 'User update successfully'});
    }
})

const deleteUser = ('/user/:id', async(req, res)=>{
    const {id} = req.params;
    const userDB = await user.destroy({where: {user_id: id}})
    return res.status(200).json({msg: 'User was deleted successfully'});
})

module.exports = {getUser, getUserID, postUser, putUser, deleteUser}