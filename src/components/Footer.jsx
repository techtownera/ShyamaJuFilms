import React from "react";
import './Footer.css';
import {SocialIcon} from 'react-social-icons';
import ReactDOM from "react-dom";
import youtube from '../assets/youtube.png'
import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png';

const Footer = () => {

    // const component = <SocialIcon url="https://www.google.com" network="google" /> 

    // ReactDOM.createRoot(document.body).render(component);

    return(

        <>

        <div className="footer">
            
          <div className="left">
          <ul>

            <li>ShyamaJu Productions |</li>
            <li>Noida uttarpradesh India</li>
            
          </ul>
          </div>

          <div className="right">
          
          <ul className="logolist">
          <li className="logos"><img src={youtube} alt="youtube" /></li>
          <li className="logos"><img src={instagram} alt="facebook"/></li>
          <li className="logos"><img src={facebook} alt="instagram"/></li>
         </ul>
         </div>
          
         

        </div>

        {/* <SocialIcon network="google"/> */}

        <hr></hr>



        </>
    )


}

export default Footer;