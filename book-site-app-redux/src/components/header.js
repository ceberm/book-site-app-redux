import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import AddBooks from './book';
import BookList from './bookList';
import Success from "./successPage"

class Header extends Component{

    state = {
        title: "My Title",
        keywords: "",
        count: 0
    }

    hello = () => {
        console.log("I was clicked")
    }

    inputChange = e => {
        console.log(e);
        this.setState({keywords: e.target.value});
    }
    buttonChange () {
        console.log(this.state.count);
        this.setState((state, props) => ({
            count: state.count+1
        }));
    }
    
    render(){
        
        return (
            <Router>
                <div>
                    <div className="header-container">
                        <a className="header" type=" button" variant="outline-primary" href="/addBooks">Add Book</a >
                        <a className="header" href="/">Home</a>
                        <a className="header" href="/">Add Users</a>
                        <a className="header" href="/">User List</a>
                        
                    </div>
                    <Route exact path="/addBooks" component={AddBooks}></Route>
                    <Route exact path="/" component={BookList}></Route>
                    <Route exact path="/successPage" component={Success}></Route>
                </div>
            </Router>
        );
    }
}

export default Header