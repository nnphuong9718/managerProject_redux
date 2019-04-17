import * as types from './../constants/actionsTypes';

var initState = {
	filterName : '',
	filterStatus : -1
};
 let myReducer = (state = initState, action) => {
 	switch(action.type){
 		case types.FILTER_TASK:
 			action.filter.filterStatus = +action.filter.filterStatus;
 			console.log(action.filter);
 			return action.filter;
 		default:
 			return state;
 	}
 }
 export default myReducer;