import './style.css';
import { dashboard } from '../../services/dashboard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Spot = {
	_id: string;
	thumbnail_url: string;
	techs: string[];
	company: string;
	price: number;
};

const Dashboard = () => {
	const [spots, setSpots] = useState<Spot[]>([]);

	const loadSpots = async () => {
		const user_id = localStorage.getItem('user');

		if (user_id) {
			const response = await dashboard.spotList(user_id);
			setSpots(response.data);
		}
	};

	useEffect(() => {
		loadSpots();
	}, []);

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
			<Link to={'/new'}>
				<button className="btn">Cadastrar novo spot</button>
			</Link>
		</>
	);
};

export default Dashboard;
