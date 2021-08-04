const mongoose = require("mongoose");
const dbConnection = async ()=>{

    try {

        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser: true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true,
        });
        console.log("successful connection");
        
    } catch (error) {
        console.log("Error connecting to mongo: ", e );
        throw new Error("Error connectins to mongo");
    }

};
module.exports = {dbConnection};