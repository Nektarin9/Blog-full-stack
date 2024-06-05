import PropTypes from 'prop-types';

import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ clasName, width, ...props }, ref) => {
	return <input className={clasName} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 40px;
	margin: 0 0 10px;
	border: 1px solid black;
	padding: 10px;
	font-size: 18px;
`;

Input.propTypes = {
	width: PropTypes.string,
};
