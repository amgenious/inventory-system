const Location = require("../models/location")
const Category = require("../models/category")
const Issues = require("../models/issues")
const Items = require("../models/items")
const Receipts = require("../models/receipts")
const Users = require("../models/userlogin")
const Item = require("../models/items")
const { where, find } = require("../models/location")

exports.createlocation = async (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Location cannot be empty!"});
        return
    }
    const data = new Location({
        location:req.body.location,
        status:req.body.status
    })

    await Location.insertMany([data])

    res.redirect('/viewlocations')
}

exports.displaylocationcontent = async (req,res) => {
    Location.find()
    .then((data) => {
    res.render('adminviews/locations/view_locations', {title:'Inventory - Admin View location', locations: data})
})
    .catch(err =>{
        console.log(err)
    })
}

exports.editlocation = async  (req,res) => {
    
    Location.findById({_id:req.params.id},req.body,{new: true},(err,data)=> {
        if(err){
            console.log(err)
        }else {
    res.render('adminviews/locations/update_location', {title:'Inventory - Admin Update Location',location: data})
    }
})
}

exports.updatelocation = async (req,res) => {
    const id = req.params.id;
    Location.findByIdAndUpdate({_id:req.params.id},req.body,(err,data)=> {
        if(err){
            console.log(err)
        }else {
            res.redirect("/viewlocations")
            console.log(data)
    }
    });
}

exports.deletelocation = async (req,res) => {
    const id = req.params.id;
    Location.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/viewlocations")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
//------END OF LOCATION CODES -------------//



//------START OF CATEGORY CODES---------------//
exports.addcategory = async (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Category cannot be empty!"});
        return
    }
    const data = new Category({
        category:req.body.category,
        status:req.body.status
    })

    await Category.insertMany([data])

    res.redirect('/viewcategories')
}

exports.displaycategorycontent = async (req,res) => {
    Category.find()
    .then((data) => {
    res.render('adminviews/category/view_category', {title:'Inventory - Admin View Category', Categories: data})
})
    .catch(err =>{
        console.log(err)
    })
}
exports.editcategory = async (req,res) => {
    
    Category.findById({_id:req.params.id},req.body,{new: true},(err,data)=> {
        if(err){
            console.log(err)
        }else {
    res.render('adminviews/category/update_category', {title:'Inventory - Admin Update Category', Category: data})
    }
})
}

exports.updatecategory = async (req,res) => {
    const id = req.params.id;
    Category.findByIdAndUpdate({_id:req.params.id},req.body,(err,data)=> {
        if(err){
            console.log(err)
        }else {
            res.redirect("/viewcategories")
            
    }
    });
}
exports.deletecategory = async (req,res) => {
    const id = req.params.id;
    Category.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/viewcategories")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
//-----------------END OF CODES FOR CATEGORY-------------------//


//------------------CODES FOR ITEMS FUNCTIONS----------------------//
exports.showlocationandcategoryinitems = async (req,res) => {
    Location.find()
    .then(data => {
      Category.find()
      .then(data1 => {
        res.render('adminviews/items/index',{title:'Inventory - Admin Items', Locations:data, Categories:data1 })
      })  
    })
    .catch(err => {
        console.log(err);
    })
}

exports.additem = async (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Category cannot be empty!"});
        return
    }
    const data = new Items({
        itemname:req.body.itemname,
        partnumber:req.body.partnumber,
        productlabel:req.body.productlabel,
        quantity:req.body.quantity,
        location:req.body.location,
        category:req.body.category,
        status:req.body.status,
        inventoryinstock:req.body.inventoryinstock,
        minimuminstock:req.body.minimuminstock,
        maximumneeded:req.body.maximumneeded,
        price:req.body.price,
    })

    await Items.insertMany([data])

    res.redirect('/viewitem')
}

exports.displayitemscontent = async (req,res) => {
    Items.find()
    .then((data) => {
    res.render('adminviews/items/view_items', {title:'Inventory - Admin View Category', Items: data})
})
    .catch(err =>{
        console.log(err)
    })
}

exports.edititem = async (req,res) => {
    Items.findById({_id:req.params.id},req.body,{new: true},(err,data)=> {
        Location.find()
    .then(data2 => {
      Category.find()
      .then(data1 => {
        res.render('adminviews/items/update_items',{title:'Inventory - Admin Update Item', Locations:data2, Categories:data1 ,Items:data})
      })  
    })
    .catch(err => {
        console.log(err);
    })
})}


exports.updateitem = async (req,res) => {
    const id = req.params.id;
    Items.findByIdAndUpdate({_id:req.params.id},req.body,(err,data)=> {
        if(err){
            console.log(err)
        }else {
            res.redirect("/viewitem")
    }
    });
}
exports.deleteitem = async (req,res) => {
    const id = req.params.id;
    Items.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/viewitem")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
//------------------END OF CODES FOR ITEMS FUNCTIONS----------------------//

//------------------START OF CODES FOR ISSUES FUNCTION-----------------//
exports.showitemsinissues = async (req,res) => {
    Items.find()
    .then(data => {
        res.render('adminviews/issues/index',{title:'Inventory - Admin Issues', Items:data, })
      })  
    .catch(err => {
        console.log(err);
    })
}

exports.addissue = async (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Category cannot be empty!"});
        return
    }
    const data = new Issues({
        clientname:req.body.clientname,
        clientcontact:req.body.clientcontact,
        orderdate:req.body.orderdate,
        amounttype:req.body.amounttype,
        paymenttype:req.body.paymenttype,
        itemname:req.body.itemname,
        price:req.body.price,
        quantity:req.body.quantity,
        total:req.body.total,
    })

    await Issues.insertMany([data])

    res.redirect('/viewissue')
}
exports.displayissuescontent = async (req,res) => {
    Issues.find()
    .then((data) => {
    res.render('adminviews/issues/view_issues', {title:'Inventory - Admin View Issues', Issues: data})
})
    .catch(err =>{
        console.log(err)
    })
}

exports.editissue = async (req,res) => {
    Issues.findById({_id:req.params.id},req.body,{new: true},(err,data)=> {
        Items.find()
      .then(data1 => {
        res.render('adminviews/issues/update_issues',{title:'Inventory - Admin Update Issues', Issues:data ,Items:data1})
      })  
    .catch(err => {
        console.log(err);
    })
})}

exports.updateissues = async (req,res) => {
    const id = req.params.id;
    Issues.findByIdAndUpdate({_id:req.params.id},req.body,(err,data)=> {
        if(err){
            console.log(err)
        }else {
            res.redirect("/viewissue")
    }
    });
}


exports.deleteissue = async (req,res) => {
    const id = req.params.id;
    Issues.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/viewissue")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
//--------------END OF CODES FOR ISSUES FUNCTIONS---------------//

//----------------START OF CODES FOR RECEIPT FUNCTIONS---------------//
exports.addreceipt = async (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Receipt cannot be empty!"});
        return
    }
    const data = new Receipts({
        clientname:req.body.clientname,
        clientcontact:req.body.clientcontact,
        invoicenumber:req.body.invoicenumber,
        valuedate:req.body.valuedate,
        totalitems:req.body.totalitems,
        allitemsname:req.body.allitemsname,
        totalquantities:req.body.totalquantities,
        totalamount:req.body.totalamount,
    })

    await Receipts.insertMany([data])

    res.redirect('/viewreceipt')
}

exports.displayreceiptscontent = async (req,res) => {
    Receipts.find()
    .then((data) => {
    res.render('adminviews/receipts/view_receipts', {title:'Inventory - Admin View Receipts', Receipts: data})
})
    .catch(err =>{
        console.log(err)
    })
}

exports.editreceipt = async (req,res) => {
    Receipts.findById({_id:req.params.id},req.body,{new: true},(err,data)=> {
        res.render('adminviews/receipts/update_receipts',{title:'Inventory - Admin Update Receipts', Receipts:data})
      })  
    .catch(err => {
        console.log(err);
    })
}


exports.updatereceipt = async (req,res) => {
    const id = req.params.id;
    Receipts.findByIdAndUpdate({_id:req.params.id},req.body,(err,data)=> {
        if(err){
            console.log(err)
        }else {
            res.redirect("/viewreceipt")
    }
    });
}


exports.deletereceipt = async (req,res) => {
    const id = req.params.id;
    Receipts.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/viewreceipt")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

//-----------END OF CODES FOR RECEIPT FUNCTIONS------------//

//----------START OF CODES FOR USER FUNCTIONS------------//
exports.displayuserscontent = async (req,res) => {
    Users.find()
    .then((data) => {
    res.render('adminviews/users/index', {title:'Inventory - Admin View-Users', Users: data})
})
    .catch(err =>{
        console.log(err)
    })
}

exports.edituser = async (req,res) => {
    Users.findById({_id:req.params.id},req.body,{new: true},(err,data)=> {
        res.render('adminviews/users/edituser',{title:'Inventory - Admin Edit User', Users:data})
      })  
    .catch(err => {
        console.log(err);
    })
}

exports.updateuser = async (req,res) => {
    const id = req.params.id;
    Users.findByIdAndUpdate({_id:req.params.id},req.body,(err,data)=> {
        if(err){
            console.log(err)
        }else {
            res.redirect("/users")
    }
    });
}


exports.deleteuser = async (req,res) => {
    const id = req.params.id;
    Users.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/users")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}
//-------------------END OF CODES FOR USERS-------------------------//

//-----------------START OF CODES FOR ENQUIRE BY PARTNUMBER----------------//
exports.bypartnumber = async (req,res) => {
    const searchfield = req.query.partnumber;

    let data = await Item.findOne({partnumber: searchfield})
    
    res.render('adminviews/enquiries/partnumbersearch',{title:'Inventory - Admin Partnumber', Items:data})
}
//---------------END OF CODES FOR ENQUIRE BY PARTNUMBER---------------------------//

//-----------------START OF CODES FOR ENQUIRE BY PARTNUMBER----------------//
exports.bylocation = async (req,res) => {
    const searchfield = req.query.location;

    let data = await Item.find({location: searchfield})
    
    // res.render('adminviews/enquiries/partnumbersearch',{title:'Inventory - Admin Partnumber', Items:data})
    console.log(data)
}
//---------------END OF CODES FOR ENQUIRE BY PARTNUMBER---------------------------//
