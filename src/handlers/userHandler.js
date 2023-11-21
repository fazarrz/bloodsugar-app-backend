const userModels = require('../models/userModel');

const registerHandler = async(req, res) => {

    const {email, password} = req.body;

    try{
        const userRecord = await userModels.registerModels(email, password);

        return res.status(200).json({message: `User ${userRecord.uid} created successfully`});
    }catch(err){
        return res.status(400).json({message: err.message});
    }
}

module.exports = {registerHandler};