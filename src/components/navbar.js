import * as React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg';


export const Navbar =({locale, setLocale})=>{
      return (
            <div className="navbar">
                  <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
                  <Link to="/nephtyke" className="navbar-link">Nephtyke</Link>
                  <Link to="/nephtyke-video" className="navbar-link">Video</Link>

                  <img onClick={() => {setLocale(locale =='ja' ? 'en' : 'ja')}}
                  className={'locale-selector'}
                    src={locale == 'ja' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' : 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png'}
                  />
            </div>
      )
}
