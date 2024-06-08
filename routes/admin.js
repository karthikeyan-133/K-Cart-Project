var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelpers.grogetAllProducts().then((products)=>{
    console.log(products)
    res.render('admin/view-products',{admin:true,products})
  })
});
router.get('/',function(req,res,next){
  productHelpers.veggetAllProducts().then((vegproducts)=>{
    console.log(vegproducts)
   res.render('admin/view-products',{admin:true,vegproducts})
  })
});
router.get('/',function(req,res,next){
  productHelpers.getDoctors().then((doctors)=>{
    console.log(doctors)
    res.render('admin/view-products',{admin:true,doctors})
  })
})
router.get('/',function(req,res,next){
  productHelpers.getTaxi().then((taxi)=>{
    console.log(taxi)
    res.render('admin/view-products',{admin:true,taxi})
  })
});
router.get('/',function(req,res,next){
  productHelpers.getMedicine().then((medicine)=>{
    console.log(medicine)
   res.render('admin/view-products',{admin:true,medicine})
  })
});
router.get('/',function(req,res,next){
  productHelpers.getRestaurants().then((restaurants)=>{
    console.log(restaurants)
   res.render('admin/view-products',{admin:true,restaurants})
  })
});
router.get('/',function(req,res,next){
  productHelpers.getRent().then((rent)=>{
    console.log(rent)
   res.render('admin/view-products',{admin:true,rent})
  })
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.get('/add-veg',function(req,res){
  res.render('admin/add-veg')
})
router.get('/add-doctors',function(req,res){
  res.render('admin/add-doctors')
})
router.get('/add-taxi',function(req,res){
  res.render('admin/add-taxi')
})
router.get('/add-medicine',function(req,res){
  res.render('admin/add-medicine')
})
router.get('/add-restaurants',function(req,res){
  res.render('admin/add-restaurants')
})
router.get('/add-rent',function(req,res){
  res.render('admin/add-rent')
})
router.get('/alogin',function(req,res){
  res.render('admin/alogin')
})
router.post('/add-product',(req,res)=>{
  productHelpers.groaddProduct(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-product')
      }
    })
   
  })
  
})
router.post('/add-veg',(req,res)=>{
  productHelpers.vegaddProduct(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-veg')
      }
    })
   
  })
  
})
router.post('/add-doctors',(req,res)=>{
  productHelpers.addDoctors(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-doctors')
      }
    })
   
  })
  
})
router.post('/add-taxi',(req,res)=>{
  productHelpers.addTaxi(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-taxi')
      }
    })
   
  })
  
})
router.post('/add-medicine',(req,res)=>{
  productHelpers.addMedicine(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-medicine')
      }
    })
   
  })
  
})
router.post('/add-restaurants',(req,res)=>{
  productHelpers.addRestaurants(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-restaurants')
      }
    })
   
  })
  
})
router.post('/add-rent',(req,res)=>{
  productHelpers.addRent(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-rent')
      }
    })
   
  })
  
})


module.exports = router;
