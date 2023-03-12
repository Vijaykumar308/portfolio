import "./aboutMe.css";
import profile_pic from "../../Images/profile-pic.jpg";
import Heading from '../../Components/Heading/Heading';
import Footer from "../../Components/Footer/Footer";

import {AiOutlineMail} from "react-icons/ai";
import {BiPhone} from "react-icons/bi";
export const AboutMe = () => {
  return (
    <>
      <Heading title="About Me" />
      <div className='aboutMe'>
        <div className="main">
          <div className="imageContainer">
            <img src={profile_pic} alt="my-image" />
          </div>

          <div className="contantAboutMe">
            <h1 className="knowMeMore">Know Me more</h1>
            <hr />
            <h2 className="aboutMeHeading">1+ Year Of Experince in Web Devlopment. </h2>
            <p className="aboutMePara">
              I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="aboutMePara">Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
          </div>
        </div>
        

      {/* <div className="aboutMeSection">
        <h2>Contact Me @</h2>
        <div className="flex-container">
            <h3><AiOutlineMail className="aboutMeIcon"/> jwvijaykumar@gmail.com</h3>
            <h3><BiPhone className="aboutMeIcon"/> +91 8054975142</h3>
        </div>
      </div> */}
      </div>
    </>
  )
}
