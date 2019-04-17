import * as types from './../constants/actionsTypes';

let s4 =() =>{
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
let generateString =() =>{
        return s4() + s4() + '-' +s4()+s4() + '-' + s4()+s4();
}

let findIndex = (tasks,id) =>{
        var result = '';
        tasks.forEach((data,index)=>{
            if(data.id === id){
                result = index;
            }
        });
        return result;
}

let data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];

var myReducer = (state = initState , action) => {
	var index = 0;
	switch(action.type){
		case types.SHOW_LIST:
			return state;
		case types.ADD_TASK:
			if(!action.task.id){
				let newTask = {
					id : generateString(),
					name : action.task.name,
					status : action.task.status
				}
			state.push(newTask);
			}
			else{
				index = findIndex(state,action.task.id);
				state[index] = action.task;
			}
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];
		case types.UPDATE_STATUS:
        	index = findIndex (state,action.id);
        	state[index].status = !state[index].status;
        	localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK:
        	index = findIndex(state,action.id);
        	state.splice(index,1);
        	localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];
		default:
			return state;
	}
}

export default myReducer;