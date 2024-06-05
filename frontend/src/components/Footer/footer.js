import { useEffect, useState } from 'react';
import styled from 'styled-components';
const FooterContainer = ({ className }) => {
	const [city, setSity] = useState('');
	const [temperature, setTemperature] = useState('');

	const [weater, setWeater] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=f97c91f3328ec7787708a7a40cb17c6d',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setSity(name);
				setTemperature(Math.round(main.temp));
				setWeater(weather[0].description);
			});
	}, []);
	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>vlad-kasparov@mail.ru</div>
			</div>
			<div>
				<div>
					{city},{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weater}
				</div>
			</div>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	width: 1000px;
	padding: 20px 40px;
	box-shadow: 0px 2px 17px black;
	font-weight: bold;
	background-color: white;
`;
