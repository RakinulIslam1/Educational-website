import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Layout/Root';
import ErrorPage from './components/util/ErrorPage';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistic from './components/Statistic/Statistic';
import Blog from './components/Blog/Blog';
import QA from './components/QA/QA.JS';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "topics",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "statistic",
          element: <Statistic></Statistic>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "/quiz/:codeId",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.codeId}`
            );
          },
          element: <QA></QA>,
        }
      ],
    },
    // Error part
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    },
  ]);
  return (
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
