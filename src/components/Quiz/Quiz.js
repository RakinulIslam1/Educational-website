import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({data}) => {
    const {id, name, logo } = data;

    const navigate = useNavigate();
    const quizClick = () =>{
        navigate(`/quiz/${id}`);
        
    }

    return (
      <div className="quiz">
        <img src={logo} alt="" />
        <div className="card-details">
          <h1 className="text-xl font-bold">{name}</h1>
          <Link to={`/quiz/${id}`}>
            <button
              onClick={quizClick}
              className="bg-blue-700 text-white p-2 rounded-md font-semibold"
            >
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Quiz;