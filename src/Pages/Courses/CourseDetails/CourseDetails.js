import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './CoursesDetails.css'
const CourseDetails = () => {
    const course = useLoaderData()
    return (
        // style={{ width: '18rem' }}
        <Container>
            <Card >
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                    <Button variant="dark"><Link to='/courses'>Back To Courses</Link></Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetails;