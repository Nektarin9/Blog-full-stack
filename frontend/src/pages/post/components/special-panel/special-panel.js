import PropTypes from 'prop-types';

import { Icon } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectirs';
import { openModal, CLOSE_MODAL, removePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../constants';
import { checkAccess } from '../../../../utils';
import styled from 'styled-components';

const SpacialPanelConteiner = ({ id, className, publishedAt, editButtom }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);
	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync( id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon inactive={true} margin="0 7px 0 0" id="fa-calendar-o" />
				)}

				{publishedAt}
			</div>
			{isAdmin && (
				<div className="buttons">
					{editButtom}
					{publishedAt && (
						<Icon
							id="fa-trash-o"
							margin="0 0 0 7px"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const SpacialPanel = styled(SpacialPanelConteiner)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}
	& i {
		position: relative;
		top: -5px;
	}
	& .buttons {
		display: flex;
		font-size: 18px;
	}
`;

SpacialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButtom: PropTypes.node.isRequired,
};
