import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='mb-4 py-3' bg="light" variant="light">
                <Container>
                    <Link className='h4 logo text-danger' to="/">SkillShare</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav className='h6 underLineLink'>
                            <Link className='me-4' to='/'>Home</Link>
                            <Link className='me-4 pointer' to='/courses'>Courses</Link>
                            <Link className='me-4'>FAQ</Link>
                            <Link className='me-4'>Blog</Link>
                            <div >
                                {
                                    user?.uid ?

                                        <>
                                            <span className='me-4'>{user?.displayName}</span>
                                            <button>Log out</button>
                                        </>
                                        :
                                        <>
                                            <Link className='me-4' to='/login'>Login</Link>
                                            <Link className='me-2' to='/register'>Register</Link>
                                        </>
                                }
                            </div >
                            <div>
                                {
                                    user?.photoURL ?
                                        <Image src={user?.photoURL}></Image>
                                        :
                                        <FaUser></FaUser>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;