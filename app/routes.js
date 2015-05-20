var express = require('express');
module.exports={

  var router = express.Router();

  router.get('/', function(req,res){
    console.log('hi there');
    res.json({message :'hi there.'});
  });

}
