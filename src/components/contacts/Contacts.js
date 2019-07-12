import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { getContacts } from "../../actions/contactActions";

// import PropTypes from "prop-types";

class Contacts extends Component {
	componentDidMount() {
		this.props.getContacts();
	}

	// componentDidMount() {
	// 	this.props.getContacts();
	// }

	render() {
		const { contacts } = this.props;
		return (
			<React.Fragment>
				<h1 className="text-danger mb-2">Contacts List</h1>
				{contacts.map(contact => (
					<Contact key={contact.id} contact={contact} />
				))}
				;
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	contacts: state.contact.contacts
});
// Contacts.propTypes = {
// 	contacts: PropTypes.array.isRequired,
// 	getContacts: PropTypes.object.isRequired
// };
export default connect(
	mapStateToProps,
	{ getContacts }
)(Contacts);
