import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    // console.log(course)
    return (
        <div>
            <Card style={{ width: '400px', margin: '25px 40px 15px', padding: '7px' }}>
                <Card.Img variant="top" style={{ width: "100%", height: "200px" }} src={course.img} />
                <Card.Body>
                    <Card.Title>{course.title.length > 60 ? course.title.slice(0, 60) : course.title}</Card.Title>
                    <Card.Text>
                        {course.details.length > 200 ? course.details.slice(0, 200) : course.details}
                    </Card.Text>
                    <Button className='detailsButton' variant="outline-info"><Link to={`/courses/${course.category_id}`}>Details</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Courses;