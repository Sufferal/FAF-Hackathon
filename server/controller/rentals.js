const { rentals } = require('../model/rentals');

const getRental = ('/rentals', async(req, res)=>{
    const rentalsDB = await rentals.findAll({attributes: ['name']});
    if(rentalsDB){
        res.status(200).json(rentalsDB);
    } else {
        res.status(400).json({msg:'There are no existing rentals'});
    }
})

const getRentalID = ('/rentals/:id', async(req, res)=>{
    const {id} = req.params;
    const rentalsDB = await rentals.findOne({where: {rentals_id: id}})
    if(rentalsDB){
        res.status(200).json(rentalsDB);
    } else {
        res.status(400).json({msg:'There are no existing rentals'});
    }
})

const postRental = ('/rentals', async(req, res)=>{
    const {name, description, foreignKey} = req.body;
    if (!name) {
        return res.status(400).send("The name is missing");
    } else {
    const newRentals = await user.create({name: name, description: description, foreignKey: foreignKey});
    const saveRentals = newUser.save();
    res.status(200).json({msg:'Rental was added with success'})
    }
})

const putRental = ('/rentals/:id', async(req, res)=>{
    const {id} = req.params;
    const {name, description, foreignKey} = req.body;
    if (!name){
        return res.status(400).send("The name is missing");
    } else {
        const rentalsDB = await user.update({name: name, description: description, foreignKey: foreignKey},
            {where: {user_id: id}
        });
        return res.status(200).json({msg: 'Rental updated successfully'});
    }
})

const deleteRental = ('/rentals/:id', async(req, res)=>{
    const {id} = req.params;
    const rentalsDB = await user.destroy({where: {rental_id: id}})
    return res.status(200).json({msg: 'Rental was deleted successfully'});
})

module.exports = {getRental, getRentalID, postRental, putRental, deleteRental}