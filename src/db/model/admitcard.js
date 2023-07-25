const mongoose = require("mongoose");
const { goodData } = require("./model");
const resturentschema = new mongoose.Schema({
    userId: {
        type: String,
        ref:"goodData"
    },
    resturentName: String,
    resturentEmail: String,
    resturentPhone: Number,
    
    
    
})
const resturent = mongoose.model("resturent", resturentschema);
module.exports={resturent}