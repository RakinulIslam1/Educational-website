import React from 'react';
import './Options.css'
import Swal from "sweetalert2";

const Options = ({ option, correctAnswer }) => {
    
  const answer = () => {
    const ans = correctAnswer;
    if(ans === correctAnswer){
        Swal.fire("Good job!", "You clicked the button!", "success");
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