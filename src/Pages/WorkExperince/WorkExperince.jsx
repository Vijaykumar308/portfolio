import "./workExperince.css";
import Heading from '../../Components/Heading/Heading';
import profileIcon from '../../FlatIcons/profileIcon.png';

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
            <br/>Having a passion to create awesome website & carrier in web Developement.</p>
          </div>
        </div>

        <section className="experienceSection">
          <div className="experienceHeadingContainer">
            <i className="fa-solid fa-briefcase"></i>
            <h2 className="myExperienceHeading">My Experience</h2>
          </div>

          <div className="workExperience">
          <div className="col">
          <span className="year"> May,2022 - present</span>
            <h1 className="expName">Jr. Engineer </h1>
            <div className="companyAndDuration">
              <span className="comapnyName">Kochar Tech</span>
              <span>1+ Year</span>
            </div>
            <p className="jobDescp">
              I have almost 1+ Year of Experience in kochar tech where I work as a full stack developer In LAMP Stack. I do work on a employee management project in which php's cakePHP framework is used as technologies and database used as postgres. I work under a senior software engineer where I've to develop the featues in the existing module or write the new modules as per the requirements.  
            </p>
            <p className="jobDescp">
              Apart from this, I also work upon CRM which is a open source platform. In this CRM, I've to develope the whole featurs and functionality of the CRM whoes requirements given by the client. Since the CRM has an open source therefore, I've to fixed the issue and bugs of its as well. <br/>
              The tech is used in this CRM is backbone Js, PHP & MySQL.
            </p>
          </div>
          <div className="col">
            <span className="year"> Nov,2022 - April, 2023</span>
            <h1 className="expName">Intership</h1>
            <div className="companyAndDuration">
              <span className="comapnyName">Kochar Tech</span>
              <span>3 Months</span>
            </div>
            <p className="jobDescp">
              In 2021, I got Internship from kochar tech where I got opportunities to work with senior software developers  
            </p>
            <p className="jobDescp">
              Here, I learned about PHP and postgres also I got introduced by some new tools such as jira, CRM, Notations, etc which is helpfull to determine our work process.
            </p>
          </div>  
          </div>
        </section>
      </div>
    </>
  )
}

export default WorkExperince;