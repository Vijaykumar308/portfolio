import "./projectComp.css";
import crm from "../../Images/crm.png";
function projectComp({ flexDirection }) {
  return (
    <div className="containerFlex">
      <div className="item1">
        <div className="imgWrapper">
          <img src={crm} alt="img" />
        </div>
      </div>
      <div className="item2">
        <h2 className="projectNameHeading">Heading of the project</h2>
        <p className="projectDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequuntur blanditiis aliquam magnam qui delectus facere quasi a iure? Nisi omnis, eveniet, ullam provident dolorem nihil delectus cum quibusdam eum nemo recusandae est iusto?</p>
        <button className="btn liveDemoBtn">Live Demo</button>
        <button className="btn viewCodeBtn">View Code</button>
      </div>
    </div>
  )
}

export default projectComp;

