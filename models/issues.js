const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issuesSchema = new Schema({
    clientname:{
        type:String,
        required: true
    },
    clientcontact: {
        type:Number,
        required:true
    },
    orderdate: {
        type:Date,
        required:true
    },
    amounttype: {
        type:String,
        required:true
    },
    paymenttype: {
        type:String,
        required:true
    },
    itemname: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    total: {
        type:Number,
        required:true
    },
})

const Issue = mongoose.model('Issue', issuesSchema);
module.exports = Issue