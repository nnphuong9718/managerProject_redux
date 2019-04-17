import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './displayForm';
import itemEdit from './itemEdit';
import filterTask from './filterTask';
import searchTask from './searchTask';
import sortTask from './sortTask';

const myReducer = combineReducers({
	tasks : tasks,
	displayForm : displayForm,
	itemEdit : itemEdit,
	filterTask : filterTask,
	searchTask : searchTask,
	sortTask : sortTask
});

export default myReducer;