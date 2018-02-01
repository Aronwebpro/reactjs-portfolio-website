import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import RegisterContent from './contents/register_content';


class Register extends Component {
    render() {
        return (
            <div className="body">
                <Header />
                <RegisterContent />
                <Footer />
            </div>
        )
    }
}


export default Register;