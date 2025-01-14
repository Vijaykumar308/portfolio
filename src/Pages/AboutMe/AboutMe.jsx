import "./aboutMe.css";
import profile_pic from "../../Images/profile-pic.jpg";
import Heading from '../../Components/Heading/Heading';
export const AboutMe = () => {
  return (
    <>
      <Heading title="About Me"/>
      <div className='aboutMe'>
        <div className="main">
          <div className="imageContainer">
            <img src={profile_pic} alt="profileImg" />
          </div>

          <div className="contantAboutMe">
            <h1 className="knowMeMore">Know Me more</h1>
            <hr />
            <h2 className="aboutMeHeading">{new Date().getFullYear() - 2022} Year Of Experience in Software Development. </h2>
            <p className="aboutMePara">
              I am an aspiring web developer having {new Date().getFullYear() - 2022} year of industrial experience in overall Web Development.
            </p>
            <p className="aboutMePara">
              My name is VIJAY KUMAR. I have completed my graduation in Bachelor of Computer Application from G.N.D.U Amritsar (Punjab) in the year of 2018-2021. In final year of my graduation I was prepare myself to get a job ready skills. I learnt HTML CSS javascript and PHP & basics of SQL.
            </p>

            <p className="aboutMePara">
              In the year of 2021, I  got an offer for 6 Months Internship at Kochar tech where I polished my learnt skills with senior software developers.  At the end of Internship, I got an offer to join Kochar tech as a full time employee. Since the May, 2022, I started worked here as a LAMP Stack Developer.
            </p>

            <p className="aboutMePara">
              I almost worked around 8 Months on PHP as a backend developer on a project to maintain and developement in CRM Application. Where I had to made the developement regarding writing the backend services and customizing the CRM applications.
              and after stable of the project, I moved to MERN Stack developement, where I got a role to worked as a frontend Developer,  
            </p>

            <p className="aboutMePara">Other than this, I also worked as a part time programmer trainer where I used to teaches C, C++, OPPS concepts and HTML CSS etc. It was a startup coaching center where I trained almost about 5-8 students.</p>

            <p className="aboutMePara">Apart from this, I enjoyed to play cricket, solve sudoku problems uses the social media platform in my free times.</p>
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
