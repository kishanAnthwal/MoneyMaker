import './blogpost.css'
import { Link } from 'react-router-dom'
import { BiSolidSend } from "react-icons/bi";
import { FaCommentAlt, FaRegThumbsUp, FaRegThumbsDown  } from "react-icons/fa";
import { useState } from 'react';
const BlogPost = () => {
    let [like, setLike] = useState(false)
    let likeToggle = () => {
        setLike(!like)
    }

    return (
        <div className="post_card">
            <div className="img">
                <img src="/img_07.jpeg" alt="" />
            </div>
            <div className="detail">
                <div className="post_title">
                    <h4>Indian Premier League (IPL): The Ultimate Cricketing Extravaganza</h4>
                    <div className="posted_on">
                        <p>10 feb 2025</p>
                    </div>
                </div>
                <div className="post_deception">
                    <p>The IPL has transformed cricket into a high-stakes, globally followed sport. By addressing key challenges and embracing innovation...</p>
                </div>
            </div>
            <div className="post_footer flex">
                <div className="f_left flex">
                    <div className="icons" onClick={likeToggle}>
                        {
                            like ? <FaRegThumbsDown  /> : <FaRegThumbsUp />
                        }
                    </div>
                    <div className="icons">
                        <FaCommentAlt />
                    </div>

                </div>
                <div className="f_right">
                    <Link to="/articles/:126" className='read_more flex'><p>Read More</p> <BiSolidSend /> </Link>
                </div>
            </div>

        </div>
    )
}

export default BlogPost