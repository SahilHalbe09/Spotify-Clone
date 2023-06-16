import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	align-content: center;

	input {
		height: 4px;
		appearance: none;
		width: 44%;
		margin: 2px;
		border-radius: 8px;
		transition: 0.2s ease;
		background-color: #5e5e5e;

		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			/* display: none; */
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background-color: #1db954;
		}

		&:hover {
			background: #1db954;
		}

		&::-webkit-slider-thumb:hover {
			background-color: white;
		}
	}
`;

function Volume() {
	const [{ token }] = useStateProvider();
	const setVolume = async (e) => {
		await axios.put(
			"https://api.spotify.com/v1/me/player/volume",
			{},
			{
				params: {
					volume_percent: parseInt(e.target.value),
				},
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			}
		);
	};
	return (
		<Container>
			<input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
		</Container>
	);
}

export default Volume;
