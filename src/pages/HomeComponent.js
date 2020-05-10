import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    render(){
        return (
            <div className="container">
                <p>
                    Welcome to Brand!
                </p>
                <Button type="submit">Let's Go!</Button>
            </div>
        )
    }

}

export default Home;