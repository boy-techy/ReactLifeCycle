import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import NewToDo from  './NewToDo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            addHide:false,
        }

        this.updateTodo = this.updateTodo.bind(this);
        this.toggle = this.toggle.bind(this);
        this.addNew = this.addNew.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        //Method For Auto Bind With this Reference to Manage this.state


    }
    addNew=(new_todo)=>{

        this.setState({
           todo:[...this.state.todo,new_todo],
            addHide:true,
        });
    }


    changeStatus=(index)=>{
        const {todo:temp_todo}=this.state;
        let tempObj=Object.assign([],temp_todo,{[index]:Object.assign({},temp_todo[index],{status:"Complete",check:true})})
        this.setState({
            todo:tempObj,
        })
    }

    updateTodo=(index,newObj)=>{
        const {todo}=this.state;
        newObj=Object.assign({},newObj,{status:todo[index].status,
            check:todo[index].check,
            hide:todo[index].hide}
        );
        let temp_obj=Object.assign([],todo,{[index]:newObj});

        this.setState({
            todo:temp_obj
        },() => {
            this.toggle(index);
        })


    }

    deleteTask=(index)=>{
        let {todo:temp_todo}=this.state;
        temp_todo = temp_todo.filter((val,i)=>{
            if(i!=index){
                return val;
            }
        });


        this.setState({
            todo:temp_todo,
        });
    }

    toggle=(index)=>{
        const {todo:temp_todo}=this.state;
        let tempObj=Object.assign([],temp_todo,{[index]:Object.assign({},temp_todo[index],{hide:!temp_todo[index].hide})})
        this.setState({
            todo:tempObj,
        })
    }

  render() {

    return (
      <div className="mainContainer">
          <div id="heading">ToDo App</div>

          <div><button id="AddButton" onClick={()=>{
              this.setState({addHide:!this.state.addHide})
            }}>Add</button></div>

          <ToDoList todo={this.state.todo} toggle={this.toggle} updateTodo={this.updateTodo} deleteTask={this.deleteTask} changeStatus={this.changeStatus}/>

          <NewToDo addNew={this.addNew} addHide={this.state.addHide}/>
      </div>
    );
  }
}


export default App;
