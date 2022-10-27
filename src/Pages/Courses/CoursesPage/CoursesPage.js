import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import CoursesSideNav from '../CoursesSideNav/CoursesSideNav';

const CoursesPage = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3' >
                        <CoursesSideNav></CoursesSideNav>
                    </Col>
                    <Col lg='9'>
                        <Row>
                            <Col lg='flex'>
                                {
                                    courses.map(course => <Courses key={course._id} course={course}></Courses>)
                                }
                            </Col>
                        </Row>
                        {/* <Courses key={courses.id} courses={courses}></Courses> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesPage;