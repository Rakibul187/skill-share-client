import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    console.log(course)
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                        {course.details}
                    </Card.Text>
                    <Button variant="secondary"><Link to={`/courses/${course.category_id}`}>Home</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;