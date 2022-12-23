const bcrypt = require('bcrypt');

const hashPassword = async (password)=>{
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
}

const comparePassword = async (raw, hash)=>{
    return bcrypt.compareSync(raw, hash)
}

module.exports = {hashPassword, comparePassword}