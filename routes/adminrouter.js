const express = require("express")
const route = express.Router()
const adminservice = require("../services/adminviews")


route.get('/adminlogin', (req,res) => {
    res.render('adminlogin',{title:'Admin Login'})
})
route.post('/adminlogin', (req,res) => {
    res.render('adminlogin',{title:'Admin Login'})
})

//----------CODES FOR THE LOCATION ROUTES--------------//
// location views
route.get('/locations', (req,res) => {
    res.render('adminviews/locations/index',{title:'Inventory - Admin location'})
})

route.post('/locations', (req,res) => {
    res.render('adminviews/locations/index',{title:'Inventory - Admin location'})
})
// codes to display content on the viewlocation page
route.get('/viewlocations', adminservice.displaylocationcontent)
// to add location function
route.post('/api/location', adminservice.createlocation)

//to edit our location
route.get('/edit/:id', adminservice.editlocation);

//to update our location
route.post('/update/:id', adminservice.updatelocation);

//to delete location
route.get('/delete/:id', adminservice.deletelocation);

//-------------END OF CODES FOR LOCATION ROUTES--------------------//



//-------------START OF CODES FOR CATEGORY ROUTES-------------------//
// category views
route.get('/categories', (req,res) => {
    res.render('adminviews/category/index',{title:'Inventory - Admin Category'})
})

route.get('/updatecategories', (req,res) => {
    res.render('adminviews/category/update_category', {title:'Inventory - Admin Update Category'})
})
// codes to display content on the viewcategories page
route.get('/viewcategories', adminservice.displaycategorycontent);

route.post('/add/category', adminservice.addcategory);

route.get('/editcategory/:id', adminservice.editcategory);

route.post('/updatecatgory/:id', adminservice.updatecategory);

route.get('/deletecategory/:id', adminservice.deletecategory);
//------------END CODES FOR CATEGORY ROUTES--------------//



//--------------START CODES FOR ITEMS ROUTES-----------------//
//items views
route.get('/item', adminservice.showlocationandcategoryinitems)

route.get('/viewitem', adminservice.displayitemscontent)

route.post('/add/item', adminservice.additem)

route.get('/updateitem', (req,res) => {
    res.render('adminviews/items/update_items', {title:'Inventory - Admin Update Items'})
})

route.get('/edititem/:id', adminservice.edititem);

route.post('/updateitem/:id', adminservice.updateitem);

route.get('/deleteitem/:id', adminservice.deleteitem);

//--------------END OF CODES FOR ITEMS ROUTES----------------//



//----------------START OF CODES FOR ISSUES ROUTES-----------//
//issues views
route.get('/issue', adminservice.showitemsinissues)

route.post('/add/issues', adminservice.addissue)

route.get('/viewissue', adminservice.displayissuescontent)

route.get('/updateissue', (req,res) => {
    res.render('adminviews/issues/update_issues', {title:'Inventory - Admin Update Issues'})
})

route.get('/editissue/:id', adminservice.editissue);

route.post('/updateissue/:id', adminservice.updateissues);

route.get('/deleteissue/:id', adminservice.deleteissue);

//--------------END OF CODES FOR ISSUES ROUTES-------------//

//---------------START OF CODES FOR RECEIPTS ROUTES----------//
//receipts view
route.get('/receipt', (req,res) => {
    res.render('adminviews/receipts/index',{title:'Inventory - Admin Receipts'})
})

route.post('/add/receipt', adminservice.addreceipt);

route.get('/viewreceipt',adminservice.displayreceiptscontent);

route.get('/updatereceipts', (req,res) => {
    res.render('adminviews/receipts/update_receipts', {title:'Inventory - Admin Update Receipts'})
})

route.get('/editreceipt/:id', adminservice.editreceipt);

route.post('/updatereceipt/:id', adminservice.updatereceipt);

route.get('/deletereceipt/:id', adminservice.deletereceipt);
//--------------------END OF CODES FOR RECEIPTS ROUTES----------------//

//enquiry views
route.get('/partnumbers', (req,res) => {
    res.render('adminviews/enquiries/partnumber',{title:'Inventory - Admin Enquiry by Partnmber'})
})

route.get('/search',adminservice.bypartnumber)


route.get('/searchlocations', (req,res) => {
    res.render('adminviews/enquiries/searchloc', {title:'Inventory - Admin Enquiry by Seach location'})
})

route.post('/searchlocation', adminservice.bylocation)

//report view
route.get('/reports', (req,res) => {
    res.render('adminviews/report/index',{title:'Inventory - Admin Report'})
})

//report users
route.get('/users', adminservice.displayuserscontent)

route.get('/edituser/:id', adminservice.edituser);

route.post('/updateuser/:id', adminservice.updateuser);

route.get('/deleteuser/:id', adminservice.deleteuser);

module.exports = route;