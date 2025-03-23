import './faq.css'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from 'react'
const FAQ = (props) => {
   let [qna,setQna]=useState(false);
   let collapse=()=>{
    setQna(!qna)
   }
  return (
    <div className='container faq '>
        <h4 className='flex left collapse_icon'> <MdOutlineArrowDropDown onClick={collapse}/> {props.ques}</h4>
        {
        qna?<p>{props.ans}</p>:null
        }
    </div>
  )
}

export default FAQ