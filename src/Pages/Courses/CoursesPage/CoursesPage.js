import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import CoursesSideNav from '../CoursesSideNav/CoursesSideNav';

const CoursesPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='lg:col-3 bg-secondary'>
                        <CoursesSideNav></CoursesSideNav>
                    </Col>
                    <Col className='lg:col-9 bg-primary'>
                        <Courses></Courses>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesPage;