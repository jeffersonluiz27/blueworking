import React from 'react';
import './App.css';
import Router from './router';

function App() {
	return (
		<div className="container">
			<h1 className="logo">Blueworking</h1>
			<div className="content">
				<Router />
			</div>
		</div>
	);
}

export default App;
