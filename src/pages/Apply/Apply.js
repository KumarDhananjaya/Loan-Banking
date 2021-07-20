import React from 'react'
import './Apply.css';
import { Link } from "react-router-dom";
const Apply = () => {
  return (
  <div className="apply">
    <div className="applycard">
      <img src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/bank_660x450_092319072500.jpg" alt=" " />
      <p className="para">
      <h2><i> Welcome From Team!</i></h2>
      <br/>  HERE'S WHAT'S COMING UP  <br/>In the Application we'll learn more about you and what <br/>
       kind of loan you're looking for <br/> 
       Lets Get Started!
      </p>
   
      <button className="Start">
        <Link className="link" to="/application">
          Start My Application
        </Link>
      </button>
    </div>
  </div>
    
  )
} 
export default Apply;