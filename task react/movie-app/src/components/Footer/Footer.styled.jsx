import styled from "styled-components";

const StyledFooter = styled.div`
	/* Small Screen */
	.container {
		background-color: #4361ee;
		color: #fff;
		padding: 1rem;
		text-align: center;
	}

	.footer__title {
		margin-bottom: 1rem;
	}

	.footer__author {
		margin-bottom: 1rem;
	}

	/* Medium Screen */
	@media (min-width: 768px) {
		.container {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}

	/* Large Screen */
	@media (min-width: 992px) {
		.container {
			margin: auto;
		}
	}
`;
export default StyledFooter;