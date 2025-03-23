import './counter.css'
import CountUp from "react-countup";
import { FaSmile, FaTrophy, FaMapMarkerAlt, FaUserShield } from "react-icons/fa";

const Counter = () => {
  const counters = [
    { icon: <FaSmile />, value: 40000, text: "Happy Customers" },
    { icon: <FaUserShield />, value: 2, text: "App" },
    { icon: <FaTrophy />, value: 4, text: "Rating" },
  ];

  return (
    <div className="container flex evenly counter">
      {counters.map((item, index) => (
        <div className="counter_item" key={index}>
          <div className="icon">{item.icon}</div>
          <CountUp start={0} end={item.value} duration={3} delay={0.9} className='counter_number'/>
          <p className='counter_title'>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
