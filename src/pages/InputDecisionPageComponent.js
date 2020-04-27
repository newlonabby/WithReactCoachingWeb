import React, { Component } from 'react';
import  {Form, FormGroup, Label, Input } from 'reactstrap';
import Header from '../components/HeaderComponent';

class InputDecision extends Component {
    render(){
        return (
            <div>
            <Header />
            <Form>
                <FormGroup>
                    <Label for="userName"> User Name</Label>
                    <Input type="text" id="userName" placeholder="User One"/>
                </FormGroup>
                <FormGroup>
                    <Label></Label>
                </FormGroup>
            </Form>
            </div>
        )
    }

}

export default InputDecision;