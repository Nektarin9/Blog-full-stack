import { Icon } from '../../icon/icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const LogoContainer = ({ className }) => (
	<Link className={className} to={"/"}>
		<Icon size="70px" id="fa-code" margin="0 10px 0 0"/>
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 500;
	line-height: 48px;
	margin-top: 17px;
`;
const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -21px;
`;
