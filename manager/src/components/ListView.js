import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class ListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1
        };
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            filterName : name === 'filterName' ? value : this.state.filterName,
            filterStatus: name === 'filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilter(filter);
        this.setState({
            [name] : value
        });
    }
    render() {
        let {tasks, filterTask,keyword,sort}=this.props;
            if(filterTask.filterName){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterTask.filterName.toLowerCase()) !== -1;
                });
            }
                tasks = tasks.filter((task)=>{
                    if(filterTask.filterStatus === -1){
                        return task;
                    }
                    else{
                        return task.status === (filterTask.filterStatus === 1 ? true : false);
                    }
            });
        
        //search
        
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(keyword)!== -1;
        });
        //sort
        console.log(sort.sortBy + ' - ' + sort.sortValue);
        if(sort.sortBy === 'name'){
            tasks.sort((a,b)=>{
                if(a.name > b.name) return sort.sortValue;
                else if(a.name <b.name) return -sort.sortValue;
                else return 0;
            });
        }else{
           tasks.sort((a,b)=>{
                if(a.status < b.status) return sort.sortValue;
                else if(a.status > b.status) return -sort.sortValue;
                else return 0;
           }); 
        }

        var elmTasks = tasks.map((task,index)=>{
            return <TaskItem 
                        key = {task.id} 
                        index ={index} 
                        task={task}
                    />
        });
        return (
            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">Tên</th>
                                        <th className="text-center">Trạng Thái</th>
                                        <th className="text-center">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                name = "filterName"
                                                value = {this.state.filterName}
                                                onChange = {this.onChange} />
                                        </td>
                                        <td>
                                            <select 
                                                className="form-control"
                                                name = "filterStatus"
                                                value ={this.state.filterStatus}
                                                onChange = {this.onChange}>
                                                    <option value="-1">Tất Cả</option>
                                                    <option value="0">Ẩn</option>
                                                    <option value="1">Kích Hoạt</option>
                                            </select>
                                        </td>
                                        <td></td>
                                    </tr>
                                    {elmTasks} 
                                </tbody>
                            </table>

        );
      }
}

const mapStateToProps = (state) =>{
    return {
        tasks : state.tasks,
        filterTask : state.filterTask,
        keyword : state.searchTask,
        sort : state.sortTask
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter : (filter) => {
            dispatch(actions.filterTask(filter));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ListView);
