import { useState, useEffect } from "react";
import * as reactbootstrap from 'react-bootstrap';
import SignUp from './SignUp';
import Login from './Login';
const LoginSignIn = () => {
    const [state,setstate] = useState({
        loginSignup:1
    })
    const {loginSignup} = state;
    const handleLoginSignUp=(value)=>{
        setstate({
            ...state,
            loginSignup:value
        })
    }
    return (

        <reactbootstrap className='container-fluid'>
            <reactbootstrap.Row className="flex-row-reverse pr-5">
                <reactbootstrap.ButtonGroup>
                    <reactbootstrap.Button style={{backgroundColor: 'deeppink'}} className="m-1" onClick={e=>handleLoginSignUp(1)}>Login</reactbootstrap.Button>
                    <reactbootstrap.Button style={{backgroundColor: 'mediumslateblue'}} className="m-1" onClick={e=>handleLoginSignUp(2)}>Signin</reactbootstrap.Button>
                </reactbootstrap.ButtonGroup>
            </reactbootstrap.Row>
            <reactbootstrap.Row className="col-md-12 mr-0 ml-0  mt-1 pt-5">
                    <reactbootstrap.Col className="col-md-8 d-flex justify-content-center" style={{fontFamily: 'initial',color:'floralwhite',fontSize:'xxx-large'}}>
                        RNP CHAT APP
                    </reactbootstrap.Col>
                {loginSignup===1 && <reactbootstrap.Col className="col-md-4 shadow-lg p-3 mb-5  rounded" style={{backgroundColor: '#c064c066'}}>
                    <reactbootstrap.Row className="d-flex font-weight-bolder justify-content-center">
                            LOGIN
                    </reactbootstrap.Row>
                    <reactbootstrap.Row>
                    <Login/>
                        </reactbootstrap.Row>

                </reactbootstrap.Col>}
                    {loginSignup===2 && <reactbootstrap.Col className="col-md-4  shadow-lg p-3 mb-5  rounded" style={{backgroundColor: '#c064c066'}}>
                    <reactbootstrap.Row className="d-flex font-weight-bolder justify-content-center">
                            SIGNIN
                    </reactbootstrap.Row>
                        <SignUp/>
                    </reactbootstrap.Col>}
            </reactbootstrap.Row>
        </reactbootstrap>
    )
}
export default LoginSignIn;
