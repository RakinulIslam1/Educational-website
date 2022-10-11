import React from 'react';
import Options from '../Options/Options';
import './AllQuizzes.css'
const AllQuizzes = ({ topicQuiz }) => {
    console.log(topicQuiz);
const { question, options } = topicQuiz;
  return (
    <div>
      <div className="q-card text-xl">
        <h2 className="question">Question: {question}</h2>
        <div className='q-list'>
          {
          options.map(option => <Options
          key={option.id}
          option={option}
          ></Options>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllQuizzes;