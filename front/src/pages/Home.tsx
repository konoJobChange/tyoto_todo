import * as React from 'react';
import ToDoList from '../components/TodoList';
import AddToDo from '../components/AddTodo';
import { RootState } from '../modules';
import { Dispatch } from 'redux';
import { ToggleTodoAction } from '../modules/todos/ToggleTodo';
import { connect } from 'react-redux';
import { AddTodoAction } from '../modules/todos/AddTodo';

type ToDoProps = React.ComponentProps<typeof ToDoList>
const mapStateToToDoListProps = (state: RootState): Partial<ToDoProps> => ({
    todos: state.todos.todos,
})
const mapDispatchToToDoListProps = (dispatch: Dispatch): Partial<ToDoProps> => ({
    toggleTodo: (id: number) => dispatch<ToggleTodoAction>({type: 'TOGGLE_TODO', payload: {id}}),
})

const ConnectToDoList = connect(
    mapStateToToDoListProps,
    mapDispatchToToDoListProps,
)(ToDoList);

type AddToDoProps = React.ComponentProps<typeof AddToDo>
const mapDispatchAddToDOProps = (dispatch: Dispatch): AddToDoProps => ({
    onSubmit: (text) => dispatch<AddTodoAction>({type: 'ADD_TODO', payload: {text}}),
})
const ConnectAddToDo = connect(
    null,
    mapDispatchAddToDOProps,
)(AddToDo)

const Home = () => (
    <React.Fragment>
        <ConnectAddToDo />
        <ConnectToDoList />
    </React.Fragment>
)

export default Home;