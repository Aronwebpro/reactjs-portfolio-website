var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');



var db = database(app);
var base = Rebase.createClass(db);



export default base;