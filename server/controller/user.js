const { user } = require('../model/client');

const getUser = ('/user', async(req, res)=>{
    const userDB = await client.findAll({attributes: ['name']});
    if(userDB){
        res.status(200).json(userDB);
    } else {
        res.status(400).json({msg:'There are no existing users'});
    }
})

const getUserID = ('/user/:id', async(req, res)=>{
    const {id} = req.params;
    const userDB = await client.findOne({where: {id: id}})
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
    const newUser = await user.create({name: name, password: password});
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
        const userDB = await client.update({name: name, password: password},
            {where: {id: id}
        });
        return res.status(200).json({msg: 'User update successfully'});
    }
})

const deleteUser = ('/user/:id', async(req, res)=>{
    const {id} = req.params;
    const userDB = await client.destroy({where: {id:id}})
    return res.status(200).json({msg: 'User was deleted successfully'});
})

module.exports = {getUser, getUserID, postUser, putUser, deleteUser}