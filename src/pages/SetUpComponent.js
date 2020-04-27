import React, { Component } from 'react';
//import  {Label, Col, Row } from 'reactstrap';

//using controlled form 

class SetUpOptions extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            //Uncontrolled form for now
            <form className="container">
                <div> How Many Options Are You Deciding Between??</div>
                <div className="form-check">  
                    <label>
                        <input
                        type="radio"
                        name="decisionNum"
                        value="twoDecide"
                        checked={true}
                        className="form-check-input"
                        />
                        2
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="decisionNum"
                        value="threeDecide"
                        className="form-check-input"
                        />
                        3 
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="decisionNum"
                        value="fourDecide"
                        className="form-check-input"
                        />
                        4 
                    </label>
                    </div>

                    <div> How Many Users?</div>
                    <div className="form-check">  
                    <label>
                        <input
                        type="radio"
                        name="userNum"
                        value="twoUser"
                        checked={true}
                        className="form-check-input"
                        />
                        2
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="userNum"
                        value="threeUser"
                        className="form-check-input"
                        />
                        3 
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="userNum"
                        value="fourUser"
                        className="form-check-input"
                        />
                        4 
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="userNum"
                        value="fiveUser"
                        className="form-check-input"
                        />
                        5
                    </label>
                    </div>


                    <label>Anonymous?</label>        
                    <div class="form-group">
                        <input
                        type="checkbox"
                        name="anon"
                        />
                    </div>
                    

                    <div className="form-group">
                    <button className="btn btn-info mt-2" type="submit">
                        Submit
                    </button>
                </div>
            </form>

        )
    }

}

export default SetUpOptions;