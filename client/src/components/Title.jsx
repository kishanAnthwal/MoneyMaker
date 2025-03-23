import React from "react";
import { Link } from "react-router-dom";
import './title.css'
const Title = (props) => {
  return (
    <div className="title flex fex_direction">
      <h3>{props.title}</h3>
      <p>{props.dic}</p>
      <div className="hero_btn_container">
        <ul>
          <li><Link to={props.link}>{props.btn}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Title;
