const puppetter=require('puppeteer')
//var mongoose = require('mongoose');
var covidmorocco=require('./models/coronamarocdata.models');


async function senddata(url,xpath){
    //cause some times the website might not work and the scrapting wont work so we do try catch 
    
        const browser =await puppetter.launch({headless : true});
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0);
        await page.goto(url,{waitUntil:'networkidle2'})
        const [el1] = await page.$x(xpath);
        const txtt=await el1.getProperty('textContent');
        const data= await txtt.jsonValue();
        browser.close()
   
        
    return data;
}
function getDate(){
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    let todayDate=date+"/"+month+"/"+year+",";//concatenate
    return todayDate
}
 async function getConfirmCases(){
     let casconfirm=""
     casconfirm=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'//*[@id="WebPartWPQ1"]/div[1]/div[1]/table/tbody/tr[2]/td[2]/p');
    return casconfirm;
}
 async function getDied(){
    const died=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[1]/p[1]/span[2]');

    return died;
}
 async function getcured(){
    const cured =await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[1]/p[1]/span[1]');
   
    return cured
}
 async function getdataInstagram(name){
    const url="https://www.instagram.com/"+name;
    const browser =await puppetter.launch();
    const page = await browser.newPage();
    await page.goto(url)
    //abonne
    const [el1] = await page.$x('//*[@id="react-root"]/section/main/div/header/section/ul/li[2]/a/span');
    const txtt=await el1.getProperty('textContent');
    const abonne= await txtt.jsonValue();
    //publication
    const [el2] = await page.$x('//*[@id="react-root"]/section/main/div/header/section/ul/li[1]/a/span');
    const txttt=await el2.getProperty('textContent');
    const publication= await txttt.jsonValue();
    //image
    const [el3] = await page.$x('//*[@id="react-root"]/section/main/div/header/div/div/div/button/img');
    const txttut=await el3.getProperty('src');
    const image= await txttut.jsonValue();
    browser.close()

    console.log("name :"+name);
    console.log("abonne :"+abonne);
    console.log("publication :"+publication);
    console.log("image link :"+image);

}
 async function getcasablanca(){ 
       const casablanca=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[3]/td/h2');
       return casablanca
}
 async function getmarakech(){
        const marakech=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[9]/td/h2');
return marakech
}
 async function getRabat(){  
      const Rabat=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[11]/td/h2');
return Rabat
}
 async function gettanger(){ 
       const tanger=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[13]/td/h2');
return tanger
}
 async function getFesmeknes(){ 
      const Fesmeknes=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[6]/td/h2');
return Fesmeknes
}
async function getoriental(){  
      const oriental=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[10]/td/h2');
return oriental
}
async function getbeniMellal(){ 
       const beniMellal=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[2]/td/h2');
return beniMellal
}
async function getDaraaTafilalet(){ 
       const DaraaTafilalet=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[4]/td/h2');
return DaraaTafilalet
}
 async function getDakhlaOuedEdDahab(){ 
       const DakhlaOuedEdDahab=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[5]/td/h2');
return DakhlaOuedEdDahab
}
 async function getSoussMassa(){  
      const SoussMassa=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[12]/td/h2');
return SoussMassa
}
 async function getLaayouneSakiaElHamra(){  
      const LaayouneSakiaElHamra=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[8]/td/h2');
return LaayouneSakiaElHamra
}
async function getGuelmim(){ 
       const Guelmim=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[7]/td/h2');
return Guelmim
}
async function getCasexclus(){
    const exclu=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[3]/p');
return exclu;
}




async function test(){
    
    var t0 =Date.now();
    const cured =await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[1]/p[1]/span[1]');
    const casconfirm=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'//*[@id="WebPartWPQ1"]/div[1]/div[1]/table/tbody/tr[2]/td[2]/p');
    const died=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[1]/p[1]/span[2]');
    const casablanca=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[3]/td/h2');
    const marakech=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[9]/td/h2');
    const Rabat=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[11]/td/h2');
    const tanger=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[13]/td/h2');
    const Fesmeknes=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[6]/td/h2');
    const oriental=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[10]/td/h2');
    const beniMellal=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[2]/td/h2');
    const DaraaTafilalet=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[4]/td/h2');
    const DakhlaOuedEdDahab=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[5]/td/h2');
    const SoussMassa=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[12]/td/h2');
    const LaayouneSakiaElHamra=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[8]/td/h2');
    const Guelmim=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[7]/td/h2');
    //const NbrPplCasa=await senddata('https://www.worldometers.info/world-population/morocco-population/','/html/body/div[3]/div[3]/div/div/div[14]/table/tbody/tr[1]/td[3]');
    
    var t1 = Date.now();
    
    console.log(cured,died,casconfirm,casablanca,marakech,Rabat,tanger,Guelmim,Fesmeknes,oriental,beniMellal,DaraaTafilalet,DakhlaOuedEdDahab,SoussMassa,LaayouneSakiaElHamra)
    console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate');

}


async function scrapperdata(){
    const browser =await puppetter.launch();
    const page = await browser.newPage();
    let url="http://www.covidmaroc.ma/pages/Accueil.aspx"
    await page.goto(url)
    //cas confirme
    const [el] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[2]/p');
    const txt=await el.getProperty('textContent');
    const casConfirme= await txt.jsonValue();
    //cured
    const [el1] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[1]/p[1]/span[1]');
    const txtt=await el1.getProperty('textContent');
    const cured= await txtt.jsonValue();
    //dead
    const [el2] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[1]/p[1]/span[2]');
    const txttt=await el2.getProperty('textContent');
    const dead= await txttt.jsonValue();
    //casa stat
    const [el3] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[3]/td/h2');
    const txtttc=await el3.getProperty('textContent');
    const casa= await txtttc.jsonValue();
    //marakech
    const [el4] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[9]/td/h2');
    const txtttk=await el4.getProperty('textContent');
    const kech= await txtttk.jsonValue();
    //rabat
    const [el5] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[11]/td/h2');
    const txtttr=await el5.getProperty('textContent');
    const rabat= await txtttr.jsonValue();
    //tanger
    const [el6] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[13]/td/h2');
    const txtttt=await el6.getProperty('textContent');
    const tanger= await txtttt.jsonValue();
    //fes mek
    const [el7] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[6]/td/h2');
    const txtttm=await el7.getProperty('textContent');
    const mek= await txtttm.jsonValue();
    //oriental
    const [el8] = await page.$x('/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[10]/td/h2');
    const txttto=await el8.getProperty('textContent');
    const oriental= await txttto.jsonValue();



    console.log({casConfirme,cured,dead,casa,kech,rabat,tanger,mek,oriental});
    var values=getDate()+casConfirme+","+cured+","+dead+","+casa+","+kech+","+rabat+","+tanger+","+mek+","+oriental+"\n"
    
    browser.close()
    return {values}
}


async function quick(){
    //const casconfirm=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]/table/tbody/tr[2]/td[2]/p');
    const Guelmim=await senddata("http://www.covidmaroc.ma/pages/Accueil.aspx",'/html/body/form/div[4]/div[3]/div[1]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/div[2]/div[1]/div/div/div/div/div[1]/table/tbody[1]/tr[7]/td/h2');

    console.log(Guelmim)
}
          //var cured=getcured(); 
          //console.log(cured)
          /*var casconfirm=getConfirmCases;
          var died=getDied();
          var casablanca=getcasablanca();
          var marakech=getmarakech();
          const Rabat=getRabat()
          var tanger=gettanger()
          var Fesmeknes=getFesmeknes()
          var oriental=getoriental()
          var beniMellal=getbeniMellal()
          var DaraaTafilalet=getDaraaTafilalet()
          var DakhlaOuedEdDahab=getDakhlaOuedEdDahab()
          var SoussMassa=getSoussMassa()
          var LaayouneSakiaElHamra=getLaayouneSakiaElHamra()
          var Guelmim=getGuelmim()/*/
          //var exclu=getCasexclus()

async function runCron(){
    //const uri = "mongodb+srv://kensama:kensama123@cluster0-pbt6g.mongodb.net/test?retryWrites=true&w=majority";
    
    //now here we gonna get the data from the fucntinos i mean scrapping them from the website 
    const [exclu,casconfirm,died,cured,casablanca,marakech,Rabat,tanger,Fesmeknes,oriental,beniMellal,DaraaTafilalet,DakhlaOuedEdDahab,SoussMassa,LaayouneSakiaElHamra,Guelmim]= await Promise.all([
        getCasexclus(),
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
            casExclus: exclu,
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
//runCron()

//module.exports= getConfirmCases;
module.exports={
    runCron:runCron,
    getDied:getDied,
    getConfirmCases:getConfirmCases,
    getcured:getcured,
    getcasablanca,
    getRabat:getRabat,
    gettanger:gettanger,
    getFesmeknes:getFesmeknes,
    getoriental:getoriental,
    getbeniMellal:getbeniMellal,
    getDaraaTafilalet:getDaraaTafilalet,
    getDakhlaOuedEdDahab:getDakhlaOuedEdDahab,
    getSoussMassa:getSoussMassa,
    getLaayouneSakiaElHamra:getLaayouneSakiaElHamra,
    getGuelmim:getGuelmim,
    getDate:getDate,
    getmarakech:getmarakech,
    getCasexclus:getCasexclus
} ; 
//module.exports= getcured;
