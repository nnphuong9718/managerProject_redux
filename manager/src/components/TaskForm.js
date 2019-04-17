import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount (){
        if(this.props.itemEdit && this.props.itemEdit.id != null){
            this.setState({
                id : this.props.itemEdit.id,
                name : this.props.itemEdit.name,
                status : this.props.itemEdit.status
            });
        }
        else{
            this.onDelete();
        }
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEdit )
        {
            this.setState({
                id: nextProps.itemEdit.id,
                name : nextProps.itemEdit.name,
                status : nextProps.itemEdit.status
            });
        }
        else{
            this.onDelete();
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var name =target.name;
        var value =target.value;
        if(name === 'status')
        {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.onDelete();
        this.exitForm();
    }
    exitForm = () =>{
        this.props.onCloseTask();
    }
    onDelete = () =>{
        this.setState({
            id : '',
            name : '',
            status : false
        });
    }
    
    render() {
        if(!this.props.displayForm) return '';
        return (
           <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">

                            {this.props.itemEdit.id  ? 'Cập nhật công việc' :'Thêm công việc'  }
                            <span
                                className="fa fa-times-circle text-right"
                                onClick = {this.exitForm}
                            ></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                    type= "text" 
                                    className= "form-control" 
                                    name = "name"
                                    value = {this.state.name}
                                    onChange = {this.onChange}
                                    />
                            </div>
                            <label>Trạng Thái :</label>
                            <select 
                                className= "form-control" 
                                required= "required" 
                                name = "status"
                                value = {this.state.status}
                                onChange= {this.onChange}
                                >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning" >Lưu</button>&nbsp;
                                <button type="button" className="btn btn-danger" onClick={this.onDelete}>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>

        );
      }
}
const mapStateToProps = (state) =>{
    return {
        displayForm : state.displayForm,
        itemEdit : state.itemEdit
    }
}

const mapDispatchtoProps = (dispatch, props) =>{
    return {
        onAddTask : (task) => {
            dispatch(actions.addTask(task));    
        },
        onCloseTask : () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(TaskForm);
