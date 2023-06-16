import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import styled from "styled-components";

const Container = styled.div`
	height: 100%;
	overflow: hidden;

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		height: 44vh;
		max-height: 100%;
		overflow: auto;
		margin: 10px;

		&::-webkit-scrollbar {
			width: 0.5rem;

			&-thumb {
				background-color: rgba(255, 255, 255, 0.6);
				border-right: none;
				border-left: none;
			}
		}

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
`;

export default function Playlists() {
	const [{ token, playlists }, dispatch] = useStateProvider();
	useEffect(() => {
		const getPlaylistData = async () => {
			const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			const { items } = response.data;
			const playlists = items.map(({ name, id }) => {
				return { name, id };
			});
			dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
		};
		getPlaylistData();
	}, [token, dispatch]);
	const changeCurrentPlaylist = (selectedPlaylistId) => {
		dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
	};

	return (
		<Container>
			<ul>
				{playlists.map(({ name, id }) => {
					return (
						<li key={id} onClick={() => changeCurrentPlaylist(id)}>
							{name}
						</li>
					);
				})}
			</ul>
		</Container>
	);
}
