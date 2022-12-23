const { country } = require('../model/country'); 

const getCountry = ('/user', async(req, res)=>{
    const countryDB = await country.findAll({attributes: ['name']});
    if(countryDB){
        res.status(200).json(countryDB);
    } else {
        res.status(400).json({msg:'There are no existing countries'});
    }
})

const getCountryID = ('/country/:id', async(req, res)=>{
    const {id} = req.params;
    const countryDB = await country.findOne({where: {country_id: id}})
    if(countryDB){
        res.status(200).json(countryDB);
    } else {
        res.status(400).json({msg:'There are no existing countries'});
    }
})

const postCountry = ('/country', async(req, res)=>{
    const {name} = req.body;
    if (!name) {
        return res.status(400).send("The name is missing");
    } else {    
    const newCountry = await country.create({name: name});
    const saveCountry = newCountry.save();
    res.status(200).json({msg:'Country was added with success'})
    }
})

const putCountry = ('/country/:id', async(req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    if (!name){
        return res.status(400).send("The name is missing");
    } else {
        const countryDB = await country.update({name: name},
            {where: {country_id: id}
        });
        return res.status(200).json({msg: 'Country update successfully'});
    }
})

const deleteCountry = ('/country/:id', async(req, res)=>{
    const {id} = req.params;
    const countryDB = await country.destroy({where: {country_id: id}})
    return res.status(200).json({msg: 'Country was deleted successfully'});
})

module.exports = {getCountry, getCountryID, postCountry, putCountry, deleteCountry}