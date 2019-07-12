import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
// import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Header from "./components/layout/Header";

import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Router>
						<Header branding="Contact Manager" />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/about" component={About} />
								<Route path="/contact/add" component={AddContact} />
								{/* <Route path="/contact/edit/:id" component={EditContact} /> */}
								<Route component={NotFound} />
							</Switch>
						</div>
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
