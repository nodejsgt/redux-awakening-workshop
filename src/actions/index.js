
// LOCAL VARIABLES
let nextTodoId = 0;


// ACTION TYPES
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITI_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


/**
 * ACTION CREATORS
 */
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITI_FILTER,
    filter
})

