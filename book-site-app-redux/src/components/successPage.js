import React, {Component} from "react";
import {
  Link
} from "react-router-dom";

class Success extends Component{

    state = {
        title: "My Title",
        keywords: "",
        count: 0
    }

    render(){
        return(
            <div>
                <img alt="success" src="././success.png" width="200px" height="200px" />
                <strong>Congrats!! The Book has been successfully Stored on the DataBase</strong>
                <Link to="/">
                    <button className='btn btn-success' renderas="button"> Back</button>
                </Link>
                    
                <br />
            </div>
        );
    }

}
export default Success