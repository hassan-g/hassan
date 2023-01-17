import './Header.css'
import logo from "../../assets/images/logo.png"
import NavIem, { NavItemDropDown } from '../../components/Nav/NavItem'
import { Link } from 'react-router-dom'
import profile_logo from '../../assets/images/profile-header.jpg'

const Header = ()=>{
    const logoStyle = {
        backgroundColor: '#27292a',
        padding: '8px 10px 8px 20px',
        borderRadius: '23px',
    }
    return(
        <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={logo} />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto" style={{alignItems:'baseline'}}>
                    <NavIem ><Link to="/" className="nav-link">Home</Link></NavIem>
                    <NavIem ><Link to="/Browser" className="nav-link">Browser</Link></NavIem>
                    
                    <NavIem><Link to="/Details" className="nav-link">Details</Link></NavIem>
                    <NavIem><Link to="./Profile" className="nav-link" style={logoStyle}>Profile <img src={profile_logo} style={{borderRadius:'50%',maxHeight:'30px'}}/></Link></NavIem>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Header