import React from 'react';
import { useLoaderData } from 'react-router-dom';


const QA = () => {
    const quizs = useLoaderData() 
    console.log(quizs);   
    
    return (
        <div>
            <h2>question annwer</h2>
        </div>
    );
};

export default QA;