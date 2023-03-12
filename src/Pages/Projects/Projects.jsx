import "./projects.css";
import Footer from "../../Components/Footer/Footer";
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
          projectDescription = "I have almost about 1+ year of experince of working on CRM at Kochar Tech. Where my role & responsibilities are to Develope CRM for the opeations team. The tech is used in CRM is Javascript, PHP and MySQL."
          isButtonsDisable = {true}
        />

        <ProjectComp
          img={timeCalculator}
          heading = "Time Calculator" 
          projectDescription = "Time calculator is the simple web application which is helpful to calculate time. Bassically, it is not fully time calculator app rather, It is created for a specific use. This website is helpfull where we have to check wether we've completed our weekly hours or not. I created this website for used in organization where we've to complete 45 hr for a week so that we can check our time is fullfilled or not."
          liveDemoLink="https://vijaykumar308.github.io/timeCalculate/"
          viewCodeLink="https://github.com/Vijaykumar308/timeCalculate"
          isButtonsDisable={false}
        />

        <ProjectComp
          img={employeeManagement}
          heading = "Employee Management" 
          projectDescription = "Along with CRM, I'm also contribute in this project under the Senior Software Enginner where my roles and resposibilities are to add features in the existing module of the application and developing the new modules as per the requirements."
          isButtonsDisable = {true}
        />
      </div>
    </>
  )
}
export default Projects;
