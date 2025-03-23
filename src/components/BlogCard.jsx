import './blogcard.css'
import { Link } from 'react-router-dom'
const BlogCard = (props) => {
  return (
    <div className="card">
        <div className="card_img">
        <img src={props.img} alt="" />
        </div>
        <div className="card_header">
            <Link to={props.link}>{props.header}</Link>
        </div>
    </div>
  )
}

export default BlogCard