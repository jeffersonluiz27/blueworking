import { SyntheticEvent, useState } from 'react';
import { user } from '../../services/user';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (evento: SyntheticEvent) => {
		evento.preventDefault();
		const response = await user.auth(email);

		console.log(response);
		const { _id } = response.data;

		localStorage.setItem('user', _id);

		navigate('/dashboard');
	};

	/* const onChangeInput = (event: any) => {
		setEmail(event.target.value);
	}; */

	return (
		<>
			<p>
				Cadastre espaços para <strong>devs</strong> e encontre{' '}
				<strong>grandes</strong> profissionais.
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Informe seu melhor e-mail"
					onChange={(event) => setEmail(event.target.value)}
					required
					autoComplete="off"
				/>
				<button type="submit" className="btn">
					Entrar
				</button>
				<p>{email}</p>
			</form>
		</>
	);
}

export default Home;
