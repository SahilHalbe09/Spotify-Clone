import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateProvider";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	// padding-top: 1rem;
	height: 5rem;
	position: sticky;
	top: 0;
	transition: 0.3s ease-in-out;
	background-color: ${({ navBg }) => (navBg ? "rgba(7, 7, 7, 0.7)" : "#121212")};
	border-radius: ${({ navBg }) => (navBg ? "0" : "12px")};
	margin: 10px;
	margin-left: 0;

	.search__bar {
		background-color: #2a2a2a;
		width: 30%;
		padding: 0.4rem 1rem;
		border-radius: 2rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-left: 15px;

		&:hover {
			background-color: #303030;
			border: 0.3px solid #706f6f;

			input {
				background-color: #303030;
			}
		}

		input {
			border: none;
			height: 2rem;
			width: 100%;
			background-color: #2a2a2a;
			caret-color: #b3b3b3;
			color: white;
			font-weight: bold;

			&::placeholder {
				color: #b3b3b3;
				// font-size: 0.9rem;
			}

			&:focus {
				outline: none;
			}
		}
	}

	.avatar {
		background-color: black;
		padding: 0.3rem 0.4 rem;
		padding-right: 1rem;
		border-radius: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 15px;

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			text-decoration: none;
			color: white;
			font-weight: bold;

			svg {
				font-size: 1.3rem;
				background-color: #282828;
				padding: 0.2rem;
				border-radius: 1rem;
				color: #c7c5c5;
				margin: 5px;
			}
		}
	}
`;

export default function Navbar({ navBg }) {
	const [{ userInfo }] = useStateProvider();

	return (
		<Container navBg={navBg}>
			<div className="search__bar">
				<AiOutlineSearch size={25} color="gray" fontWeight={500} />
				<input type="text" placeholder="What do you want to listen to?" />
			</div>
			<div className="avatar">
				<a href="#">
					<CgProfile />
					<span>{userInfo?.userName}</span>
				</a>
			</div>
		</Container>
	);
}
