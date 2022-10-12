import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import PlayQuiz from "../components/PlayQuiz/PlayQuiz";
import Statitic from "../components/Statitics/Statitic";
import Main from "../Layout/Main";



export const router = createBrowserRouter([

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
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statitic></Statitic>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }

]);