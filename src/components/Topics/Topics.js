import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const loadData = useLoaderData();
    const datas = loadData.data;
    console.log(datas);
    return (
        <div>
            <h2>Some topics {datas.length}</h2>
            {
                datas.map(data => <Quiz 
                key={data.id}
                data={data}
                ></Quiz>)
            }
        </div>
    );
};

export default Topics;