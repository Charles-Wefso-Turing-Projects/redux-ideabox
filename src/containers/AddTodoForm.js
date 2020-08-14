import React, { Component } from "react";
import { addToDo } from "../actions";
import { connect } from "react-redux";

class AddToDoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: "" };
	}

	handleChange = (e) => {
		this.setState({ todo: e.target.value });
	};

	submitForm = (e) => {
		e.preventDefault();
		this.props.addToDo(this.state.todo);
		this.setState({ todo: "" });
	};

	render() {
		return (
			<section>
				<form onSubmit={this.submitForm}>
					<input
						value={this.state.todo}
						placeholder="Add A Todo"
						onChange={this.handleChange}
					/>
					<button>New Todo</button>
				</form>
			</section>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addToDo: (text) => dispatch(addToDo(text)),
});

export default connect(null, mapDispatchToProps)(AddToDoForm);
