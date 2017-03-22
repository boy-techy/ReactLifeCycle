/**
 * Created by yatindra on 22/3/17.
 */

import React, { Component } from 'react';
import Row from './Row';

export default class ToDoList extends Component {


    render() {
        let todoList = this.props.todo.map((val, i) => {
            return (
                <Row currentRow={val} index={i}/>
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
