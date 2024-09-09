import logo from '/src/assets/logo.svg'
import Navbutton from './Navbutton';
import './Navbar.css'



export default function Navbar(){
    return(
        <>
        <nav className="navbar fixed-top navbar-transparent">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" className='logo-size' />
                </a>
                <div className="nav-items">
                    <Navbutton label="About us" />
                    <Navbutton label="Contact" />
                </div>
            </div>
        </nav>
        </> 
    );
}
