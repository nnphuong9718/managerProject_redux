import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index';


class TaskItem extends Component {
    onChangeStatus = () =>{
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDeleteItem = () =>{
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseTask();
    }
    onUpdateData = () =>{
        // this.props.onUpdateData(this.props.task.id);
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }
    render() {
        const {index, task}=this.props;
        return (
            <tr>
                <td>{index + 1 }</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status === true ? 'label label-danger' : 'label label-success'}
                        onClick = {this.onChangeStatus}>
                        {task.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick = {this.onUpdateData}>
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>&nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.onDeleteItem}>
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
                </td>
            </tr>

        );
      }
}

const mapStateToProps = (state) =>{
    return {
        tasks : state.tasks
    }
}

const mapDispatchtoProps = (dispatch, props) =>{
    return {
        onUpdateStatus : (id) =>{
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask : (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseTask : () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        },
        onEditTask : (task) => {
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(TaskItem);
