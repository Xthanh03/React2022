import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let history = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();

        const ids = uuid()
        let uni = ids.slice(0, 8)

        let a = email, b = password
        array.push({ id: uni, Email: a, Password: b })

        history('/')

    }

    return (
        <div >
            <h1>ADD ACCOUNT</h1>
            <Form className="d-grid gap-2" style={{ margin: '5rem' }}>{ }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={e => setemail(e.target.value)}
                        type="text"
                        placeholder="Enter Email" required />
                </Form.Group>


                {/* Fetching a value from input textfirld in
     a setage using usestate*/}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={e => setpassword(e.target.value)}
                        type="password"
                        placeholder="Password" required />
                </Form.Group>

                {/* handing a onclick event in button for
     firing a function */}
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary" type="submit">
                    Submit
                </Button>

                {/* Redirecting back to home page */}
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>

            </Form>
        </div>
    )
}

export default Create;