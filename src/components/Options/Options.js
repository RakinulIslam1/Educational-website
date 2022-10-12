import React from 'react';
import './Options.css'
import Swal from "sweetalert2";



const Options = ({ option, correctAnswer, id }) => {
  // console.log(option);
  const ans = correctAnswer;
  const wrg = id
  const answer = (correctAnswer) => {
    
    
    if (ans === correctAnswer || wrg === id) {
      Swal.fire("Good job!", "Your Answer is correct!", "success");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  
  
  return (
    <div className="optn  bg-gray-700">
      <p onClick={answer} className="text-1xl font-semibold ">
        {option}
      </p>
    </div>
  );
};

export default Options;