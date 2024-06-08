import StyledFooter from "./Footer.styled";

function Footer() {
	return (
		<StyledFooter>
			<div className="container">
				<footer className="footer">
					<h2 className="footer__title">Movie App</h2>
					<p className="footer__author">Create by Ahmad Faisal</p>
				</footer>
			</div>
		</StyledFooter>
	);
}
export default Footer;