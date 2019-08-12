process.env.PORT =  process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;
// if( process.env.NODE_ENV === 'dev') {
//   urlDB = 'mongodb://localhost:27017/cafe';
// } else {
  urlDB = 'mongodb+srv://pigmento:KiSXLS8HkQ2M8O2G@cluster0-3pmnb.mongodb.net/cafe'
// }

process.env.URLDB = urlDB;