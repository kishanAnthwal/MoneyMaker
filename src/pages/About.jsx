import "./about.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container">
      <section className="about">
        <div className="page_header">
          <h2>About us</h2>
        </div>
        <div className="page_content">
          <div className="page_title">
            <h4>
              Welcome to MoneyMaker24 - Unveiling the Essence of Excellence:
            </h4>
          </div>
          <p>
            MoneyMaker24 is a leading cricket betting and trading platform,
            operating successfully since 2010. It stands as one of the largest
            and most trusted book exchange platforms, second only to Mahadev's
            book. What sets us apart is our straightforward and hassle-free
            deposit and withdrawal process, making it easier for users to manage
            their funds. Owned and operated by MoneyMaker24, we provide support
            and communication exclusively through WhatsApp.
          </p>

          <div className="page_title">
            <h4>Who We Are</h4>
          </div>
          <p>
            At MoneyMaker24, we redefine the online gaming experience by
            combining skill with opportunity. Established with a mission to
            elevate online gaming in India, we offer a secure and reliable
            platform where users can engage in a variety of games and betting
            options confidently.
          </p>

          <div className="page_title">
            <h4>Built on Trust</h4>
          </div>
          <p>
            Trust is the foundation of MoneyMaker24. We prioritize user security
            and transaction transparency, ensuring that every payout, big or
            small, is handled promptly and securely. Our platform is designed to
            provide a safe and reliable experience at every stage of your gaming
            journey.
          </p>

          <div className="page_title">
            <h4>Be Part of the Reddy Anna Book Community</h4>
          </div>
          <p>
            Joining MoneyMaker24 means becoming part of a vibrant gaming
            community that celebrates every win. Our customer support team is
            available through Live Chat, Telegram, and Facebook, ensuring you
            have the assistance you need whenever you need it.
          </p>

          <div className="page_title">
            <h4>Why Choose MoneyMaker24</h4>
          </div>

          <ul>
            <li><span>Trusted Platform </span>– Secure and transparent transactions with a focus on user trust.</li>
            <li><span>Wide Range of Games </span>– From sports betting to live dealer games, we offer an extensive selection.</li>
            <li><span>Innovative Experience</span> – Powered by the latest gaming technology for a seamless experience. </li>
            <li><span>Convenience at Its Best</span> – Easy-to-use interface, secure payment options, and fast withdrawals.</li>
          </ul>
        </div>

        <div className="hero_btn_container ">
        <ul className="flex">
          <li><Link to="https://wa.me/+917009229689?Hello" target="_blank">Open Your Demo Account</Link></li>
          <li><Link to="https://wa.me/+917009229689?Hello" target="_blank">Contact Us Now</Link></li>
        </ul>
      </div>
      </section>
    </div>
  );
};

export default About;
