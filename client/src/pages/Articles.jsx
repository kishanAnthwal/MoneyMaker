import "./articles.css";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
const Articles = () => {
  return (
    <section className="article container flex">
      <div className="side_bar">
        <div className="calender_icon">
          <SlCalender/>
        </div>
        <div className="date">
        <p>10</p>
        </div>
        <div className="mounth">
          <p>Feb</p>
        </div>
        <div className="day">
        <p>Monday</p>
        </div>
        <div className="year">
          <p>2025</p>
        </div>
      </div>
      <div className="article_content">
        <div className="goto flex left">
          <p>
            <Link to="/blog">
              Post
              <FaAnglesRight />
            </Link>
          </p>
          <p>
            <Link to="">
              Baby Caretaker Service in India
              <FaAnglesRight />
            </Link>
          </p>
        </div>
        <div className="article_header">
          <h2>Indian Premier League (IPL): The Ultimate Cricketing Extravaganza </h2>
          <h3>MoneyMaker24 Match Prediction – IPL 2025</h3>
          <p>
          The IPL has transformed cricket into a high-stakes, globally followed sport. By addressing key challenges and embracing innovation, the league can continue to grow and inspire the next generation of cricketers and fans worldwide
          </p>
        </div>
        <div className="poster">
          <img src="/img_07.jpeg" alt=""/>
        </div>
        <div className="upcomming_articles flex">
          <h4>Upcomming Articles</h4>
          <Link to="/blog">View all posts</Link>
        </div>
        <div className="upcomming_articles_list">
         
        </div>

        <div className="article_body">
          <div className="article_title">
            <h3>Popularity and Global Appeal of IPL Cricket</h3>
          </div>
          <ol>
            <li>
            Massive Fan Base: The Indian Premier League (IPL) is one of the most popular and widely watched cricket leagues in the world. Since its inception in 2008, the IPL has captured the hearts of millions of cricket fans across the globe, bringing together top international players and emerging local talent.
            </li>
            <li>
            Entertainment and High-Intensity Matches: The league’s fast-paced Twenty20 (T20) format ensures that matches are filled with excitement, big hits, and last-minute finishes, making it a thrilling experience for both fans at the stadium and viewers at home. The combination of sports and entertainment, including celebrity team owners and cheerleading squads, adds to the spectacle.
            </li>
            <li>
            Opportunities for Young Players: The IPL serves as a platform for young cricketers to showcase their talent on an international stage. Many players who have performed well in the IPL have gone on to represent their national teams, proving the league’s role in talent development.
            </li>
            <li>
            Global Cricketing Community: The league attracts players from around the world, fostering camaraderie and healthy competition among international stars. This has helped create a more connected and unified global cricketing community.
            </li>
            
          </ol>
          <div className="para_block">
            <div className="article_title">
              <h3>Challenges Faced by IPL Cricket</h3>
            </div>
            <ol>
              <li>Injury and Fatigue: The tight schedule and high-intensity matches often lead to player injuries and burnout. Many international players face a dilemma between participating in the IPL and managing their fitness for national commitments.</li>
              <li>Match Fixing and Corruption: Over the years, the league has faced issues related to match-fixing and corruption, which have raised questions about its integrity. The Board of Control for Cricket in India (BCCI) has introduced strict anti-corruption measures to tackle these issues.</li>
              <li>Scheduling Conflicts: The IPL schedule sometimes clashes with international cricket tournaments, forcing players to choose between national duty and franchise commitments. This can create tension between cricket boards and IPL franchises.</li>
              <li>Financial Pressure: While the IPL generates huge revenue, the pressure to maintain profitability and secure sponsorship deals remains high. Teams invest heavily in player auctions, and poor performance can lead to financial losses and fan disappointment.</li>
            </ol>
          </div>
          <div className="para_block">
            <div className="article_title">
              <h3>Star Power and Global Appeal</h3>
            </div>
            <p>
            One of the key factors behind the IPL's success is the presence of cricketing legends and global superstars. Players like Virat Kohli, MS Dhoni, Rohit Sharma, Chris Gayle, AB de Villiers, and David Warner have left an unforgettable mark on the tournament. The involvement of international players and coaches has elevated the level of competition, making the IPL one of the most-watched sporting events globally.
            </p>
          </div>

          <div className="para_block">
            <div className="article_title">
              <h3>Fan Engagement and Entertainment </h3>
            </div>

            <p>
            The IPL has revolutionized fan engagement through social media, live streaming, and interactive content. Fans actively participate in fantasy leagues, vote for their favorite players, and engage with teams on social media platforms. The combination of high-octane cricket, cheerleaders, music, and stadium atmosphere creates a carnival-like experience for spectators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
