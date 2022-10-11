import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuizzes from '../DisplayQuiz/AllQuizzes';

const ShowQuiz = () => {
    const data = useLoaderData()
    const topicQuizs = data.data.questions;
    return (
      <div>
        {
          topicQuizs.map(topicQuiz=> <AllQuizzes
            key={topicQuiz.id}
            topicQuiz={topicQuiz}
          ></AllQuizzes>)
        }
      </div>
    );
};

export default ShowQuiz;