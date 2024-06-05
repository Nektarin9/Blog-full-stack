import PropTypes from "prop-types"
import styled from 'styled-components';

const ButtonContainer = ({ className, width, children, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};
export const Button = styled(ButtonContainer)`
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;
	border: 1px solid black;
	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string
}
