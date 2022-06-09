import './style.css';
import { dashboard } from '../../services/dashboard';
import { useEffect, useState } from 'react';

type Response = {
	_id: string;
	thumbnail_url: string;
	techs: string[];
	company: string;
	price: number;
};

const Dashboard = () => {
	const [spots, setSpots] = useState<Response[]>([]);

	useEffect(() => {
		loadSpots();
	}, []);

	const loadSpots = async () => {
		const user_id = localStorage.getItem('user');

		if (user_id) {
			const response = await dashboard.spotList(user_id);
			setSpots(response.data);
		}
	};

	return (
		<>
			<ul className="spot-list">
				{spots.map((spot) => (
					<li key={spot._id}>
						<header
							style={{ backgroundImage: `url(${spot.thumbnail_url})` }}
						></header>
						<h2>
							<strong>{spot.company}</strong>
						</h2>
						<p>
							Techs:{' '}
							{spot.techs.map((tech, index) => {
								if (index === spot.techs.length - 1) {
									return `${tech}.`;
								}
								return `${tech},`;
							})}
						</p>
						<p className="value">{spot.price}</p>
					</li>
				))}
			</ul>
			<button className="btn">Cadastrar novo spot</button>
		</>
	);
};

export default Dashboard;
