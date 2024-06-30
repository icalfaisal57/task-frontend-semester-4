import styled from "styled-components";

const StyledMovie = styled.div`
	margin-bottom: 1rem;
	img {
		border-radius: 25px;
		max-width: 100%;
		height: auto;
		margin-bottom: 1rem;
	}
	h3 {
		color: #4361ee;
		font-size: 1.95rem;
		margin-bottom: 0.5rem;
	}
	p {
		color: #64748b;
	}
	@media (min-width: 768px) {
		flex-basis: 50%;
		padding: 1rem;
	}
	@media (min-width: 992px) {
		flex-basis: 20%;
		padding: 1rem;
	}
`;
export default StyledMovie;