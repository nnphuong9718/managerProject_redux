import * as types from './../constants/actionsTypes';

var initState = '';
let myReducer = (state = initState,action)=> {
	switch(action.type){
		case types.SEARCH_TASK:
			return action.keyword;
		default : return state;
	}
};
export default myReducer;