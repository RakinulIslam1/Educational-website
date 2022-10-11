import React from 'react';

const AllQuizzes = ({ topicQuiz }) => {
    console.log(topicQuiz);
const { question, options } = topicQuiz;
  return (
    <div>
      <h2>Question: {question}</h2>
      <h2>options: {options}</h2>
    </div>
  );
};

export default AllQuizzes;