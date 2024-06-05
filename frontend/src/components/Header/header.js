import { Logo, ControlPanel } from './components';
import styled from 'styled-components';

const HeaderConteiner = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Веб-технологии
			<br />
			Написание кода
			<br />
			Разбор ошибок
		</Discription>
		<ControlPanel />
	</header>
);

const Discription = styled.div`
	font-style: italic;
`;

export const Header = styled(HeaderConteiner)`
	position: fixed;
	display: flex;
	justify-content: space-between;
	z-index: 10;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px -2px 17px black;
	background-color: white;
`;
