import React from "react";
import "../App.css";

const Home = () =>  {
    return (
        <section> 
        <div className="Home-container">
            <div className="Home-content-wrapper">
                <h1> World Biggest College</h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, incidunt!</p>
                <button> View Details </button>
            </div>
        </div>
        <div className="Home-about-container">
              <div className="Home-about-card">
                <div className="about-text-card">
                    <h1> About US </h1>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam mollitia possimus amet suscipit nesciunt sint quibusdam dolor architecto, nulla, facilis quia vitae recusandae officiis ad repellendus animi sapiente magni repellat?</p>
                    <button className="about-button"> Know More </button>
                </div>
                <img src="https://img.freepik.com/free-photo/vertical-shot-smiling-happy-queer-girl-sitting-park-bench-working-remote-from-outdoors-using-laptop-freelancer-doing-her-job-laughing-enjoying-fresh-spring-air_197531-30550.jpg?w=360&t=st=1709015631~exp=1709016231~hmac=062047990136f7f963e9c16b57986b884734964c7b5b7344b483378faaa1b3e5" alt="abt-img" className="about-img"/>
              </div>
        </div>
        <div className="course-container">
           <div>
               <h1 style={{textAlign:"center"}}> Courses</h1>
               <p style={{textAlign:"center"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, vitae.</p>
           </div>
           <div className="course-card-container"> 
             <div className="course-card">
                   <img src="https://img.freepik.com/free-vector/cross-platform-frameworks-abstract-concept-illustration_335657-1825.jpg?w=740&t=st=1709017057~exp=1709017657~hmac=16a8b16832f8058df53bc55cb73833aba13457c86685dd7c845aa97cef4bf76d" alt="" className="course-img"/>
                   <div>
                    <h1> FrontEnd Development</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sit?</p>
                   </div>
             </div>
             <div className="course-card">
                   <img src="https://img.freepik.com/free-vector/application-programming-interface-concept-illustration_114360-9235.jpg?w=740&t=st=1709017437~exp=1709018037~hmac=c38d843ed5fb6ea624d0c1b7fbb86b2558378a645d32a0861e7e8b3f3daf1255" alt="" className="course-img"/>
                   <div>
                    <h1> BackEnd Development</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sit?</p>
                   </div>
             </div>
             <div className="course-card">
                   <img src="https://img.freepik.com/free-vector/programming-languages-learning-software-coding-courses-website-development-class-script-writing-it-programmers-cartoon-characters_335657-789.jpg?w=740&t=st=1709017673~exp=1709018273~hmac=4d629f7fbab48b7230e77ffd06cae24f09a96fb181fcf4600d1b46369326a4e4" alt="" className="course-img"/>
                   <div>
                    <h1> MERN Development</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sit?</p>
                   </div>
             </div>
           </div>
        </div>
        <div id="contact" className="contact-container">
            <div>
                <h1 style={{textAlign:"center"}}> Contact Us </h1>
                <p style={{textAlign:"center"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="contact-card">
                <img src="https://img.freepik.com/free-vector/flat-illustration-secretary-s-day-celebration_52683-108362.jpg?w=740&t=st=1709017971~exp=1709018571~hmac=a7d126165ff89356945511be5a50fa923277dd91025df5d6219ed44bb0d398a7" alt="contact" className="contact-img"/>
                <div className="contact-form-container">
                    <form>
                        <input type="text" placeholder="Enter your name"/>
                        <input type="text" placeholder="Enter mobile number"/>
                        <textarea rows="8" cols="12" placeholder="Your message...."/>
                        <button> Send </button>
                    </form>
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
        </section> 

       
    )
}

export default Home;