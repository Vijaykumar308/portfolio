import "./workExperince.css";
import Heading from '../../Components/Heading/Heading';
import profileIcon from '../../FlatIcons/profileIcon.png';
import Footer from "../../Components/Footer/Footer";

function WorkExperince() {
  return (
    <>
      <Heading title="Work Experince" />
      <div className='workExperince'>
        <div className="careerPorfile">
          <div className="careerPorfileHeading">
            <img src={profileIcon} alt="profile icon" />
            <h1>carrier profile</h1>
          </div>
          <div className="carrerProfileContent">
            <p className="CarrerProfilePara">I'M a <em> Web Developer </em> with 1 years of professional experience in UI design and Overall Web Development, I'm currently living in Amritsar, Punjab.
            I have done bachelor of Computer Application in Amritsar. Having a passion to create awesome website & carrier in web Developement.</p>
          </div>
        </div>

        <section className="experienceSection">
          <div className="experienceHeadingContainer">
            <i className="fa-solid fa-briefcase"></i>
            <h2 className="myExperienceHeading">My Experience</h2>
          </div>

          <div className="workExperience">
          <div className="col">
            <span className="year"> Nov,2022 - April, 2023</span>
            <h1 className="expName">Intership</h1>
            <div className="companyAndDuration">
              <span className="comapnyName">Kochar Tech</span>
              <span>5 Months</span>
            </div>
            <p className="jobDescp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maxime dolore soluta facilis deleniti fugiat alias libero consequuntur, nostrum, officiis provident quas tempora sunt molestias rem quis excepturi hic deserunt minima! Non, eos rem?
            </p>
          </div>  
          <div className="col">
          <span className="year"> May,2022 - Aug, 2023</span>
            <h1 className="expName">Jr. Engineer </h1>
            <div className="companyAndDuration">
              <span className="comapnyName">Kochar Tech</span>
              <span>1+ Year</span>
            </div>
            <p className="jobDescp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maxime dolore soluta facilis deleniti fugiat alias libero consequuntur, nostrum, officiis provident quas tempora sunt molestias rem quis excepturi hic deserunt minima! Non, eos rem?
            </p>
          </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default WorkExperince;