/**
 * Created by yatindra on 22/3/17.
 */

import React,{ Component } from 'react';

export default class NewToDo extends Component{

    constructor(){
        super();
        this.state={
                name:'',
                date:'',
                status:'Pending',
                check:'',
                hide:true,
        }
    }
    // componentWillReceiveProps(newProps){
    //     console.log()
    // }

    inputTextHandler=(event)=>{

        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    addToDo=(e)=>{
        e.preventDefault();
        this.props.addNew(this.state);
    }

    render(){
        return(
            <div>
                {   !this.props.addHide ? (
                        <form onSubmit={this.addToDo}>
                            <label>Task Name:</label>
                            <input type="text" name="name" onChange={this.inputTextHandler}/>
                            <label>Task Date:</label>
                            <input type="date" name="date" onChange={this.inputTextHandler} />
                            <input type="submit" value="Add"/>
                        </form>):<div></div>
                }
            </div>
        )
    }
}