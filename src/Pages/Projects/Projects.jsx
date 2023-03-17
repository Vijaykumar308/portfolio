import "./projects.css";
import Heading from '../../Components/Heading/Heading';
import crm from "../../Images/crm.png";
import timeCalculator from '../../Images/time-calculator.png'
import ProjectComp from '../../Components/ProjectComp/projectComp';
import employeeManagement from '../../Images/emp-management.png';
function Projects() {
  return (
    <>
      <Heading title="Projects" />
      <div className='projects'>
        <h1>Some Things I’ve Built</h1>
        <ProjectComp
          img={crm}
          heading = "CRM" 
          projectDescription = "I have almost about 1+ year of experince of working on CRM at Kochar Tech. Where I do provide the developement & mantainance to CRM for the operations team, hence I become in house expert on the CRM UI functionality, process & trobuleshooting the existing customization & functionality inside CRM. "
          isButtonsDisable = {true}
          techStack = "HTML CSS Javascript PHP & MySQL"
        />
      
        <ProjectComp
          img={timeCalculator}
          heading = "Time Calculator" 
          projectDescription = "Time calculator is the simple web application which is helpful to calculate time. This application is helpfull where we have to check wether we've completed our weekly hours or not. I created this website for used in organization where we've to complete 45 hr for a week so that we can check our time is fullfilled or not."
          liveDemoLink="https://vijaykumar308.github.io/timeCalculate/"
          viewCodeLink="https://github.com/Vijaykumar308/timeCalculate"
          isButtonsDisable={false}
          techStack = "HTML CSS Javascript"
        />

        <ProjectComp
          img={employeeManagement}
          heading = "Employee Management" 
          projectDescription = "Along with CRM, I'm also contribute in this project under the Senior Software Enginner where my roles and resposibilities are to add features in the existing module of the application and developing the new modules as per the requirements."
          isButtonsDisable = {true}
          techStack = "CakePHP, Database: Postgres"
        />
      </div>
    </>
  )
}
export default Projects;
