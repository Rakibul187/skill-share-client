import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses/Courses";
import CoursesPage from "../../Pages/Courses/CoursesPage/CoursesPage";
import CoursesSideNav from "../../Pages/Courses/CoursesSideNav/CoursesSideNav";
import Home from "../../Pages/Home/Home";
import Footer from "../../Pages/Shared/Footer/Footer";

export const routes = createBrowserRouter([
    {
        path: '/', element:
            <Main></Main>, children: ([
                {
                    path: '/', element: <Home></Home>
                },
                {
                    path: '/CoursesPage', element: <CoursesPage></CoursesPage>
                },
                {
                    path: '/coursesSideNav', element: <CoursesSideNav></CoursesSideNav>
                },
                {
                    path: '/courses', element: <Courses></Courses>
                },
                {
                    path: '/footer', element: <Footer></Footer>
                },
            ])
    }
])