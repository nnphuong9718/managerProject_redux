import * as types from './../constants/actionsTypes';

var initState = {
	filterName : '',
	filterStatus : -1
};
let myReducer = (state = initState,action)=> {
	switch(action.type){
		case types.EDIT_TASK:
			return action.task;
		default : return state;
	}

};
export default myReducer;