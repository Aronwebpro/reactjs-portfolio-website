//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Styles
import './css/helpers.css';
import './css/style.css';

//Template parts
import Header from './components/template/header/Header.jsx';
import Footer from './components/template/footer/Footer.jsx';

//Components
import Home from './components/pages/home/Home.jsx';
import NotFound from './components/notfound.jsx';
import Service from './components/Service.jsx';
import Register from './components/Register.jsx';

function isLoggedIn() {
    axios
        .post('/islogin', {})
        .then(res => {
            console.log(res);
            return true;
        })
        .catch(err => {
            // let msg;
            // switch(err.response.status) {
            // 	case 401 :
            // 	msg = 'Username or Password incorrect!';
            // 	break;
            // 	case 403 :
            // 	msg = err.response.data;
            // 	break;
            // 	default :
            // 	msg = 'Login failed!';
            // }
            console.log(err.response);
            return false;
        });
}

const Root = () => {
    return (
        <BrowserRouter>
            <div className="body">
                <Header isLoggedIn={isLoggedIn}/>
                <div className="content">
                    <Switch>
                        <Route exactly pattern="/" component={Home}/>
                        <Route exactly pattern="/service" component={Service}/>
                        <Route exactly pattern="/register" component={Register}/>
                        <Route exactly pattern="/not-found" component={NotFound}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

//Render the App
ReactDOM.render(<Root/>, document.getElementById('page'));

//Initiate Service worker
//registerServiceWorker();
