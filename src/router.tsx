import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboards';
import NewSpot from './components/NewSpot';
import Home from './pages/Home';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/new" element={<NewSpot />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
