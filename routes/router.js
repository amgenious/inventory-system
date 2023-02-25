const express = require("express")
const route = express.Router()


route.get('/', (req,res) => {
    res.render('dashboard',{title:'Inventory Dashboard'})
})

route.get('/userlogin', (req,res) => {
    res.render('userlogin',{title:'User Login'})
})
route.post('/userlogin', (req,res) => {
    res.render('userlogin',{title:'User Login'})
})

route.get('/usersignup', (req,res) => {
    res.render('usersignup',{title:'User Signup'})
})

route.get('/adminlogin', (req,res) => {
    res.render('adminlogin',{title:'Admin Login'})
})

// location views
route.get('/location', (req,res) => {
    res.render('userviews/locations/index',{title:'Inventory - Location'})
})

route.post('/location', (req,res) => {
    res.render('userviews/locations/index',{title:'Inventory - Location'})
})

route.get('/viewlocation', (req,res) => {
    res.render('userviews/locations/view_locations', {title:'Inventory - View location'})
})

route.get('/updatelocation', (req,res) => {
    res.render('userviews/locations/update_location', {title:'Inventory - Update Location'})
})
// category views
route.get('/category', (req,res) => {
    res.render('userviews/category/index',{title:'Inventory - Category'})
})

route.get('/viewcategory', (req,res) => {
    res.render('userviews/category/view_category', {title:'Inventory - View Category'})
})

route.get('/updatecategory', (req,res) => {
    res.render('userviews/category/update_category', {title:'Inventory - Update Category'})
})

//items views
route.get('/items', (req,res) => {
    res.render('userviews/items/index',{title:'Inventory - Items'})
})

route.get('/viewitems', (req,res) => {
    res.render('userviews/items/view_items', {title:'Inventory - View Items'})
})

route.get('/updateitems', (req,res) => {
    res.render('userviews/items/update_items', {title:'Inventory - Update Items'})
})

//issues views
route.get('/issues', (req,res) => {
    res.render('userviews/issues/index',{title:'Inventory - Issues'})
})

route.get('/viewissues', (req,res) => {
    res.render('userviews/issues/view_issues', {title:'Inventory - View Issues'})
})

route.get('/updateissues', (req,res) => {
    res.render('userviews/issues/update_issues', {title:'Inventory - Update Issues'})
})

//enquiry views
route.get('/partnumber', (req,res) => {
    res.render('userviews/enquiries/partnumber',{title:'Inventory - Enquiry by Partnmber'})
})

route.get('/searchlocation', (req,res) => {
    res.render('userviews/enquiries/searchloc', {title:'Inventory - Enquiry by Seach location'})
})

//receipts view
route.get('/receipts', (req,res) => {
    res.render('userviews/receipts/index',{title:'Inventory - Receipts'})
})

route.get('/viewreceipts', (req,res) => {
    res.render('userviews/receipts/view_receipts', {title:'Inventory - View Receipts'})
})
route.get('/updatereceipt', (req,res) => {
    res.render('userviews/receipts/update_receipts', {title:'Inventory - Update Receipts'})
})
//report view
route.get('/report', (req,res) => {
    res.render('userviews/report/index',{title:'Inventory - Report'})
})

module.exports = route;