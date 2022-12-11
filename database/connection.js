const MONGOOSE = require('mongoose');

exports.connectDb = async (DATABASE_URL) => {
    try{
        await MONGOOSE.connect(DATABASE_URL);
        console.log("Connection Successful");
    } catch (error){
        console.log(`Connection failed: ${error}`);
    }
}