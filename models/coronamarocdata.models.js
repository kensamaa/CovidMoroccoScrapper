const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//date,casConfirme,cured,dead,casa,kech,rabat,tanger,mek,oriental
var covidmoroccShema = mongoose.Schema({
  date: { type: Date, required: true },
  casExclus: { type: String, required: true },
  cases: { type: String, required: true },
  died: { type: String, required: true },
  cured: { type: String, required: true },
  casablanca: { type: String, required: true },
  marakech: { type: String, required: true },
  Rabat : { type: String, required: true },
  tanger: { type: String, required: true },
  Fesmeknes: { type: String, required: true },
  oriental: { type: String, required: true },
  beniMellal: { type: String, required: true },
  DaraaTafilalet: { type: String, required: true },
  DakhlaOuedEdDahab: { type: String, required: true },
  SoussMassa: { type: String, required: true },
  LaayouneSakiaElHamra: { type: String, required: true },
  Guelmim: { type: String, required: true }
});

var covidmorocco = mongoose.model('covidmoroccShema', covidmoroccShema, 'CityMoroccoData');

module.exports = covidmorocco;