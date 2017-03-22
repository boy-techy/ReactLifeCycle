/**
 * Created by yatindra on 22/3/17.
 */

import React, { Component } from 'react';
import EditButton from './EditButton';

export default class ToDoList extends Component {


    render() {
        let todoList = this.props.todo.map((val, i) => {
            return (
                val.hide ?
                    <tr key={i}>
                        <td>{val.name}</td>
                        <td>{val.date}</td>
                        <td>{val.status}</td>
                        <td><input type="checkbox" checked={val.check} disabled= {val.check}
                                   onChange={() => this.props.changeStatus(i)}/></td>
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
                    <EditButton val={val} index={i} updateTodo={this.props.updateTodo} toggle ={this.props.toggle}/>
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
