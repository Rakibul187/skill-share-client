import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const { signIn, providerLogin } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error =>
                console.error(error)

            )
    }

    return (
        <div className='bg-light pt-5'>
            <Container style={{ width: "500px" }} className=' bg-light p-5'>
                <h3 className='text-primary pb-2'>Please Login Here</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder=" Enter Password" required />
                    </Form.Group>
                    <span className='d-block'>If You Dont Register Before? Please <Link to='/register'>Register</Link></span>
                    <Button variant="primary" className='w-25 mt-2' type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-danger ms-3">
                        {error}
                    </Form.Text>
                    <p className='w-50 ms-5 ps-5'>< hr /></p>
                    <Button onClick={handleGoogleSignIn} className='mb-2 w-100' variant='outline-primary'><FaGoogle /> SignIn With Google</Button>
                    <Button className='mb-2 w-100' variant='outline-dark'><FaGithub /> SignIn With Google</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;



