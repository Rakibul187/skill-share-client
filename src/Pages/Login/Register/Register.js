import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .then(error => console.error(error))
    }
    return (
        <Container className='w-50'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter Your Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-danger ms-3">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;