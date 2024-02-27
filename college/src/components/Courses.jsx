import React from "react";


const Courses = ()=> {
    return (
        <>
       <section className="courses-page-container">
          <div className="courses-demo-wrapper">
            <div className="course-text"> 
            <h1> FullStack Web Development Course with placement support </h1>
             <p> Get ready to land your first software job with our comprehensive Full Stack Developer certificate program and stand-out from others with our industry-ready certification. </p>
             </div>
             <div className="book-demo-card">
                <form>
                    <h2> Book a Live Demo</h2>
                    <h2> For Free</h2>
                    <label for="name"> Name </label><br/>  
                    <input type="text" id="name" placeholder="Enter name"/> <br/>
                    <label for="number"> Mobile Number(WhatsApp Number) </label> <br/>
                    <input type="text" id="number" placeholder="Enter Mobile number"/> <br/>
                    <label> Highest Qualification </label> <br/>
                    <select>
                        <option> ----select----</option>
                        <option value="qualification"> Graduation (Completed)</option>
                         <option value="qualification"> Graduation (ongoing)</option>
                         <option value="qualification">Post Graduation (Completed)</option>
                         <option value="qualification">Post Graduation (ongoing)</option>
                         <option value="qualification">12th / intermediate</option>
                         <option value="qualification"> Diplamo</option>
                    </select>  <br/>
                    <label>By proceeding further, I agree to the Terms & Conditions and Privacy Policy of Company</label> <br/>
                    <button> Book My Demo</button>
                </form>
             </div>
          </div>
          <div className="course-overview-container">
             <div className="course-overview-text">
                <h1> FullStact course overview</h1>
                <p> This online Java Full Stack Developer course helps you build industry-relevant skills with a reverse engineered curriculum which is designed based on the companies current skill requirements.
                    By the end of this course, you’ll be equipped to build an end-to-end application, test and deploy code, and much more.
                </p>
             </div>
             <div className="course-eligibility">
                <h1> Eligibility </h1>
                <ul>
                    <li> Any Degree BE,B.Tech,Bsc,BCom,BBA</li>
                    <li> All IT & Non-IT Branches </li>
                    <li> No prior coding knowledge required </li>
                    <li> No CGPA cut-off. Carrer gap is not a barrier </li>
                </ul>
             </div>
             <div className="carrer-steps-container">
                <h1> Start Your IT carrer in 3 Steps</h1>
                <div className="carrer-step-card-container">
                    <div className="carrer-step-card">
                        <p className="step1"> Step1 </p>
                        <h2> Fundamentals </h2>
                        <p> Duration 2 Months </p>
                        <p> 3 Hr's classes & 3Hr's Lab per day.</p>
                        <img src="https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_335657-1825.jpg?w=740&t=st=1709017057~exp=1709017657~hmac=16a8b16832f8058df53bc55cb73833aba13457c86685dd7c845aa97cef4bf76d" alt="carrer-img" className="carrer-img"/>
                    </div>
                    <div className="carrer-step-card">
                        <p className="step2"> Step2 </p>
                        <h2> JS & React Specialization </h2>
                        <p> Duration 6 Months </p>
                        <p> Fresher salary in india : 3LPA - 12LPA</p>
                        <img src="https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_335657-1825.jpg?w=740&t=st=1709017057~exp=1709017657~hmac=16a8b16832f8058df53bc55cb73833aba13457c86685dd7c845aa97cef4bf76d" alt="carrer-img" className="carrer-img"/>
                    </div>
                    <div className="carrer-step-card">
                        <p className="step3"> Step3 </p>
                        <h2> End-to-End Placement Support </h2>
                        <p> upto 16months from date of joining  </p>
                        <p> 3 Hr's classes & 3Hr's Lab per day.</p>
                        <img src="https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_335657-1825.jpg?w=740&t=st=1709017057~exp=1709017657~hmac=16a8b16832f8058df53bc55cb73833aba13457c86685dd7c845aa97cef4bf76d" alt="carrer-img" className="carrer-img"/>
                    </div>
                </div>
             </div>
          </div>
       </section>
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

export default Courses;