import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Header, Footer, Modal } from './components';
import { ERROR } from './constants';
import { Authorization, Registration, Users, Post, Main } from './pages';
import { setUser } from './actions';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

const Page = styled.div`
	padding: 120px 0 20px;
`;

const AppColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	background-color: white;
	width: 1000px;
	height: 100%;
`;

export const Blog = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			return;
		}
		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
