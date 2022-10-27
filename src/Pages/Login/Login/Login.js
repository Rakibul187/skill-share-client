import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext)

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
                form.reset()
            })
            .catch(error => console.error(error))
    }
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <Container className='w-50'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder=" Enter Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger ms-3">
                    We'll never share your email with anyone else.
                </Form.Text>
                <hr className='w-25 text-align-center'></hr>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle /> SignIn With Google</Button>
            </Form>
        </Container>
    );
};

export default Login;


