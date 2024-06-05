import { PROP_TYPE } from '../../constants';

import { H2 } from '../h2/h2';
import styled from 'styled-components';

export const Error = ({ error }) =>
	error && (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	);

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

Error.propTypes = {
	error: PROP_TYPE.ERROR,
};
