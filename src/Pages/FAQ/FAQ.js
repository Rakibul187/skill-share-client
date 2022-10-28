import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const FAQ = () => {
    return (
        <div>
            <Container style={{ maxWidth: "600px", marginBottom: '350px' }} className="mt-5 pt-3">
                <h3 className='text-primary'>Your Simple FAQ & Answer</h3>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >How much the courses purchase Fee ?</Accordion.Header>
                        <Accordion.Body>
                            Course Price Depend on the Course Which courses get you want to premium access on that. For know the Price of course , visit our courses page !
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header >Do you have any free courses ?</Accordion.Header>
                        <Accordion.Body>
                            Sorry, we dont have any free courses right now.
                            You can get premium access with very reasonable prices!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header >How Much Duration of each course ?</Accordion.Header>
                        <Accordion.Body>
                            Depend on the courses, which courses you want to buy on that. To know details please visit our courses page.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header >Is there have any certification systm after Complete the course?</Accordion.Header>
                        <Accordion.Body>
                            Yes, ofcourse . we have the cerficate providing system which student complete the course on time after every requirments.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header >What is your pament system?</Accordion.Header>
                        <Accordion.Body>
                            We have maximum payment system. you can pay by visa, master card, nagad, bkash, dauck Bangla etc
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default FAQ;