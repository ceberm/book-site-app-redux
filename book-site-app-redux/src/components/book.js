import React, {Component} from "react";
import {
  Redirect
} from "react-router-dom";
import axios from 'axios';

class AddBooks extends Component {
    constructor(props){
        super(props);
        this.state={
          name : '',
          author : '',
          img_url: '',
          publish_date: '',
          description: '',
          isLoaded : true,
          responseToPost: '',
          book: {}
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(JSON.stringify({ 
            name: this.state.name,
            author: this.state.author,
            img_url: this.state.img_url,
            publish_date: this.state.publish_date,
            description: this.state.description
         }))
        axios.post('/books', {
            name: this.state.name,
            author: this.state.author,
            img_url: this.state.img_url,
            publish_date: this.state.publish_date,
            description: this.state.description
        })
        .then(function (response) {
            console.log(response);
        } 
        )
        .catch(err => console.log(err));
        this.props.history.push("/successPage");
        return (<Redirect to="/successPage" />);
    };

    render() {
        return (      
        <form onSubmit={this.handleSubmit}>
            <div className='new-book-container'>
                    <br />
                    <h5><strong>Post Books to Server</strong></h5><br /><br />
                    <div className="new-book-item">
                        <label><strong>Name of the Book</strong></label>
                        <input
                            type="text"
                            id="name"
                            className="inputs"
                            value={this.state.book.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </div><div className="new-book-item">
                        <label><strong>Name of the Author</strong></label>
                        <input
                            type="text"
                            id="author"
                            className="inputs"
                            value={this.state.book.author}
                            onChange={e => this.setState({ author: e.target.value })}
                        />
                    </div><div className="new-book-item">
                        <label><strong>URL of the Image</strong></label>
                        <input
                            type="text"
                            id="img_url"
                            className="inputs"
                            value={this.state.book.img_url}
                            onChange={e => this.setState({ img_url: e.target.value })}
                        />
                    </div><div className="new-book-item">
                        <label><strong>Publish Date</strong></label>
                        <input
                            type="text"
                            id="publish_date"
                            className="inputs"
                            value={this.state.book.publish_date}
                            onChange={e => this.setState({ publish_date: e.target.value })}
                        />
                    </div><div className="new-book-item">
                    <label><strong>Brief Description</strong></label>
                        <textarea
                            type="text"
                            id="description"
                            className=""
                            value={this.state.book.description}
                            onChange={e => this.setState({ description: e.target.value })}
                        />
                    
                    </div>
                    <div className="button-form">
                        <button className="button" renderas="button" type="submit">Submit</button>
                    </div>
            </div>
        </form>
        )
    }
}

export default AddBooks