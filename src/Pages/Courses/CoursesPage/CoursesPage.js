import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import CoursesSideNav from '../CoursesSideNav/CoursesSideNav';

const CoursesPage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3' className='bg-secondary'>
                        <CoursesSideNav></CoursesSideNav>
                    </Col>
                    <Col lg='9' className='bg-primary'>
                        <Courses></Courses>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesPage;