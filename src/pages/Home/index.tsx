import { SyntheticEvent, useState } from 'react';

function Home() {
	const [email, setemail] = useState('');

	const handleSubmit = (evento: SyntheticEvent) => {
		evento.preventDefault();
		console.log(evento);
	};

	const onChangeInput = (event: any) => {
		setemail(event.target.value);
	};

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
					onChange={onChangeInput}
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
