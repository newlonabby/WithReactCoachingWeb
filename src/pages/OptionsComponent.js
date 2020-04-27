import React, { Component } from 'react';
import  {Form, FormGroup, Label, Input, Button } from 'reactstrap';

function RenderOptions(){
    return(
        <FormGroup>
            <Label></Label>
            <Input />
        </FormGroup>
    )
}

class Options extends Component {

    render(){
        return (
            <div>
                <Form>
                    <RenderOptions />
                
                </Form>
                <Button type='submit'> Submit</Button>
            </div>
        )    
    }

}

export default Options;