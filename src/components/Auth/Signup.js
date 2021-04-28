import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment'

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let emailSyntax = /^(([^<>()[\]\\.,;:@"]+(\.[^<>()[\]\\.,;:@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let handleSubmit = (event) => {
        event.preventDefault();
        if(emailSyntax.test(email)!== true){
            alert("Valid e-mail address required!")
        } 
        if(password.length < 5 || password.length >16){
            alert("Please enter a password between 5 and 16 characters")

        } else {        
            fetch(`${APIURL}/user/register`, {
            method: "POST",
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
            alert("User Registered") // TEST ONLY! We will replace this with text rendered on the page
        })
    }
        
}
    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Enter Your E-mail<br/></Label>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">New Password (5-16 characters) <br/></Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} type="password"/>
                </FormGroup>
                <Button type='submit'>Sign Up</Button>
            </Form>
        </div>
    )
}

export default Signup;