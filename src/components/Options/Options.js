import React from 'react';
import './Options.css'

const Options = ({option}) => {
    console.log(option);
    return (
        <div className='optn'>
            <p>{option}</p>
        </div>
    );
};

export default Options;