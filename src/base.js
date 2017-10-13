const Rebase = require('re-base');
const firebase = require('firebase');

const app = firebase.initializeApp({
    apiKey: "AIzaSyDY5tq1jDwkPi9B0zqXLRLZYJKzMKipWwE",
    authDomain: "local-react-c28b1.firebaseapp.com",
    databaseURL: "https://local-react-c28b1.firebaseio.com",
    projectId: "local-react-c28b1",
    storageBucket: "",
    messagingSenderId: "90469628739"
});

const base = Rebase.createClass(app.database());