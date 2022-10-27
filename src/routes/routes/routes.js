import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import CoursesPage from "../../Pages/Courses/CoursesPage/CoursesPage";
import CoursesSideNav from "../../Pages/Courses/CoursesSideNav/CoursesSideNav";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Footer from "../../Pages/Shared/Footer/Footer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/', element:
            <Main></Main>, children: ([
                {
                    path: '/', element: <Home></Home>
                },
                {
                    path: '/courses',
                    loader: () => fetch('http://localhost:5000/courses'),
                    element: <CoursesPage></CoursesPage>
                },
                {
                    path: '/coursesnav/:id', element: <CoursesSideNav></CoursesSideNav>
                },
                {
                    path: '/footer', element: <Footer></Footer>
                },
                {
                    path: '/courses/:id',
                    loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                    element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
                },
                {
                    path: '/login', element: <Login></Login>
                },
                {
                    path: '/register', element: <Register></Register>
                }
            ])
    },
    {
        path: '*',
        element: <h1>This is error page !!</h1>
    }
])





