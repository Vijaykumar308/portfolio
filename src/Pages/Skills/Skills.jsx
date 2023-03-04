import "./skills.css";
import Heading from '../../Components/Heading/Heading';

import css from '../../FlatIcons/css.png';
import js from '../../FlatIcons/js.png';
import php from '../../FlatIcons/php.png';
import react from '../../FlatIcons/react.png';
import sql from '../../FlatIcons/sql.png';

function Skills() {
  return (
    <>
    <Heading title="Skills" />
    <div className='skills'>
      {/* <div className="SkillsContainer">
        <div className="skillsItem">
          <img src={react} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={js} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={css} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={php} alt="alt"/>
        </div>
        <div className="skillsItem">
          <img src={sql} alt="alt"/>
        </div>
      </div> */}
      <div className="mySkillsGridContainer">
          <div className="gridItem gridItemContent">
            <h2>Front End</h2>
            <ul>
              <li className="listItem">HTML & HTML 5</li>
              <li className="listItem">Responsive CSS3 with CSS Grid and Flexbox </li>
              <li className="listItem">Modren javascript for interactive, fetching data, and integrating with APIs</li>
              <li className="listItem">Bootstrap 4 for rapid UI development</li>
            </ul>
          </div>
          <div className="gridItem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eius assumenda ad ea voluptatibus odit, repellat exercitationem omnis eum maxime similique ratione consequuntur ipsam nihil facere error. Expedita consectetur tenetur, doloribus facere tempore error fugit sit animi recusandae. Corporis, itaque beatae. Voluptate voluptas nisi quae accusamus earum? Quas minus non distinctio harum deserunt? Quaerat.</div>
          <div className="gridItem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure a vero reprehenderit voluptatem unde ratione error! Itaque ullam nobis hic? Dolor veritatis qui sed expedita! Eveniet rerum quibusdam praesentium, non voluptas accusamus eaque.</div>
          <div className="gridItem gridItemContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa, perspiciatis quia distinctio beatae reiciendis eligendi cupiditate, optio doloribus ut nihil, veritatis rem? Neque, voluptatem officia in cum expedita repellat unde velit veniam fuga.</div>
          <div className="gridItem gridItemContent"></div>
          <div className="gridItem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatum nulla, animi praesentium quod, deleniti neque inventore nobis vel, quaerat explicabo veritatis! Perspiciatis quidem quis asperiores, quia amet quam tempore quo delectus eos voluptatum excepturi eum aliquid harum doloribus necessitatibus veniam. Quia, soluta.</div>
      </div>
    </div>
    </>
  )
}
export default Skills;
