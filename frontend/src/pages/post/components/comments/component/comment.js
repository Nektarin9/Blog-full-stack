import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../../components';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../actions';
import { selectUserRole } from '../../../../../selectirs';
import { ROLE } from '../../../../../constants';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, content, publishedAt }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментраий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle-o"
							size="21px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>

						{author}
					</div>
					<div className="published-at">
						<Icon
							inactive={true}
							size="21px"
							id="fa-calendar-o"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>

						{publishedAt}
					</div>
				</div>

				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					size="21px"
					id="fa-trash-o"
					margin="0 8px 0 10px"
					onClick={() => onNewCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;
	& .comment {
		width: 100%;
		padding: 5px 10px;
		border: 1px solid black;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
		align-items: center;
	}
	& .published-at {
		display: flex;
		align-items: center;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};
