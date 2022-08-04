import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [id, setid] = useState('');

    let history = useNavigate()

    var index = array.map(function (e) { return e.id; }).indexOf(id);

    const handelSubmit = (e) => {
        e.preventDefault();

        let a = array[index]

        a.Email = email
        a.Password = password

        history('/')
    }


    useEffect(() => {
        setemail(localStorage.getItem('Email'))
        setpassword(localStorage.getItem('Password'))
        setid(localStorage.getItem('id'))
    }, [])

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>

                {/* setting a name from the input textfiled */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={email}
                        onChange={e => setemail(e.target.value)}
                        type="text" placeholder="Enter Email" />
                </Form.Group>

                {/* setting a age from the input textfiled */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control value={password}
                        onChange={e => setpassword(e.target.value)}
                        type="text" placeholder="Password" />
                </Form.Group>

                {/* Hadinling an onclick event running an edit logic */}
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary" type="submit" size="lg">
                    Update
                </Button>

                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="warning" size="lg">Home</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Edit;
