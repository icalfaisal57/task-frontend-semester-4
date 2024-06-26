import styled, { css } from "styled-components";

// Buat komponen Button
const Button = styled.button`
	padding: 0.8rem 2rem;
	border: none;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;
	// Akses props variant
	background-color: ${({ $variant, theme }) =>
		theme.colors[$variant] || theme.colors.primary};
	// jika ada css props full, maka tambah css baru
	${({ $full }) =>
		$full &&
		css`
			display: block;
			width: 100%;
		`}
	// props size
	${({ size }) => {
		switch (size) {
			case "sm":
				return css`
					font-size: 0.8rem;
					padding: 0.2rem 0.5rem;
				`;
			case "lg":
				return css`
					font-size: 1.3rem;
					padding: 0.5rem 1rem;
				`;
			case "md":
			default:
				return css`
					font-size: 1rem;
					padding: 0.5rem 1rem;
				`;
		}
	}}
`;

// Export
export default Button;
