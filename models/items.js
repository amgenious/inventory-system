const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemsSchema = new Schema({
    itemname:{
        type:String,
        required: true
    },
    partnumber: {
        type:Number,
        required:true
    },
    productlabel: {
        type:String,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    status: {
        type:String,
        required:true
    },
    inventoryinstock: {
        type:Number,
        required:true
    },
    minimuminstock: {
        type:Number,
        required:true
    },
    maximumneeded: {
        type:Number,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
},{timestamps: true});

const Item = mongoose.model('Item', itemsSchema);
module.exports = Item