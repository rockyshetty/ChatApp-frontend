import { useState, useEffect } from "react";
import * as reactbootstrap from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Select from 'react-select';
const  SignUp=() =>{
    const [state, setstate] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        pwd: '',
        gender: '',
        genderOption: [
            { value: 'M', label: 'Male' },
            { value: 'F', label: 'FeMale' },
        ]
    })
    const { name, email, phone, dob, pwd, gender, genderOption } = state;
    const handleGender = (e) => {
        setstate({
            ...state,
            gender: e
        })
    }
    const handleName = (e) => {
        setstate({
            ...state,
            name: e.target.value
        })
    }
    const handleEmail = (e) => {
        setstate({
            ...state,
            email: e.target.value
        })
    }
    const handlePhone = (e) => {
        setstate({
            ...state,
            phone: e.target.value
        })
    }
    const handleDate = (e) => {
        setstate({
            ...state,
            dob: e
        })
    }
    const handlePwd = (e) => {
        setstate({
            ...state,
            pwd: e.target.value
        })
    }
    return (
        <reactbootstrap.Container>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">Name</reactbootstrap.FormLabel>
                <reactbootstrap.FormControl
                    type='text'
                    className="col-md-8"
                    value={name}
                    onChange={e => handleName(e)} />
            </reactbootstrap.Row>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">Email</reactbootstrap.FormLabel>
                <reactbootstrap.FormControl
                    type='text'
                    className="col-md-8"
                    value={email}
                    onChange={e => handleEmail(e)} />
            </reactbootstrap.Row>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">Phone</reactbootstrap.FormLabel>
                <reactbootstrap.FormControl
                    type='text'
                    className="col-md-8"
                    value={phone}
                    onChange={e => handlePhone(e)} />
            </reactbootstrap.Row>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">DOB</reactbootstrap.FormLabel>
                <reactbootstrap.Col className="col-md-8 p-0">
                    <DatePicker selected={dob} onChange={e => handleDate(e)} />
                </reactbootstrap.Col>
            </reactbootstrap.Row>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">Password</reactbootstrap.FormLabel>
                <reactbootstrap.FormControl
                    type='password'
                    className="col-md-8"
                    value={pwd}
                    onChange={e => handlePwd(e)}/>
            </reactbootstrap.Row>
            <reactbootstrap.Row className='mt-2'>
                <reactbootstrap.FormLabel className="col-md-4">Gender</reactbootstrap.FormLabel>
                <reactbootstrap.Col className="col-md-8 p-0">
                    <Select
                        value={gender}
                        onChange={e => handleGender(e)}
                        options={genderOption}
                    />
                </reactbootstrap.Col>
            </reactbootstrap.Row>
            <reactbootstrap.Row className="flex-row-reverse mt-2">
                <reactbootstrap.ButtonGroup>
                    <reactbootstrap.Button variant="danger"  size="sm" className="m-1">Cancel</reactbootstrap.Button>
                    <reactbootstrap.Button variant="success" size="sm" className="m-1" >Submit</reactbootstrap.Button>
                </reactbootstrap.ButtonGroup>
            </reactbootstrap.Row>
        </reactbootstrap.Container>
    );
}

export default SignUp;
