import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            user:{
                name:'yatindra',
                age:23,
                address:'New Delhi'
            }
        }
    }
  render() {
        const {name,age,address}=this.state.user;
    return (
      <div>

          {`${name} is ${age}`}
      </div>
    );
  }
}


class UserCard extends Component{

    render(){
        return(
          <div></div>
        );
    }

}

export default App;
