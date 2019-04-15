import React, {Component} from 'react';


class Flash extends Component {
    render() {
        let color;
        setTimeout(() => { 
            this.flash.style.animation = 'none';
            this.flash.offsetHeight = null;
            this.flash.style.animation = null;

        },100);
        switch(this.props.status) {
            case 'error' :
                color = '#c74141';
                break;
            case 'success' :
                color = '#5773AD';
                break;
            default:
                color = '#cecece';
        }
        return (
            <div className="flash-wrapper shake" style={ {textAlign: 'center', padding:' 2px', border:'1px solid', borderColor:color } }  ref={ (input => this.flash = input )} >
                <div className="flash"  style={ { fontWeight: 'bold', border:'3px solid', borderColor:color } } >
                    <p>
                        {this.props.text}
                    </p>
                </div>
            </div>    
        )
    }
};

export default Flash;