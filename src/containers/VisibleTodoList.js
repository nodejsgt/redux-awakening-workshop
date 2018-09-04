import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter( todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter( todo => !todo.completed)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilters)
})

const mapDispatchToProps = dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
