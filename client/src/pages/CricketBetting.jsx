import "./cricket.css";
import { Link } from "react-router-dom";
const CricketBetting = () => {
  return (
    <>
      <div className="cricket container flex evenly">
        <div className="cricket_hero">
          <h2 className="m-y-4">
            MoneyMaker24: Your Gateway to Thrilling Cricket Action!
          </h2>
          <p>
            Welcome to the MoneyMaker24 Cricket Betting Page, your premier
            destination for an exhilarating cricket betting experience. Whether
            you're a passionate cricket fan or someone looking to add an extra
            layer of excitement to the game, MoneyMaker24 Cricket Betting has
            you covered.
          </p>

          <div className="hero_btn_container">
            <ul>
              <li>
                <Link to="https://wa.me/+917009229689?Hello" target="_blank">
                  Contact Us @ 7009229689
                </Link>
              </li>
              <li>
                <Link to="https://wa.me/+917009229689?Hello" target="_blenk">
                  WhatsApp Us @ 7009229689
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cricket_poster">
          <img src="img_05.jpg" alt="" />
        </div>
      </div>
      <div className="container cricket_body flex fex_direction left">
        <h2>Key Features of MoneyMaker24 Cricket Betting</h2>
        <ol className="become_member ">
          <li>
            Please contact us using the WhatsApp number provided on the link -
          </li>
          <li>
            You will be given a registration form in which you must provide all
            pertinent information such as your complete name, email address,
            current address, country, updated cellphone number, gender, and so
            on.
          </li>
          <li>We will give you Cricket ID.</li>
          <li>Here's how you can get your MoneyMaker24.</li>
        </ol>
      </div>
    </>
  );
};

export default CricketBetting;
