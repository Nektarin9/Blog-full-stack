import PropTypes from 'prop-types';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { useState } from 'react';
import { PROP_TYPE } from '../../../../constants';
import styled from 'styled-components';
import { request } from '../../../../utils/request';

const UserRowContainer = ({
	className,
	login,
	id,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selecterRoleId, setSelecterRoleId] = useState(userRoleId);
	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, "PATCH", {roleId: newUserRoleId}).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const onRoleChange = ({ target }) => {
		setSelecterRoleId(Number(target.value));
	};

	const isSaveButtonDisabled = selecterRoleId === initialRoleId;
	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registere-at-column">{registeredAt}</div>

				<div className="role-column">
					<select value={selecterRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						onClick={() => onRoleSave(id, selecterRoleId)}
					/>
				</div>
			</TableRow>
			<Icon id="fa-trash-o" margin="0 0 0 10px" onClick={onUserRemove} />
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;

	& select {
		font-size: 16px;
		padding: 0 5px;
	}
`;

UserRow.propTypes = {
	login: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	registeredAt: PropTypes.string.isRequired,
	roleId: PROP_TYPE.ROLE_ID.isRequired,
	roles: PropTypes.arrayOf(PropTypes.object).isRequired,
	onUserRemove: PropTypes.func.isRequired,
};
