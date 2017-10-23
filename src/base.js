<<<<<<< HEAD
import Rebase from 're-base';

const base = Rebase.createClass({
	apiKey: 'AIzaSyDY5tq1jDwkPi9B0zqXLRLZYJKzMKipWwE',
	authDomain: 'local-react-c28b1.firebaseapp.com',
	databaseURL: 'https://local-react-c28b1.firebaseio.com'
});

export default base;
=======
var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');



var db = database(app);
var base = Rebase.createClass(db);



export default base;
>>>>>>> fd446c8339e5dfee35c5cefddee2d31d6c4e28ce
