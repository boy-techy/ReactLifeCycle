/**
 * Created by yatindra on 22/3/17.
 */

import React,{ Component } from 'react'

export default class EditButton extends Component{

    constructor(props){
        super();
        this.state={
            name:props.val.name,
            date:props.val.date,
        }
    }
    updateState = (event) => {
        let temp = event.target.value;
        this.setState({
            [event.target.name]: temp,
        });
    }

    render(){
        return(
            <tr index={this.props.index}>
                <td><input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.updateState}/></td>
                <td><input type="date" placeholder="Date" name="date" value={this.state.date} onChange={this.updateState}/></td>
                <td><input type="Button" value="Update" onClick={() => this.props.updateTodo(this.props.index, this.state)}/></td>
                <td><input type="Button" value="Cancel" onClick={() => this.props.toggle(this.props.index)}/></td>
            </tr>
        )
    }

}