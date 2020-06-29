const router =require('express').Router();
let user=require('../models/user.models');


router.route('/').get((req,res)=>{
    user.find()//mongo method that get all exercise from database
    .then(users=>res.json(users))//get all exercise then return in json format the users from database
    .catch(err=>res.status(400).json('error :'+err));
});

router.route('/add').post((req,res)=>{
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

router.route('/:PhoneId').get((req, res) => {
    user.find({ PhoneId: req.params.PhoneId })
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports =router;