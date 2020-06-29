const router =require('express').Router();
let coronamarocdata=require('../models/coronamarocdata.models');//the monge user model 

router.route('/').get((req,res)=>{
    coronamarocdata.find()//mongo method that get all exercise from database
    .then(coronamarocdatas=>res.json(coronamarocdatas))//get all exercise then return in json format the users from database
    .catch(err=>res.status(400).json('error :'+err));
});
