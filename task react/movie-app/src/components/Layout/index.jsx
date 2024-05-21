import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"
import Container from "../container";

function Layout(props){
    return(<>
        <Navbar></Navbar>
        <main>
            <Container>{props.children}</Container>
        </main>
        <Footer></Footer>
    </>
    )
}
export default Layout;