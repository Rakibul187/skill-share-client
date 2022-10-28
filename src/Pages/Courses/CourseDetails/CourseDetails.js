import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './CoursesDetails.css'
const CourseDetails = () => {
    const course = useLoaderData()

    const { fee, duration, start, img, details, name, title } = course;
    console.log(course)

    return (
        // style={{ width: '18rem' }}
        <Container className='items-center mb-5'>
            <Card style={{ padding: '8px', width: '500px', margin: '20px 0 auto' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div>
                        <div className=''>
                            <h6><span className='text-primary'>Next Batch Start: </span> {start}</h6>
                            <h6><span className='text-primary'>{name} Course Fee:</span> ${fee}</h6>
                            <h6><span className='text-primary'>Course Duration:</span> {duration}</h6>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around mt-4'>
                        <Button className='detailsButton' variant="outline-dark"><Link to='/courses'>Back To Courses</Link></Button>
                        <Button className='detailsButton' variant="outline-primary"><Link to='/checkout'>Get PreMium </Link></Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetails;