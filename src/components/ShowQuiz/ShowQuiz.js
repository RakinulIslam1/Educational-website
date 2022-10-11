import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowQuiz = () => {
    const topicQuiz = useLoaderData()
    console.log(topicQuiz.data.questions);
    return (
      <div>
        <h1>ShowQuiz</h1>
      </div>
    );
};

export default ShowQuiz;