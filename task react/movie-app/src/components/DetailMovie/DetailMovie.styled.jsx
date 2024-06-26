import styled from "styled-components";

const StyledDetail = styled.div`
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
	}

	.poster {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.poster img {
		width: 100%;
		height: auto;
		border-radius: 15px;
		max-width: 300px; /* Control the size of the image */
	}

	.info {
		flex: 2;
		padding: 1rem;
	}

	.info h2 {
		font-size: 2rem;
		color: #26a69a;
		margin-bottom: 0.5rem;
	}

	.info h3 {
		font-size: 1.2rem;
		color: #2196f3;
		margin-bottom: 1rem;
	}

	.info p {
		font-size: 1rem;
		color: #757575;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}

	.button {
		display: inline-block;
		padding: 0.8rem 2rem;
		font-size: 1rem;
		color: #fff;
		border: none;
		border-radius: 10px;
		text-decoration: none;
		cursor: pointer;
	}

	.button:hover {
		background-color: #1d7f72;
	}
`;

export default StyledDetail;
