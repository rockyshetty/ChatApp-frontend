import { useState, useEffect } from "react";
import * as reactbootstrap from 'react-bootstrap';
function Login() {
    const [state, setstate] = useState({
        email: '',
        pwd: '',
    });
    const { email, pwd } = state;
    const handleText = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <reactbootstrap.Container>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">Email</reactbootstrap.FormLabel>
                <reactbootstrap.FormControl
                    type='email'
                    className="col-md-8"
                    value={email}
                    name='email'
                    onChange={e => handleText(e)} />
            </reactbootstrap.Row>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">Password</reactbootstrap.FormLabel>
                <reactbootstrap.FormControl
                    type='password'
                    className="col-md-8"
                    value={pwd}
                    name="pwd"
                    onChange={e => handleText(e)} />
            </reactbootstrap.Row>
            <reactbootstrap.Row className="flex-row-reverse mt-2">
                <reactbootstrap.ButtonGroup>
                    <reactbootstrap.Button variant="danger"  size="sm" className="m-1">Cancel</reactbootstrap.Button>
                    <reactbootstrap.Button variant="primary" size="sm" className="m-1" >Submit</reactbootstrap.Button>
                </reactbootstrap.ButtonGroup>
            </reactbootstrap.Row>
        </reactbootstrap.Container>)
}
export default Login;
