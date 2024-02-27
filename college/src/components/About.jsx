import React from "react";

const About = () => {
    return(
        <>
        <div className="about-page-container"> 
            <p className="about-intro">
            Welcome! <br/>
                I'm Name of person, CEO of Company Name Technologies.
                We are on a mission to bridge the gap between industry & academia by rapidly building industry-relevant skills in people.
                For the first time in India, we’ve introduced Industry-Ready Certification (IRC) which represents your industry readiness. We’ve designed programs to help anyone gear up for 4.0 Revolution.
                For students right after Intermediate/12th, get ready for a high-paid job with our Academy. Learn 4 hours/week alongside your academics and become  industry-ready.
                For those looking for a Tech Job, enroll in Intensive program. Learn with a Proven Curriculum and become a software developer.
                For students, we invite you to join India’s Largest Tech Student Community to grow faster with the right ecosystem of forward-thinking and tech-savvy minds.
                ‍Wishing you tremendous success in your career!
                ‍
                Best
            </p>
            <div>
                <h1 style={{textAlign:"center",padding:"2%"}}> Founders </h1>
            <div className="about-founders-container">
                 <div className="founders-card">
                    <img src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?w=740&t=st=1709023425~exp=1709024025~hmac=65ec57340f1fc8008167bc092e8e0b439b0801d5341c8e213b6b7aff620b1c01" alt="avatar" className="avatar"/>
                    <div> 
                    <h1> Name of founder</h1>
                    <p> Qualification</p>
                    </div>
                 </div>
                 <div className="founders-card">
                    <img src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?w=740&t=st=1709023425~exp=1709024025~hmac=65ec57340f1fc8008167bc092e8e0b439b0801d5341c8e213b6b7aff620b1c01" alt="avatar" className="avatar"/>
                    <div> 
                    <h1> Name of founder</h1>
                    <p> Qualification</p>
                    </div>
                 </div>
                 <div className="founders-card">
                    <img src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?w=740&t=st=1709023425~exp=1709024025~hmac=65ec57340f1fc8008167bc092e8e0b439b0801d5341c8e213b6b7aff620b1c01" alt="avatar" className="avatar"/>
                    <div> 
                    <h1> Name of founder</h1>
                    <p> Qualification</p>
                    </div>
                 </div>
            </div>
            </div>
        </div>
        <div className="footer-container">
            <div className="footer-card-container">
                <div className="footer-card">
                      <h1> About </h1>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus consequuntur eligendi cumque at ullam laborum libero eaque enim inventore.</p>
                </div>
                <div className="footer-card">
                      <h1> Menu </h1>
                      <ul>
                        <li> Home </li>
                        <li> About </li>
                        <li> Course </li>
                        <li> Contact </li>
                      </ul>
                </div>
                <div className="footer-card">
                      <h1> Contact Us </h1>
                      <ul>
                        <li> Address : Lorem ipsum  </li>
                        <li> Call : +01 1234567890 </li>
                      </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;