import "./projects.css";
import Heading from '../../Components/Heading/Heading';

import ProjectComp from '../../Components/ProjectComp/projectComp';
function Projects() {
  return (
    <>
      <Heading title="Projects" />
      <div className='projects'>
        <h1>Some Things I’ve Built</h1>
        <ProjectComp/>
        <ProjectComp/>
      </div>
    </>
  )
}
export default Projects;
