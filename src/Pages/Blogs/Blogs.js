import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {

    // style={{ width: "500px", marginBottom: '150px' }} className=' bg-light p-5'

    return (
        // d-flex justify-content-center

        <div className='d-flex justify-content-center bg-light'>
            <div style={{ width: '60%', height: "100vh", paddingLeft: "50px" }} className='bg-light  pt-5'>
                <Container className=' ms-5 '>
                    <h2 className='mb-4 text-info'>Some Important Question & Answer</h2>
                    <div className='bg-light' style={{ maxWidth: "1000px", marginBottom: '15px', borderLeft: '5px solid grey' }}>
                        <div className='ps-3'>
                            <h4> what is cors?</h4>
                            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                        </div>
                    </div>
                    <div className='bg-light' style={{ maxWidth: "800px", marginBottom: '15px', borderLeft: '5px solid grey' }}>
                        <div className='ps-3'>
                            <h4> Why are you using firebase? What other options do you have to implement authentication?</h4>
                            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                        </div>
                    </div>
                    <div className='bg-light' style={{ maxWidth: "800px", marginBottom: '15px', borderLeft: '5px solid grey' }}>
                        <div className='ps-3'>
                            <h4> How does the private route work?</h4>
                            <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                        </div>
                    </div>
                    <div className='bg-light' style={{ maxWidth: "800px", marginBottom: '15px', borderLeft: '5px solid grey' }}>
                        <div className='ps-3'>
                            <h4>What is Node? How does Node work?</h4>
                            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Blogs;