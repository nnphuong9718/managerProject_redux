import * as types from './../constants/actionsTypes';

export const showList = () => {
	return {
		type : types.SHOW_LIST
	}
};

export const addTask = (task) => {
	return {
		type : types.ADD_TASK,
		task : task
	}
};
export const toggleForm = () => {
	return {
		type : types.TOGGLE_FORM
	};
}
export const closeForm = () => {
	return {
		type : types.CLOSE_FORM
	};
}
export const openForm = () => {
	return {
		type : types.OPEN_FORM
	};
}
export const updateStatus = (id) => {
	return {
		type: types.UPDATE_STATUS,
		id : id
	};
}
export const deleteTask = (id) => {
	return {
		type : types.DELETE_TASK,
		id : id
	};
}
export const editTask = (task) => {
	return {
		type : types.EDIT_TASK,
		task : task
	}
}
export const filterTask = (filter) => {
	return {
		type: types.FILTER_TASK,
		filter : filter
	}
}
export const searchTask = (keyword) => {
	return {
		type : types.SEARCH_TASK,
		keyword : keyword
	}
}
export const sortTask = (sort) => {
	return {
		type : types.SORT_TASK,
		sort : sort
	}
}