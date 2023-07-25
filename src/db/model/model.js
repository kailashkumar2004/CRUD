const mongoose = require("mongoose");
const goodDataschema = new mongoose.Schema({
    name: {
        type:String
    },
    fathersName: {
        type:String
    },
    mothersName: {
        type:String
    },
    village: {
        type:String
    },
    post: {
        type:String
    },
    panchayat: {
        type:String
    },
    pollicestand: {
        type:String
    },
    block: {
        type:String
    },
    distk: {
        type:String
    },
    pinCode: {
        type: Number,
        require: true,
        uniqe:true
    },
    state: {
        type:String
    },
    countery: {
        type:String
    }
})
const goodData = mongoose.model("goodData", goodDataschema);
module.exports={goodData}