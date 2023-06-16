import React from "react";
import styled from "styled-components";
import { LuLibrary } from "react-icons/lu";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";

const Container = styled.div`
	background-color: black;
	color: #b3b3b3;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;

	.top__links {
		display: flex;
		flex-direction: column;
		background-color: #121212;
		margin: 10px;
		margin-bottom: 0;
		border-radius: 12px;

		.logo {
			text-align: left;
			margin: 1rem 0;
			margin-bottom: 0;

			img {
				max-inline-size: 60%;
				block-size: auto;
				margin-left: 1rem;
			}
		}

		ul {
			list-style-type: none;
			display: flex;
			flex-direction: column;
			font-weight: 500;
			font-size: 0.9rem;
			gap: 0.8rem;
			padding: 1rem;

			li {
				display: flex;
				align-items: center;
				gap: 0.8rem;
				cursor: pointer;
				transition: 0.2s ease-in-out;

				&:hover {
					color: white;
				}
			}
		}
	}
`;

export default function Sidebar() {
	return (
		<Container>
			<div className="top__links">
				<div className="logo">
					<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="spotify-logo" />
				</div>
				<ul>
					<li>
						<MdHomeFilled size={30} />
						<span>Home</span>
					</li>
					<li>
						<MdSearch size={30} />
						<span>Search</span>
					</li>
					<li>
						<LuLibrary size={30} />
						<span>Your Liabrary</span>
					</li>
				</ul>
			</div>

			<Playlists />
		</Container>
	);
}
