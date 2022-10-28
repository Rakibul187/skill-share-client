import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const [error, setError] = useState('')
    const { signIn, providerLogin, githubSignin } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

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
                navigate(from, { replace: true })
            })
            .catch(error =>
                console.error(error)

            )
    }

    const handleGithubSignIn = () => {
        githubSignin(gitProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='pt-5'>
            <Container style={{ width: "500px", marginBottom: '150px' }} className=' p-5'>
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
                    <span className='d-block'>If You didn't Register Before? Please <Link to='/register'>Register</Link></span>
                    <Button variant="primary" className='w-100  mt-3 mb-3' type="submit">
                        Login
                    </Button>
                    <Form.Text className="text-danger ms-3">
                        {error}
                    </Form.Text>
                    <p className='w-50 ms-5 ps-5 text-center'>or</p>
                    <Button onClick={handleGoogleSignIn} style={{ width: "190px", marginRight: "12px" }} className='mb-2' variant='outline-primary'><FaGoogle /> SignIn With Google</Button>
                    <Button onClick={handleGithubSignIn} style={{ width: "190px" }} className='mb-2' variant='outline-dark'><FaGithub /> SignIn With GitHub</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;



