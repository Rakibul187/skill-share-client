import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import CoursesSideNav from '../CoursesSideNav/CoursesSideNav';

const CoursesPage = () => {
    const courses = useLoaderData()
    // console.log(courses)
    return (
        <div>
            <Container>
                <Row className='mt-3'>
                    <Col lg='3' className='mt-5' >
                        <CoursesSideNav></CoursesSideNav>
                    </Col>
                    <Col lg='9'>
                        <Row>
                            <Col style={{}} className='d-flex flex-wrap '>
                                {
                                    courses.map(course => <Courses key={course._id} course={course}></Courses>)
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesPage;