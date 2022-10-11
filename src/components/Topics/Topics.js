import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css';

const Topics = () => {
    const loadData = useLoaderData();
    const datas = loadData.data;
    console.log(datas);
    return (
      <div>
        <h2 className="text-4xl font-semibold mt-5">
          ❝ WE HAVE {datas.length} TOPICS HERE ❞
        </h2>
        <div className="card">
          {datas.map((data) => (
            <Quiz key={data.id} data={data}></Quiz>
          ))}
        </div>
      </div>
    );
};

export default Topics;