import React from "react";
import Todo from "../components/ToDo";
import { connect } from "react-redux";

const ToDoList = ({ todos }) => {
	const showTodos = todos.map((todo) => {
		return <Todo {...todo} key={todo.id} />;
	});

	return <ul>{showTodos}</ul>;
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

export default connect(mapStateToProps)(ToDoList);
