import React from 'react';
import Lottie from 'lottie-react'
import coding from '../coding.json'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    return (
      <div>
        <div>
          <div className="header">
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
              <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                  className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  preserveAspectRatio="none slice"
                >
                  <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                  className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60.png"
                  alt=""
                />
              </div>
              <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Brand new
                  </p>
                  <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    Knowledge is power
                    <br className="hidden md:block" />
                  </h2>
                  <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    “Any fool can write code that a computer can understand.
                    Good programmers write code that humans can understand.”
                    -Martin Fowler.
                  </p>
                  <div className="flex items-center">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-blue-700 ml-24"
                    >
                      Get started
                    </a>
                    <a
                      href="/"
                      aria-label=""
                      className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      Learn more
                    </a>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-700 mr-10 mt-5 topic">
                      <i>VISIT TOPICS FOR MORE <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </i>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lottie">
            <Lottie animationData={coding} loop={true}></Lottie>
          </div>
        </div>
      </div>
    );
};

export default Home;