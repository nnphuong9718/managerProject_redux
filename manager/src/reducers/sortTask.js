import * as types from './../constants/actionsTypes';

var initState = {
	sortBy : '',
	sortValue : 0
};
 let myReducer = (state = initState, action) => {
 	switch(action.type){
 		case types.SORT_TASK:
 			return action.sort;
 		default:
 			return state;
 	}
 }
 export default myReducer;