import "./home.css";
import profilePic from "../../Images/profile_pic.jpg";
import { MdVerified } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className='homePage'>
        <div className='profileSection'></div>
        <div className='profileContainer'>
          <div className='profileContant'>
            <div className='profileImage'>
              <img src={profilePic} alt="profile-pic" />
            </div>

            <div className='profileDetials'>
              <h2 className="name">Vijay Kumar <span className="verifiedBadge"><MdVerified /></span> </h2>
              <p>I'm a Web Developer Based in Amritsar.</p>
            </div>
          </div>
          <div className='profileRightSide'>

            <a href="">
              <button className="btn linkedInButton">LinkedIn</button>
            </a>

            <a href="">
              <button className="btn ResumeDownload">Resume</button>
            </a>


          </div>
        </div>

        <section className="homePageAbout">
          <div className="experience">
            <h2>Experience</h2>
            <p>I specialise in UX/UI design, backend technologies & overall web Devlopment</p>
            <hr />
            <h3>About me</h3>
            <p className="para">I am an aspiring web developer with, having excellent problem solving skills. I am quite passionate about learning and being good at what I do.</p>
            <p className="para">
            I consistently demonstrate a can-do attitude and embrace tough challenges with energy and enthusiasm. I am always on the lookout for opportunities to collaborate on new ideas and technologies</p>

              <NavLink to="/about">
                <button className="btn readmore"> Read More</button>
              </NavLink>
          </div>

          <div className="skillsSection">
            <div className="skills">
              <h4>Skills</h4>
              <span className="skills-design">HTML</span>
              <span className="skills-design">CSS</span>
              <span className="skills-design">Javascript</span>
              <span className="skills-design">PHP</span>
            </div>

            <div className="location">  
              <h5>Location</h5>
              <span>India</span>
            </div>

            <div>   
              <h5>Mobile no.</h5>
              <span>+91 8054975142</span>
            </div>

            <div>
              <h5>Email</h5>
              <span>jwvijaykumar@gmail.com</span>
            </div>
            
          </div>
        </section>
      </div>
    </>
  )
}
