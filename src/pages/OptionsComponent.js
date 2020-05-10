import React, { Component } from 'react';
import  {Label, Button, Row, Col, Form, Input, FormGroup } from 'reactstrap';

class Options extends Component {
    render() {
        return (
            <div>
                <div>Decision Options</div>
                <Form className="container" style={{marginTop: 30}}>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={3}>First Decision</Label>
                        <Col sm={9}>
                            <Input type="text" name="email" id="exampleEmail" placeholder="Option Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Discription</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Options;