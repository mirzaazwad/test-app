const mongoose = require("mongoose");

const connectDB = async()=>{
    const connection=await mongoose.connect(process.env._MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Mongoose conncted successfully!");
    return connection;
}


module.exports = connectDB;
