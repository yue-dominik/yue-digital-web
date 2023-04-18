import { Link } from "react-router-dom"
import logo from './logo.svg';


export const Navbar =()=>{
      return (
            <div className="navbar">
                  <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                  <Link to="/nephtyke" className="navbar-link">Nephtyke</Link>
                  <Link to="/nephtyke-video" className="navbar-link">Video</Link>
            </div>
      )
}
