import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { addContact } from "../../actions/contactActions";

class AddContact extends Component {
	state = {
		name: "",
		email: "",
		phone: ""
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const { name, email, phone } = this.state;

		const newContact = {
			name,
			email,
			phone
		};
		this.props.addContact(newContact);

		this.setState({ name: "", email: "", phone: "" });
		this.props.history.push("/");
	};

	render() {
		const { name, email, phone } = this.state;
		return (
			<div className="card mb-3">
				<div className="card-header">Add Contact</div>
				<div className="card-body">
					<form onSubmit={this.onSubmit}>
						<TextInputGroup
							label="Name"
							name="name"
							placeholder="Enter name"
							value={name}
							onChange={this.onChange}
						/>
						<TextInputGroup
							label="Email"
							name="email"
							placeholder="Enter email"
							value={email}
							onChange={this.onChange}
						/>
						<TextInputGroup
							label="Phone"
							name="phone"
							placeholder="Enter phone"
							value={phone}
							onChange={this.onChange}
						/>
						<input
							type="submit"
							value="Add Contact"
							className="btn btn-dark btn-block"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default connect(
	null,
	{ addContact }
)(AddContact);
