import { useSelector } from 'react-redux';
import { Button } from '../button/button';
import {
	selectModalIsOpen,
	selectModalOnConfirm,
	selectModalText,
	selectModalOnCancel,
} from '../../selectirs';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
position: fixed;
	z-index: 20;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
	}
	& .box {
		position: relative;
		z-index: 30;
		top: 50%;
		transform: translate(0, -50%);
		width: 400px;
		margin: 0 auto;
		text-align: center;
		padding: 0 20px 20px;
		background-color: white;
		border: 3px solid black;
	}
	& .buttons {
		display: flex;
		justify-content: center;
		gap: 10px;
	}
`;
