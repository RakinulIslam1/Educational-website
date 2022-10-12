import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
      <div>
        <h2 className="text-3xl font-bold underline m-3 ">
          ❝ Question & Answer Blog ❞
        </h2>
        <div className="res">
          <div className="text text-2xl font-bold  bg-gray-900 text-white">
            <h2>What is the purpose of react router?</h2>
            <div>
              <p className="p-tag text-xl font-light bg-gray-700 text-white">
                <span className="font-bold">Answer:</span> ReactJS Router is
                mainly used for developing Single Page Web Applications. React
                Router is used to define multiple routes in the application.
                When a user types a specific URL into the browser, and if this
                URL path matches any 'route' inside the router file, the user
                will be redirected to that particular route.
              </p>
            </div>
          </div>
          <div className="text text-2xl font-bold  bg-gray-900 text-white">
            <h2>How does context api work?</h2>
            <div>
              <p className="p-tag text-xl font-light bg-gray-700 text-white">
                <span className="font-bold">Answer:</span> The React Context API
                is a way for a React app to effectively produce global variables
                that can be passed around. This is the alternative to "prop
                drilling" or moving props from grandparent to child to parent,
                and so on. Context is also touted as an easier, lighter approach
                to state management using Redux.
              </p>
            </div>
          </div>
          <div className="text text-2xl font-bold  bg-gray-900 text-white">
            <h2>What is useref hook in react?</h2>
            <div>
              <p className="p-tag text-xl font-light bg-gray-700 text-white">
                <span className="font-bold">Answer:</span> The useRef Hook
                allows you to persist values between renders. It can be used to
                store a mutable value that does not cause a re-render when
                updated. It can be used to access a DOM element directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;