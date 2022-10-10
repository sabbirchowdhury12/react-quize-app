
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import PlayQuiz from './components/PlayQuiz/PlayQuiz';
import Main from './Layout/Main';


const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,

    children: [
      {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: 'quiz/:quizId',
        loader: async ({ params }) => {
          return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        },
        element: <PlayQuiz></PlayQuiz>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }

]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
