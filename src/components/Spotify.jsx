import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import Notice from "./Notice";

const Container = styled.div`
	max-width: 100vw;
	max-height: 100vh;
	overflow: hidden;
	display: grid;
	grid-template-rows: auto 80vh 15vh;

	.spotify__body {
		display: grid;
		grid-template-columns: 15vw 85vw;
		height: 100%;
		width: 100%;
		// background: linear-gradient(transparent, rgba(0, 0, 0, 1));
		// background-color: rgba(32, 87, 100);
		background-color: black;

		.body {
			height: 100%;
			width: 100%;
			overflow: auto;

			&::-webkit-scrollbar {
				width: 0.5rem;

				&-thumb {
					background-color: rgba(255, 255, 255, 0.6);
					border-right: none;
					border-left: none;
				}
			}
		}
	}
`;

export default function Spotify() {
	const [{ token }, dispatch] = useStateProvider();

	const bodyRef = useRef();
	const [navBg, setNavBg] = useState(false);
	const [headerBg, setHeaderBg] = useState(false);

	const bodyScroll = () => {
		bodyRef.current.scrollTop >= 30 ? setNavBg(true) : setNavBg(false);
		bodyRef.current.scrollTop >= 268 ? setHeaderBg(true) : setHeaderBg(false);
	};

	useEffect(() => {
		const getPlaybackState = async () => {
			const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			});
			dispatch({
				type: reducerCases.SET_PLAYER_STATE,
				playerState: data.is_playing,
			});
		};
		getPlaybackState();
	}, [dispatch, token]);

	return (
		<Container>
			<Notice />
			<div className="spotify__body">
				<Sidebar />
				<div className="body" ref={bodyRef} onScroll={bodyScroll}>
					<Navbar navBg={navBg} />
					<div className="body__containts">
						<Body headerBg={headerBg} />
					</div>
				</div>
			</div>
			<div className="spotify__footer">
				<Footer />
			</div>
		</Container>
	);
}
