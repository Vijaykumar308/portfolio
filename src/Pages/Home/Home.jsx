import "./home.css";
import profilePic from "../../Images/profile_pic.jpg";
import { MdVerified } from "react-icons/md";
import {FaReact, FaServer,FaDatabase} from "react-icons/fa";
import {BiServer} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import {HiLocationMarker} from 'react-icons/hi';
import {ImMobile} from 'react-icons/im';
import {AiOutlineMail} from 'react-icons/ai';
export const Home = () => {
  return (
    <>
      <div className='profileSection'></div>
      <div className='homePage'>
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
            <p className="para">I am an aspiring web developer with, having 1+ year of industrial experience. I am quite passionate about learning & exploring the tech related stuff and Being Good At What I Do.</p>
            <p className="para">
            My name is <strong>VIJAY KUMAR</strong>. I have completed Bachelor of Computer Application from G.N.D.U Amritsar (Punjab). I'm always on the lookout for opportunities to collaborate on new ideas & tech related stuff.</p>

              <NavLink to="/about">
                <button className="btn readmore"> Read More</button>
              </NavLink>
          </div>

          <div className="skillsSection">
            <div className="skills">
              <h4>Tech Skills</h4>
              <span className="skills-design">React</span>
              <span className="skills-design">Javascript</span>
              <span className="skills-design">PHP</span>
              <span className="skills-design">SQL</span>
              <span className="skills-design">HTML</span>
              <span className="skills-design">CSS</span>
              <span className="skills-design">Git</span>
              <span className="skills-design">Github</span>
            </div>

            <div className="location">  
              <h5>Location</h5>
              <span><HiLocationMarker/></span>
              <span>Amritsar (Punjab), India</span>
            </div>

            <div>   
              <h5>Mobile no.</h5>
              <span><ImMobile/></span>
              <span>+91 8054975142</span>
            </div>

            <div>
              <h5>Email</h5>
              <span><AiOutlineMail/></span>
              <span>jwvijaykumar@gmail.com</span>
            </div>
            
          </div>
        </section>

        <div className="technologies">
          <h1>Technologies</h1>
          <p>I've worked with a range a technologies in the web development world. From Front-end To Back-end.</p>
          <div className="flex">
            <div className="item frontend">
              <div className="tech-icon"><FaReact/></div>
              <h3>Front-End</h3>
              <span className="description">Experiece with HTML CSS, React.js</span>
            </div>

            <div className="item backend">
            <div className="tech-icon"><BiServer/></div>
              <h3>Back-End</h3>
              <span className="description">Experiece with PHP & mySQL</span>
            </div>

            <div className="item tools">
              <div className="tech-icon"><FaDatabase/></div>
              <h3>Database</h3>
              <span className="description">Experiece with MySQL, Postgres.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
