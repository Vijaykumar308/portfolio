import "./projectComp.css";

function projectComp({ img, heading, projectDescription, liveDemoLink,viewCodeLink,isButtonsDisable, techStack }) {
  return (
    <div className="containerFlex">
      <div className="item1">
        <div className="imgWrapper">
          <img src={img} alt="img" />
        </div>
      </div>
      <div className="item2">
        <h2 className="projectNameHeading">{heading}</h2>
        <p className="projectDescription">{projectDescription}</p>
        <div className="techStack"><strong>Tech used:</strong> {techStack} </div>
        { !isButtonsDisable && 
        <>
          <a href={liveDemoLink} target="_blank" rel="noreferrer">
          <button className="btn liveDemoBtn">Live Demo</button>
          </a>
          <a href={viewCodeLink} target="_blank" rel="noreferrer">
            <button className="btn viewCodeBtn">View Code</button>
          </a>
        </>
        }
      </div>
    </div>
  )
}

export default projectComp;

