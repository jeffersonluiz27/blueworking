import { useMemo, useState } from 'react';
import './style.css';
import { spot } from '../../services/spot';
import { useNavigate } from 'react-router-dom';

const NewSpot = () => {
	const [thumbnail, setThumbnail] = useState<FileList | null>(null);
	const [company, setCompany] = useState('');
	const [techs, setTechs] = useState('');
	const [price, setPrice] = useState('');
	const navigate = useNavigate();

	const preview = useMemo(() => {
		return thumbnail ? URL.createObjectURL(thumbnail[0]) : null;
	}, [thumbnail]);

	const handleSubmit = async (evento: React.FormEvent) => {
		evento.preventDefault();
		const user_id = localStorage.getItem('user');

		const data = new FormData();

		if (thumbnail !== null) data.append('thumbnail', thumbnail[0]);
		data.append('company', company);
		data.append('techs', techs);
		data.append('price', price);

		if (user_id) {
			await spot.create(data, user_id);
			navigate('/dashboard');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label
				id="thumbnail"
				style={{ backgroundImage: `url(${preview})` }}
				className={thumbnail ? 'has-thumbnail' : ''}
			>
				<input
					type="file"
					name="thumbnail"
					onChange={(event) => setThumbnail(event.target.files)}
				/>
				<img
					src={require('../../assets/camera.png')}
					alt="logo que representa a camera"
				/>
			</label>

			<label htmlFor="company">Empresa</label>
			<input
				type="text"
				placeholder="Sua empresa incrivel"
				name="company"
				id="company"
				onChange={(event) => setCompany(event.target.value)}
			/>

			<label htmlFor="techs">
				Tecnologias *<span>(separadas por vírgula)</span>
			</label>
			<input
				type="text"
				placeholder="Quais tecnologias usam?"
				name="techs"
				id="techs"
				onChange={(event) => setTechs(event.target.value)}
			/>

			<label htmlFor="price">
				Valor da Diária *<span>(em branco para GRATUITO)</span>
			</label>
			<input
				type="text"
				placeholder="Valor cobrado por dia"
				name="price"
				id="price"
				onChange={(event) => setPrice(event.target.value)}
			/>

			<button type="submit" className="btn">
				Cadastrar
			</button>
		</form>
	);
};

export default NewSpot;
