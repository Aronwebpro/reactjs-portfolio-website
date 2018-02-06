import React, {Component} from 'react';

const Flash = (props) => {
    let color;
    switch(props.status) {
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
        <div className="flash-wrapper" style={ {textAlign: 'center', padding:' 2px', border:'1px solid', borderColor:color } } >
            <div className="flash shake"  style={ { fontWeight: 'bold', border:'3px solid', borderColor:color } }>
                <p>
                    {props.text}
                </p>
            </div>
        </div>    
    )
};

export default Flash;