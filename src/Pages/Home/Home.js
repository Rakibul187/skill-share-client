import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../Assets/BannerImage/banner2.webp'
import './Home.css'
const Home = () => {
    return (
        <Container>
            <div className='homeContainer'>

                {/* style={{ height: "80vh" }} className='d-flex homeContainer flex-wrap align-items-center justify-content-between ' */}
                <div style={{ width: "45%" }}>
                    <Image style={{ width: "100%" }} src={banner1} alt=""></Image>
                </div>
                <div style={{ width: "45%", textAlign: "start" }}>
                    <h2>When done right, skills development can reduce un- and underemployment, increase productivity, and improve standards of living. Helping people to develop and update their skills makes economic sense..It's important to employers that you are able to shift plans and adapt to new concepts in order to succeed. </h2>
                    <Button variant='outline-primary' style={{ marginTop: '20px' }}><Link className='text-decoration-none text-dark' to="/courses">Visit Our Courses Page</Link></Button>
                </div>
            </div>
        </Container >
    );
};

export default Home;