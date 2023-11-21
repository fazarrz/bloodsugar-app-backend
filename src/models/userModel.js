const db = require("./connectDB");

const registerModel = async(email, password) => {
    
    const userRecord = await db.auth.createUser({
        email,
        password
    });

    return userRecord;
}

module.exports = {registerModel};

