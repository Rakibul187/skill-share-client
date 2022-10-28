import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import './CoursesDetails.css'
import { FaDownload } from 'react-icons/fa';
const CourseDetails = () => {
    const course = useLoaderData()

    const { fee, duration, start, img, details, name, title } = course;
    // console.log(course)

    return (
        <Container style={{ width: "100%", height: "100vh" }} className='d-flex align-items-center justify-content-center mb-5'>
            <Card className='bg-light shadow' style={{ padding: '8px', maxWidth: '750px', margin: '20px 0 auto' }}>
                <p className='position-relative'> <p className='w-100 d-flex justify-content-center'> <Card.Img className='w-75 h-75 mb-0 rounded-2' variant="top" src={img} /></p>< FaDownload className='position-absolute cursor-pointer dounloadButton top-0 end-0'></FaDownload></p>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <h6><span className='text-primary'>Next Batch Start: </span> {start}</h6>
                            <h6><span className='text-primary'>{name} Course Fee:</span> ${fee}</h6>
                            <h6><span className='text-primary'>Course Duration:</span> {duration}</h6>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end mt-2'>
                        <Button className='detailsButton me-5' variant="outline-dark"><Link to='/courses'>Back To Courses</Link></Button>
                        <Button className='detailsButton' variant="outline-info"><Link to={`/checkout/${course.category_id}`}>Get PreMium </Link></Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetails;