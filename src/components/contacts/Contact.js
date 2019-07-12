import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";
// import PropTypes from "prop-types";

class Contact extends Component {
	state = {
		showContactInfo: false
	};

	onDeleteClick = id => {
		this.props.deleteContact(id);
	};
	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			<div className="card card-body mb-3">
				<h4>
					{name}
					<i
						className="fas fa-sort-down"
						onClick={() => {
							this.setState({ showContactInfo: !this.state.showContactInfo });
						}}
						style={{ cursor: "pointer" }}
					/>
					<i
						className="fas fa-times"
						onClick={this.onDeleteClick.bind(this, id)}
						style={{ cursor: "pointer", color: "red", float: "right" }}
					/>
					<Link to={`/contact/edit/${id}`}>
						<i
							className="fas fa-pencil-alt mr-3"
							style={{ cursor: "pointer", color: "black", float: "right" }}
						/>
					</Link>
				</h4>

				{showContactInfo ? (
					<ul className="list-group">
						<li className="list-group-item">Email: {email}</li>
						<li className="list-group-item">Phone: {phone}</li>
					</ul>
				) : null}
			</div>
		);
	}
}

export default connect(
	null,
	{ deleteContact }
)(Contact);
