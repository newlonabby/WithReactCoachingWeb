import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from '../components/HeaderComponent.js'

class Home extends Component {
    render(){
        return (
            <div>
                <Header />
                <Button color='pink'>Start</Button>
            </div>
        )
    }

}

export default Home;