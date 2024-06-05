import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title}></img>
				<div className="post-car-footer">
					<h4>{title}</h4>
					<div className="post-car-info">
						<div className="published-at">
							<Icon inactive={true} margin="0 7px 0 0" id="fa-calendar-o" />
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon inactive={true} margin="0 7px 0 0" id="fa-comment-o" />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid black;

	& img {
		display: block;
		width: 100%;
	}
	& h4 {
		margin: 0;
	}
	& .post-car-footer {
		border-top: 1px solid black;
		padding: 5px;
	}
	& .post-car-info {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}
	& .published-at {
		display: flex;
		align-items: center;
	}
	& .comments-count {
		display: flex;
		align-items: center;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
