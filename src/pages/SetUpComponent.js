import React, { Component } from 'react';
import  {Label, FormGroup, Form, Input, Button, Col, Row, FormText } from 'reactstrap';

//using controlled form for right now

class SetUpOptions extends Component {
    render(){
        return (
            <div className="container">
                <Form>
                    <FormText>
                        SetUp
                    </FormText>
                    <FormGroup>
                        <Label for="userNum">How Many Users?</Label>
                        <Input type="select" name="user" id="userNum">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="decisionNum">How Many Decision Options</Label>
                        <Input type="select" name="decide" id="decisionNum">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        </Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" />{' '}
                        Anonymous?
                        </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default SetUpOptions;