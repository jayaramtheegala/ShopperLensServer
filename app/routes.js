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

  /* Handle HTTP POST requests.
   * Used to write review to database.
   */
  .post(function(req,res){
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

  });

router.route('/product/:product_name')

  /*
   * Handle HTTP GET requests at /product/:product_name.
   * Returns 1 prouct review of specified product.
   * Returns ERROR if product not found.
   */
  .get(function(req,res){
    console.log(req.params.product_name);
    review.findOne({'productName' :req.params.product_name }, function(err,review){
      if(err){
        res.json({Message :'ERROR_PROD_NOT_FOUND'})
      }
      res.json(review);
    });
  })
module.exports = router;
