import React, {Component} from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../path/to/store';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state={
          error : null,
          isLoaded : false,
          books: []
        };
    }

    componentDidMount() {
        axios.get('books')
        .then(res => this.setState({ isLoaded : true, books: res.data }))
        .catch(err => console.log(err));
    }
  
    callApi = async () => {
        const response = await axios.get('books'); 
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        const {error, isLoaded, books} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }
        return (
            
            <div className="photo-grid">
                {
                  books.map(book => (
                    <div className="photo-grid-item" key={book._id} align="start">
                        <img src={book.img_url} height="300px" width="200px" alt={book.name}/>
                        <p className="font-weight-bold">{book.name}</p>
                        <p className="font-weight-normal">{book.author}</p>
                        <p className="font-weight-light">{book.publish_date}</p>
                    </div>
                  ))
                }
            </div>
        )
    }
}

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
}

export default connect(mapStateToProps)(BookList);