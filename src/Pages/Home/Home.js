import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../Assets/BannerImage/banner2.webp'
const Home = () => {
    return (
        <Container>
            <div style={{ height: "80vh" }} className='d-flex flex-wrap align-items-center sm:flex-reverse justify-content-between '>
                <div style={{ width: "45%" }}>
                    <Image style={{ width: "100%" }} src={banner1} alt=""></Image>
                </div>
                <div style={{ width: "45%", textAlign: "start" }}>
                    <h2>When done right, skills development can reduce un- and underemployment, increase productivity, and improve standards of living. Helping people to develop and update their skills makes economic sense..It's important to employers that you are able to shift plans and adapt to new concepts in order to succeed. Mastering these essential skills can lead to more job offers and, potentially, higher salaries.</h2>
                    <Button variant='outline-primary' style={{ marginTop: '20px' }}><Link className='text-decoration-none text-dark' to="/courses">Visit Our Courses Page</Link></Button>
                </div>
            </div>
        </Container >
    );
};

export default Home;