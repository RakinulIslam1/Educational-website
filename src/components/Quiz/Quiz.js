import React from 'react';
import './Quiz.css';

const Quiz = ({data , quizClick}) => {
    const { name, logo } = data;
    return (
      <div className="quiz">
        <img src={logo} alt="" />
        <div className="card-details">
          <h1 className="text-xl font-bold">{name}</h1>
          <button
            onClick={quizClick}
            className="bg-blue-700 text-white p-2 rounded-md font-semibold"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
};

export default Quiz;