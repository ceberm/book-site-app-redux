import React, {Component} from "react";
import ReactDom from 'react-dom';
import Header from './components/header';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
          error : null,
          isLoaded : true
        };
    }
  
render() {
  const {error, isLoaded} = this.state;
  if(error){
      return <div>Error in loading</div>
  }else if (!isLoaded) {
      return <div>Loading ...</div>
  }else{
      return (
          <div className="menu-container" id="container">
            <Header />
          </div>
      );
    }
  }
};

export default App;


//React es a base de componentes para convertir el app a componente se debe hacer <App />
ReactDom.render(<App />, document.getElementById("root"));