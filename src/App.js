import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            todo:[{
                name:'',
                date:'',
                status:'',
                check:'',
            }]
        }
    }
    addNew=(new_todo)=>{
        this.setState({
           todo:[...this.state.todo,new_todo],
        });
    }
  render() {

    return (
      <div id="mainContainer">
          <button>Add</button>
          <ToDoList todo={this.state.todo}/>
          <NewToDo addNew={this.addNew}/>
      </div>
    );
  }
}


class ToDoList extends Component{


    render(){
        let todoList=this.props.todo.map((val,i)=>{
            return (<tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.date}</td>
                        <td>{val.status}</td>
                        <td><input type="checkbox" /></td>
                        <td><span className="glyphicon glyphicon-plus"></span></td>
                        <td><span className="glyphicon glyphicon-pencil"></span></td>
                    </tr>);
        });
        return(
          <div>
            <table>
                <tbody>
                {todoList}
                </tbody>
            </table>
          </div>
        );
    }

}

class NewToDo extends Component{

    constructor(){
       super();
       this.state={
           new_todo:{
               name:'',
               date:'',
               status:'Pending',
               check:''
           }
       }
    }
    addToDo=(e)=>{
        e.preventDefault();
        this.setState({
           hide:true,
        });
        this.props.addNew(this.state.new_todo);
    }
    render(){
        return(
            <div>
                {   !this.state.hide ? (
                    <form onSubmit={this.addToDo}>
                        <label>Name:</label>
                        <input type="text" value={this.state.new_todo.name.value} onChange={(e) => {
                            this.state.new_todo.name = e.target.value
                        }}/>
                        <label>Date:</label>
                        <input type="date"/>
                        <input type="submit" value="Add"/>
                    </form>):<div></div>
                }
            </div>
        )
    }
}

export default App;
