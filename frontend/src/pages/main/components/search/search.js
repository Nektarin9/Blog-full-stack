import PropTypes from "prop-types"

import { Icon, Input } from '../../../../components';
import styled from 'styled-components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input onChange={onChange} placeholder="Поиск по заголовкам..." value={searchPhrase}/>
			<Icon inactive={true} margin="0 7px 0 0" id="fa-search" size="18px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	position: relative;
	display: flex;
	margin: 40px auto 0;
	width: 340px;
	height: 40px;
	& > input {
		padding: 10px 32px 10px 10px;
		font-size: 21px;

	}
	& > div {
		position: absolute;
		right: 3px;
		top: 7px;
	}
`;
Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
