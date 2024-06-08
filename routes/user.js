var express = require('express');
var router = express.Router();
var productHelpers=require('../helpers/product-helpers')
var userHelpers=require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  productHelpers.grogetAllProducts().then((products)=>{
    console.log(products)
    res.render('index',{products})
  })
});
router.get('/services',function(req,res){
  res.render('user/services')
})
router.get('/cart',function(req,res){
  res.render('user/cart')
})
router.get('/login',function(req,res){
  if(req.session.user){
    res.redirect('/')
  }else{

  res.render('user/login',{"loginErr":req.session.userLoginErr})
  req.session.userLoginErr=false
  }
  res.render('user/login')
})
router.get('/signup',function(req,res){
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response);
    req.session.user=response
    req.session.user.loggedIn=true
    res.redirect('/login')
  })

})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      
      req.session.user=response.user
      req.session.user.loggedIn=true
      res.redirect('/')
    }else{
      req.session.userLoginErr="Invalid username or password"
      res.redirect('/login')
    }
  })

})
router.get("/logout",(req,res)=>{
  req.session.user=null
  res.redirect('/')
})
router.get('/about',function(req,res){
  res.render('user/about')
})
router.get('/rent',function(req,res){
  productHelpers.getRent().then((rent)=>{
    console.log(rent)
    res.render('user/rent',{rent})
  })
})
router.get('/checkout',function(req,res){
  res.render('user/checkout')
})
router.get('/medicine',function(req,res){
  productHelpers.getMedicine().then((medicine)=>{
    console.log(medicine)
    res.render('user/medicine',{medicine})
  })
})
router.get('/events',function(req,res){
  res.render('user/events')
})
router.get('/restaurants',function(req,res){
  productHelpers.getRestaurants().then((restaurants)=>{
    console.log(restaurants)
    res.render('user/restaurants',{restaurants})
  })
})
router.get('/doctors',function(req,res){
  productHelpers.getDoctors().then((doctors)=>{
    console.log(doctors)
    res.render('user/doctors',{doctors})
  })
})
router.get('/taxi',function(req,res){
  productHelpers.getTaxi().then((taxi)=>{
    console.log(taxi)
    res.render('user/taxi',{taxi})
  })
})
router.get('/mail',function(req,res){
  res.render('user/mail')
})
router.get('/payment',function(req,res){
  res.render('user/payment')
})
router.get('/privacy',function(req,res){
  res.render('user/privacy')
})
router.get('/grocery',function(req,res){
  productHelpers.grogetAllProducts().then((products)=>{
    console.log(products)
   res.render('user/grocery',{products})
  })
});
router.get('/single',function(req,res){
  res.render('user/single')
})
router.get('/vegetables',function(req,res){
  productHelpers.veggetAllProducts().then((vegproducts)=>{
    console.log(vegproducts)
    res.render('user/vegetables',{vegproducts})
  })
})
router.get('/error',function(req,res){
  res.render('user/error')
})



module.exports = router;
