import React from 'react';
import {Container, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return(
        <Container className='auth-container'>
           <Col>
           <br/>
                <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col>
                <br/>
                <br/>
                <Col md="6">
                    <Signup updateToken={props.updateToken}/>
                </Col>
           </Col>
        </Container>
    )
}

export default Auth;