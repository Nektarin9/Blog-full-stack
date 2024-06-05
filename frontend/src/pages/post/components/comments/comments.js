import PropTypes from "prop-types"

import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './component/comment';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../../selectirs';
import { addCommentAsync } from '../../../../actions';
import { PROP_TYPE, ROLE } from '../../../../constants';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComent, setNewComent] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = ( postId, content) => {
		dispatch(addCommentAsync(postId, content));
		setNewComent('');
	};
	const isGuest = userRole === ROLE.GUEST;


	return (
		<div className={className}>
			{!isGuest &&<div className="new-comment">
				<textarea
					name="comment"
					onChange={({ target }) => {
						setNewComent(target.value);
					}}
					value={newComent}
					placeholder="Комментарий..."
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					margin="0 0 0 10px"
					onClick={() => onNewCommentAdd( postId, newComent)}
				/>
			</div>}
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	margin: 0 auto;
	width: 580px;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 10px;
	}

	& .new-comment textarea {
		display: flex;
		width: 100%;
		height: 120px;
		font-size: 18px;
		resize: none;
	}
`;

Comments.propTypes = {
	comments: PropTypes.arrayOf(PROP_TYPE.COMMENT),
	postId: PropTypes.string.isRequired,
};
