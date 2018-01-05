var express = require('express');
var router = express.Router();

var User = require('../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup',function (req,res) {
  res.render('signup',{});

})
router.post('/signup',function (req,res,next) {
    console.log('yes i am in post');
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function (err,data) {
        if(err){
          console.log('error found')
          res.send(err)
        }else{
          console.log('data saved ');
            res.toastr.success('Successfully logged in.', "You're in!");
          res.render('login',{});
        }
    })

});

router.get('/signin',function (req,res,next) {
    console.log('yes i am in post');
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function (err,data) {
        if(err){
            console.log('error found')
            res.send(err)
        }else{
            console.log('data saved ');
            res.send(data);
        }
    })

});
module.exports = router;
