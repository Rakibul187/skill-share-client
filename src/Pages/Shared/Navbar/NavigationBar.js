import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
import { FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='py-4' bg="dark" variant="light">
            <Container>
                <Link className='h4 logo text-danger' to="/">SkillShare</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className='h6 underLineLink'>
                        <Link className='me-4' to='/'>Home</Link>
                        <Link className='me-4 pointer' to='/courses'>Courses</Link>
                        <Link className='me-4' to="/faq">FAQ</Link>
                        <Link className='me-4'>Blog</Link>
                        <div >
                            {
                                user?.uid ?

                                    <Button className='mb-4 me2' variant="outline-info" onClick={handleLogOut}>Log out</Button>

                                    :
                                    <>
                                        <Link className='me-4' to='/login'>Login</Link>
                                        <Link className='me-2' to='/register'>Register</Link>
                                    </>
                            }
                        </div >
                        <div>{

                            user?.photoURL ?
                                <Image roundedCircle className='ms-2' style={{ height: '30px' }} src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>
                        }
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;