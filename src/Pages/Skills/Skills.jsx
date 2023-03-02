import "./skills.css";
import Heading from '../../Components/Heading/Heading';

import imageName from '../../Images/profile_pic1.jpeg';

function Skills() {
  return (
    <>
    <Heading title="Skills" />
    <div className='skills'>
      <div className="SkillsContainer">
        <div className="skillsItem">
          <img src={imageName} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={imageName} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={imageName} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={imageName} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={imageName} alt="alt"/>
        </div>
      </div>
    </div>
    </>
  )
}
export default Skills;
