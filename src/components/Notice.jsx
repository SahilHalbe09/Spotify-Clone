import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 44px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	background-color: #9bcdd2;

	.notice {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		font-weight: bold;
		color: black;

		a {
			&:hover {
				color: blue;
				text-decoration: none;
			}
		}

		.notice__footer {
			font-weight: normal;
		}
	}
`;

function Notice() {
	return (
		<Container>
			<div className="notice">
				<p className="text">
					Important: Some API calls are olny possible with <b>Premium Account</b> as per{" "}
					<a href="https://developer.spotify.com/documentation/web-api" target="_blank" rel="noreferrer">
						Spotify Docs
					</a>
				</p>
				<p className="notice__footer">
					You can see the preview video of entire app{" "}
					<b>
						<a href="">Here</a>
					</b>
				</p>
			</div>
		</Container>
	);
}

export default Notice;
