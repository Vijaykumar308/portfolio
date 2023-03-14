import "./skills.css";
import Heading from '../../Components/Heading/Heading';

import css from '../../FlatIcons/css.png';
import js from '../../FlatIcons/js.png';
import react from '../../FlatIcons/react.png';

import php from '../../FlatIcons/php.png';
import sql from '../../FlatIcons/sql.png';
import nodejs from '../../FlatIcons/nodejs.png';

import git from '../../FlatIcons/git.png';
import github from '../../FlatIcons/github1.png';
import gitlab from '../../FlatIcons/gitlab.png';


import Footer from "../../Components/Footer/Footer";

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
          <div className="gridItem gridItemImage order-1">
            <div className="imgbox">
              <img src={react} alt="react-img" />
            </div>
            <div className="imgbox">
              <img src={js} alt="js-img" />
            </div>
            <div className="imgbox">
              <img src={css} alt="css-img" />
            </div>
          </div>
          <div className="gridItem gridItemImage order-2">
            <div className="imgbox">
              <img src={php} alt="php-img" />
            </div>
            <div className="imgbox">
              <img src={sql} alt="sql-img" />
            </div>
            <div className="imgbox">
              <img src={nodejs} alt="nodejs-img" />
            </div>
          </div>
          <div className="gridItem gridItemContent">
            <h2>Back End</h2>
            <ul>
              <li className="listItem">Rest APIs with PHP</li>
              <li className="listItem">NPM for package management and scripting. </li>
              <li className="listItem">MYSQL for Database Storage</li>
              <li className="listItem">SQL for data base queries. </li>
            </ul></div>
          <div className="gridItem gridItemContent">
            <h2>Tools</h2>
            <ul>
              <li className="listItem">Git for version control and feature branching</li>
              <li className="listItem">Github  & Gitlab to collabration and open souce controbutions</li>
              <li className="listItem">Vscode & Sublime text Editor </li>
            </ul>
          </div>
          <div className="gridItem gridItemImage order-3">
            <div className="imgbox">
              <img src={git} alt="git-img" />
            </div>
            <div className="imgbox">
              <img src={github} alt="github-img" />
            </div>
            <div className="imgbox">
              <img src={gitlab} alt="gitlab-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Skills;
