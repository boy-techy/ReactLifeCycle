/**
 * Created by yatindra on 22/3/17.
 */

import React,{ component } from 'react';

export default class Row extends Component{

    constructor(props){
        super();
        this.state={
            name:props.val.name,
            date:props.val.date,
            status:props.val.status,
            check:props.val.check,
            hide:props.val.hide,
        }
    }

    render(){
        let {index}=this.props;
        const {name,date,status,check,hide}=this.state;
        return(
            this.state.hide?
            <tr key={index}>
                <td>{name}</td>
                <td>{date}</td>
                <td>{status}</td>
                <td><input type="checkbox" checked={check} disabled= {check}
                           onChange={() => this.props.changeStatus(index)}/></td>
                <td>
                    <button onClick={() => {
                        this.props.toggle(index)
                    }}>Edit
                    </button>
                </td>
                <td>
                    <button onClick={() => this.props.deleteTask(index)}>Delete</button>
                </td>
            </tr>
            : //Or Condition (false)
        <EditButton val={val} index={index} updateTodo={this.props.updateTodo} toggle ={this.props.toggle}/>

        )

    }
}