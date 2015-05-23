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
  });

module.exports = router;
