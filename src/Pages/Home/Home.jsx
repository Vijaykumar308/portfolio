import "./home.css";
import profilePic from "../../Images/profile_pic.jpg";
import {MdVerified} from "react-icons/md";

export const Home = () => {
  return (
    <>
      <div className='homePage'>
        <div className='profileSection'>
          <div className='profileContainer'>
            <div className='profileContant'>
              <div className='profileImage'>
                <img src={profilePic} alt="profile-pic" />
              </div>

              <div className='profileDetials'>
                <h2 className="name">Vijay Kumar <span className="verifiedBadge"><MdVerified/></span> </h2>
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
        </div>
      </div>
    </>
  )
}
