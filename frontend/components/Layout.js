import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
    <div style={{marginTop: 60}}>
        <Header />
        {props.children}
        <Footer />
    </div>
);

export default Layout;
