const puppetter=require('puppeteer')
//var mongoose = require('mongoose');
const request=require('request')
const cheerio=require("cheerio")
var covidmorocco=require('./models/coronamarocdata.models');
url="https://news.google.com/covid19/map?hl=fr&mid=%2Fm%2F04wgh&gl=MA&ceid=MA%3Afr"
async function senddata(url,xpath){
    //cause some times the website might not work and the scrapting wont work so we do try catch 
    
        const browser =await puppetter.launch({headless: true});
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.goto(url,{waitUntil:'networkidle2'})
        const [el1] = await page.$x(xpath);
        const txtt=await el1.getProperty('textContent');
        const data= await txtt.jsonValue();
        await browser.close()
   
        
    return data;
}


async function getConfirmCases(){
    let casconfirm=""
    casconfirm=  await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[1]/div[1]/div/div/div[1]/div[2]');
    console.log("start");
    console.log(casconfirm);
   return casconfirm;
}
async function getDied(){
    let casconfirm=""
    casconfirm=  await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[1]/div[1]/div/div/div[3]/div[2]');
    console.log("start");
    console.log(casconfirm);
   return casconfirm;
}
async function getcured(){
    let casconfirm=""
    casconfirm=  await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[1]/div[1]/div/div/div[2]/div[2]');
    console.log("start");
    console.log(casconfirm);
   return casconfirm;
}
async function getcasablanca(){ 
    const casablanca=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[3]/td[1]');
    return casablanca
}
async function getmarakech(){
     const marakech=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[4]/td[1]');
return marakech
}
async function getRabat(){  
    const Rabat=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[7]/td[1]');
    return Rabat
}
async function gettanger(){ 
    const tanger=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[5]/td[1]');
return tanger
}
async function getFesmeknes(){ 
   const Fesmeknes=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[6]/td[1]');
return Fesmeknes
}
async function getoriental(){  
   const oriental=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[9]/td[1]');
   return oriental
}
async function getbeniMellal(){ 
    const beniMellal=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[10]/td[1]');return beniMellal
}
async function getDaraaTafilalet(){ 
    const DaraaTafilalet=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[8]/td[1]');return DaraaTafilalet
}
async function getDakhlaOuedEdDahab(){ 
    const DakhlaOuedEdDahab=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[14]/td[1]');return DakhlaOuedEdDahab
}
async function getSoussMassa(){  
   const SoussMassa=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[11]/td[1]');return SoussMassa
}
async function getLaayouneSakiaElHamra(){  
   const LaayouneSakiaElHamra=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[13]/td[1]');return LaayouneSakiaElHamra
}
async function getGuelmim(){ 
    const Guelmim=await senddata(url,'/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[1]/table/tbody/tr[12]/td[1]');return Guelmim
}
async function getCasexclus(){
    const exclu=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[3]/p');
console.log(exclu)
    return exclu;
}
async function runCrongoogl(){
    //const uri = "mongodb+srv://kensama:kensama123@cluster0-pbt6g.mongodb.net/test?retryWrites=true&w=majority";
    
    //now here we gonna get the data from the fucntinos i mean scrapping them from the website 
    const [casconfirm,died,cured,casablanca,marakech,Rabat,tanger,Fesmeknes,oriental,beniMellal,DaraaTafilalet,DakhlaOuedEdDahab,SoussMassa,LaayouneSakiaElHamra,Guelmim]= await Promise.all([
        
        getConfirmCases(),
        getDied(),
        getcured(),
        getcasablanca(), 
        getmarakech(),
        getRabat(), 
        gettanger(),
        getFesmeknes(),
        getoriental(),
        getbeniMellal(),
        getDaraaTafilalet(),
        getDakhlaOuedEdDahab(),
        getSoussMassa(),
        getLaayouneSakiaElHamra(),
        getGuelmim(),
    ]); 
    
    
          //console.log("this is    "+exclu)
          // a document instance
          var data = new covidmorocco({ 
            date: Date.now(),
            casExclus: '496023',
            cases: casconfirm,
            died: died,
            cured: cured,
            casablanca: casablanca,
            marakech: marakech,
            Rabat : Rabat,
            tanger: tanger,
            Fesmeknes: Fesmeknes,
            oriental: oriental,
            beniMellal: beniMellal,
            DaraaTafilalet: DaraaTafilalet,
            DakhlaOuedEdDahab: DakhlaOuedEdDahab,
            SoussMassa: SoussMassa,
            LaayouneSakiaElHamra: LaayouneSakiaElHamra,
            Guelmim: Guelmim
            });
       
          // save model to database
          data.save(function (err, covidmorocc) {
            if (err) return console.error(err);
            console.log(" saved to  collection.");
          });
    //});
}

module.exports={
    runCron:runCrongoogl
}