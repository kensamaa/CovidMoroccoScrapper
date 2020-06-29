
var covidmorocco=require('./models/coronamarocdata.models');
const scrapper=require("./scrapper");

const express =require('express');
var mongoose = require('mongoose');
const cors=require('cors');
//const cron = require("./cron");
/*
async function trt(){
    console.log(await scapper.getConfirmCases())
    console.log(await scapper.getDied())
}*/


const app=express();
const port=process.env.port || 5000;//SET the port 

//this is the middleware
//un middleware est un logiciel tiers qui crée un réseau d'échange d'informations entre différentes applications informatiques
app.use(cors());
app.use(express.json());//will allow us to parse json cause the server will send and resecve json

//api that scrap but we wont use it
app.get('/scrapp',async(req,res,next)=>{
    console.log("scrapping")
    const cases=await scrapper.getConfirmCases();
    const died=await scrapper.getDied();
    const cured=await scrapper.getcured()
    const getcasablanca =await scrapper.getcasablanca();
    const getRabat=await scrapper.getRabat();
    const gettanger=await scrapper.gettanger();
    const getFesmeknes=await scrapper.getFesmeknes();
    const getoriental=await scrapper.getoriental();
    const getbeniMellal=await scrapper.getbeniMellal();
    const getDaraaTafilalet=await scrapper.getDaraaTafilalet();
    const getDakhlaOuedEdDahab=await scrapper.getDakhlaOuedEdDahab();
    const getSoussMassa=await scrapper.getSoussMassa();
    const getLaayouneSakiaElHamra=await scrapper.getLaayouneSakiaElHamra();
    const getGuelmim=await scrapper.getGuelmim();
    
    console.log(cases,died,cured)
    const date=Date.now();
    res.json({date,cases,died,cured,getcasablanca,getRabat,gettanger,getFesmeknes,getoriental,getbeniMellal,getDaraaTafilalet,getDakhlaOuedEdDahab,getSoussMassa,getLaayouneSakiaElHamra,getGuelmim})
});
//api will get data from database 
app.get('/',async(req,res,next)=>{
    covidmorocco.find()//mongo method that get all exercise from database
    .then(covid=>res.json(covid))//get all exercise then return in json format the users from database
    .catch(err=>res.status(400).json('error :'+err));
})
app.get('/last',async(re,res,next)=>{
    covidmorocco.findOne().sort({ field: 'asc', _id: -1 }).limit(1)//mongo method that get all exercise from database
    .then(covid=>res.json(covid))//get all exercise then return in json format the users from database
    .catch(err=>res.status(400).json('error :'+err));
})
const userRouter=require('./routes/user');
app.use('/user',userRouter);

const uri = "mongodb+srv://kensama:kensama123@cluster0-pbt6g.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri,{useUnifiedTopology: true,useNewUrlParser : true,useCreateIndex : true});
     
    // get reference to database
    var db = mongoose.connection;
     
    db.on('error', console.error.bind(console, 'connection error:'));
     
    db.once('open', function() {
        console.log("Connection Successful!");

    });

app.listen(port,()=>{
    console.log("app running on port "+port+" http://localhost:"+port+"/");
})


