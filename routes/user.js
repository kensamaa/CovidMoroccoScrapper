const router =require('express').Router();
let user=require('../models/user.models');


router.route('/').get((req,res)=>{
    user.find()//mongo method that get all user from database
    .then(users=>res.json(users))//get all user then return in json format the users from database
    .catch(err=>res.status(400).json('error :'+err));
});

router.route('/add').post((req,res)=>{//adding a user
    const PhoneId=req.body.PhoneId;
    const latitude=req.body.latitude;
    const longitude=req.body.longitude;
    const date=Date.parse(req.body.date);
    const newUser=new user({
        PhoneId,
        latitude,
        longitude,
        date,
    });//create new instance of user
    newUser.save()//save the user to database
    .then(()=>res.json("user added"))
    .catch(err=>res.status(400).json('error' +err));
});

router.route('/:PhoneId').get((req, res) => {//get the user depends on the phone id
    user.find({ PhoneId: req.params.PhoneId })
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports =router;
