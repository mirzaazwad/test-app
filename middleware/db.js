const mongoose = require("mongoose");

const connectDB = async()=>{
    console.log(process.env._MONGO_URI);
    const connection=await mongoose.connect(process.env._MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return connection;
}


module.exports = connectDB;
