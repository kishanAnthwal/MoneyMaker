import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero flex evenly">
      <div className="hero_l">
        <h1>Welcome to MoneyMaker24</h1>

        <h3>India's No.1 sports ID provider since 2010</h3>

        <p>
          Do you want to open your cricket ID online but can't find a
          trustworthy betting platform? Here's a MoneyMaker24 for you. This
          is India's most famous and trusted cricket demo ID platform. 
          MoneyMaker24 is India's largest exchange platform, offering fantastic
          online sports betting with a 24-hour withdrawal service.
        </p>

        <div className="hero_btn_container">
        
          <ul>
            <li><Link to="https://wa.me/+917009229689?Hello" target="_blank">Contact Us @ 7009229689</Link></li>
            <li><Link to="https://wa.me/+917009229689?Hello" target="_blenk">WhatsApp Us @ 7009229689</Link> </li>
          </ul>
        </div>

      </div>

      <div className="hero_r">
        {/* <img src="/img_01.png" alt="img_01"/> */}
      </div>
    </div>
  );
};

export default Hero;
