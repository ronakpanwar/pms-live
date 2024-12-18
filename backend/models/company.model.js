const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    Logo:{
        type:String,
        default:""
    },
    address:{
        type:String,
    },
    website:{
        type:String,
    },
    about:{
        type:String
    }
    
},{timestamps:true});

const Company = mongoose.model('Company' , companySchema);

module.exports = Company