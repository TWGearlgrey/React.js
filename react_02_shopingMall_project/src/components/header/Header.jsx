import logo from '../../logo.svg';
import { Link, useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();

    return (
            <nav className="nav">
                <img src={logo} alt="logo" className="logo" onClick={()=>{navigate("/")}}/>
                <div className="tit"  onClick={()=>{navigate("/")}}>
                    SHOOOOP
                </div>
                <div onClick={()=>{navigate("/")}}>Home</div>
                <div onClick={()=>{navigate("/cart")}}>Cart</div>
                <div onClick={()=>{navigate("/about")}}>About</div>
            </nav>
    );
}
export default Header;
