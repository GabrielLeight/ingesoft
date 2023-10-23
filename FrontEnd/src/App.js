import React, {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import UsersEdit from "./views/users/edit";
import UsersView from "./views/users/show";
import UserList from "./views/users/index";
import UserAdd from "./views/users/create";

import Home from "./views/Home";

export default function App() {
	return (
		<Router>
			<>
			<div>
				<Header />
				<Container fluid className="p-0">
					<Row className="no-gutters">
						<Col xs="2">
							<Sidebar />
						</Col>
						<Col xs="10">
							{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
							<Routes>
								<Route path="/users/create" element={<UserAdd />} />
								<Route path="/users/:id/edit" element={<UsersEdit />} />
								<Route path="/users/:id" element={<UsersView />} />
								<Route path="/users" element={<UserList />} />
								<Route path="/" element={<Home />} />
							</Routes>
						</Col>
					</Row>
				</Container>
			</div>
			</>
		</Router>
	);
}
