const cron=require('node-cron');
const scrapper=require("./scrapper");
const scrapGoogl=require('./scrappeFromGoogl')

//cron.schedule('*/60 * * * *',() for evey 60minutes
//it will run the function
cron.schedule('* * * * *',()=>{
console.log("running the cron"+Date.now());
//calling the function from scrapper that scrapp and store
//scrapper.runCron();
scrapGoogl.runCron();
});
