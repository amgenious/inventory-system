const mongoose = require('mongoose')
const Schema = mongoose.Schema

const receiptsSchema = new Schema({
    clientname:{
        type:String,
        required: true
    },
    clientcontact: {
        type:String,
        required:true
    },
    invoicenumber: {
        type:String,
        required:true
    },
    valuedate: {
        type:Date,
        required:true
    },
    totalitems: {
        type:Number,
        required:true
    },
    allitemsname: {
        type:String,
        required:true
    },
    totalquantities: {
        type:Number,
        required:true
    },
    totalamount: {
        type:Number,
        required:true
    },
})

const Receipt = mongoose.model('Receipt', receiptsSchema);
module.exports = Receipt