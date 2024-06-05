import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectirs';
import { Error } from '../error/error';
import { ERROR, PROP_TYPE } from '../../constants';
import { checkAccess } from '../../utils';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);
	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;
	return error ? <Error error={error} /> : children;
};

PrivateContent.propTypes = {
	children: PropTypes.node.isRequired,
	access: PropTypes.arrayOf(PropTypes.number).isRequired,
	serverError: PROP_TYPE.ERROR,
};
