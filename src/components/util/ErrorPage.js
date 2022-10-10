import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ErrorPage = () => {
    return (
      <div className="text-6xl mt-52 font-bold">
        <h1 className='mb-5'>Opps! Not found 404! </h1>
        <FontAwesomeIcon icon={faSadTear}></FontAwesomeIcon>
      </div>
    );
};

export default ErrorPage;