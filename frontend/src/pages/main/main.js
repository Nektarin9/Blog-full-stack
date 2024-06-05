/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { PostCard } from './components/post-card/post-card';
import { Pagination, Search } from './components';
import { PAGINATION_LIMIT } from '../../constants';
import {  debounce } from './utils';
import styled from 'styled-components';
import { request } from "../../utils/request";

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);

	useEffect(() => {
		request(`/posts?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`)
		.then(
			({ data: { posts, lastPage } }) => {
				if (posts.error) {
					return;
				}
				setPosts(posts);
				setLastPage(lastPage);
			},
		);
	}, [ page, shouldSearch]);

	const startDelaySearch = useMemo(() => debounce(setShouldSearch, 2000), []);
	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelaySearch(!shouldSearch);
	};
	return (
		<div className={className}>
			<div className="posts-end-search">
				<Search onChange={onSearch} searchPhrase={searchPhrase} />
				{posts.length > 0 ? (
					<div className="post-list">
						{posts.map(
							({ id, title, imageUrl, publishedAt, comments }) => (
								<PostCard
									key={id}
									id={id}
									title={title}
									imageUrl={imageUrl}
									publishedAt={publishedAt}
									commentsCount={comments.length}
								/>
							),
						)}
					</div>
				) : (
					<div className="no-posts-count">Статьи не найдены</div>
				)}
			</div>

			{lastPage > 1 && posts.length > 0 && (
				<Pagination setPage={setPage} page={page} lastPage={lastPage} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .posts-end-search{

	}
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}
	& .no-posts-count {
		text-align: center;
		font-size: 18px;
		margin-top: 40px;
	}
`;
