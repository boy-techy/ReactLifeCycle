/**
 * Created by yatindra on 22/3/17.
 */

import React, {Component} from 'react';

export default class ToDoList extends Component {

    updateState = (event) => {
        let temp = event.target.value;
        this.setState({
            [event.target.name]: temp,
        });
    }

    render() {
        let todoList = this.props.todo.map((val, i) => {
            return (
                val.hide ?
                    <tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.date}</td>
                        <td>{val.status}</td>
                        <td><input type="checkbox" checked={val.check} disabled= {val.check} onChange={()=>this.props.changeStatus(i)}/></td>
                        <td>
                            <button onClick={() => {
                                this.props.toggle(i)
                            }}>Edit
                            </button>
                        </td>
                        <td>
                            <button onClick={() => this.props.deleteTask(i)}>Delete</button>
                        </td>
                    </tr>
                    : //Or Condition (false)
                    <tr key={i}>
                        <td><input type="text" placeholder="Name" name="name" onChange={this.updateState}/></td>
                        <td><input type="date" placeholder="Date" name="date" onChange={this.updateState}/></td>
                        <td><input type="Button" value="Update" onClick={() => this.props.updateTodo(i, this.state)}/>
                        </td>
                        <td><input type="Button" value="Cancel" onClick={() => this.props.toggle(i)}/></td>
                    </tr>
            )
        });
        return (
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
ToDoList.defaultProps={
    todo:[],
}
