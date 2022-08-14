import DarkModeSwitch from "./DarkModeSwitch";
import Footer from "./Footer";
import Home from "./Home";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <DarkModeSwitch />
            <Home />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;