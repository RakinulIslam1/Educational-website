import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from '../Options/Options';
import './AllQuizzes.css'

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const AllQuizzes = ({ topicQuiz }) => {
    console.log(topicQuiz);
const { question, options, correctAnswer } = topicQuiz;
const icon = () =>{

toast.success( correctAnswer, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
});
}
  return (
    <div>
      <div className="q-card text-xl bg-gray-900 text-white">
        <h2 className="question text-2xl font-bold">
          {question}?{" "}
          <span className='text-xl font-light'>
            (click here to see the answer{" "}
            <FontAwesomeIcon
              onClick={icon}
              className="icon"
              icon={faEye}
            ></FontAwesomeIcon>
            )
          </span>
        </h2>

        <div className="q-list">
          {options.map((option) => (
            <Options
              key={option.id}
              option={option}
              correctAnswer={correctAnswer}
            ></Options>
          ))}
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default AllQuizzes;