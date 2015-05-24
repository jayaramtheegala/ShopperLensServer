var express = require('express');
var router = express.Router();
var review = require('./models/product')

/* Middleware Section */
router.use(function(req,res,next){
  console.log('Time :', Date.now());
  next();
});

/* Handle Routes */
router.route('/product')

  /* Handle HTTP POST requests. */
  .post(function(req,res){
    res.json({product:req.body.product_name});
  })

  .put(function(req,res){
    var prodReview = new review();
    prodReview.productName = req.body.name;
    prodReview.review = req.body.review;
    prodReview.name = req.body.user_name;
    prodReview.rating = req.body.rating;


    prodReview.save(function(err){
      if(err){
        res.json({Error:'Error while creating review'});
      }
      res.json({success:'Review created.'});
    });
  })
module.exports = router;
