import React, { Component } from 'react';
import  {Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';

class UserInputDecision extends Component {
    render(){
        return (
            <div className="container">
                <UserName />
                <RenderedDecide />
                
                <Button>Submit</Button>
            </div>
        )
    }

}

function UserName(props) {
    //only once per page
    return (
        <div>
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

function RenderedDecide(props) {
    return (
        <div>
           <br />
           Text About Option
           <br />
            how much want?
            <Form>
                <FormGroup tag="fieldset" row>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />{' '}
                       High
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Medium
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio2" />{' '}
                        Low
                        </Label>
                    </FormGroup>
                </FormGroup>
            </Form>
        </div>
    )
}

export default UserInputDecision;