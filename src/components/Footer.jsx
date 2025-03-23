import "./footer.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="container">
      <hr className="divider" />
      <div className="top_footer flex evenly">
        <div className="footer_left">
          <ul className="flex gap_20 ">
            <div className="col">
              <li>
                <Link to="/about" className="flex center m-y-4">About</Link>
              </li>
              <li>
                <Link to="/contact" className="flex center m-y-4">Contact</Link>
              </li>
              <li>
                <Link to="/cricketbetting" className="flex center m-y-4">Criket Betting</Link>
              </li>
            </div>
            <div className="col">
              <li> 
                <Link to="/privacy" className="flex center m-y-4">Privacy</Link>
              </li>
              <li>
                <Link to="/condition" className="flex center m-y-4">Terms and Condition</Link>
              </li>
              <li>
                <Link to="/disclamer" className="flex center m-y-4">Disclaimer</Link>
              </li>
            </div>
            <div className="col m-y-4">
              <li className="flex center">
                <Link to="/blog" className="flex center m-y-4">Blog</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="footer_right">
          <h3>Follow us on social media</h3>
          <ul className="flex gap_20 m-y-4">
           
            <li><Link to=""><FaInstagram/></Link></li>
          
            <li><Link to="https://wa.me/+917009229689?Hello" target="_blenk"><IoLogoWhatsapp/></Link></li>
            
            <li><Link to=""><FaXTwitter/></Link> </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="copy_right">
        <p>
          Copyright © 2024 MoneyMaker24.com. All rights reserved. Unauthorized
          reproduction or distribution of any content on this website is
          prohibited.
        </p>
      </div>
    </footer>
  );
};
