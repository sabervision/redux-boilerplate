// placeholder constants and actions for a todo app
// action types
export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';

// placeholder data to mimic what we'd receive from server
const tasks = [
	{
		type: 'daily',
		text: 'Check Reddit',
		completed: false
	},
	{
		type: 'habit',
		text: 'Walk up the stairs'
	},
	{
		type: 'todo',
		text: 'Finish redux slides'
		completed: true
	}
];

export function getTasks() {
	return {
		type: GET_TASKS,
		payload: {
			tasks
		}
	};
}

export function addTask(text, type) {
	return {
		type: ADD_TASK,
		payload: {
			text, 
			type
		}
	};
}