import './Skills.css'
import { Element } from 'react-scroll';
import pythonIcon from '../../Assets/Images/python-icon.png'
import htmlIcon from '../../Assets/Images/html5-icon.png'
import html5Icon from '../../Assets/Images/html5-icon.png'
import springIcon from '../../Assets/Images/spring-icon.png'
import javaIcon from '../../Assets/Images/java-icon.png'
import javascriptIcon from '../../Assets/Images/javascript-icon.png'
import postmanIcon from '../../Assets/Images/postman-icon.png'
import gitIcon from '../../Assets/Images/git-icon.png'
import githubIcon from '../../Assets/Images/github-icon.png'
import bashIcon from '../../Assets/Images/bash-icon.png'
import mysqlIcon from '../../Assets/Images/mysql-icon.png'
import reactjsIcon from '../../Assets/Images/react-js-icon.png'
import awsIcon from '../../Assets/Images/aws-icon.png'


function Skills(){
    return (
        <Element name='skills'>
            <section className="skills-section">
                <h2>Skills</h2>
                <div className="skills-container">
                   
                    <div className="skills-item">
                    <i class="fa-brands fa-css3"></i>
                    <h2>CSS</h2>
                    </div>
                    <div className="skills-item">
                        <img src={javascriptIcon} alt="" />
                        <h2>JavaScript</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-java"></i>
                    <h2>Java</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-python"></i>
                    <h2>Python</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-react"></i>
                    <h2>ReactJs</h2>
                    </div>
                    <div className="skills-item">
                    <i class="fa-brands fa-git-alt"></i>
                    <h2>Git</h2>
                    </div>
                    
                    {/* <div className="skills-item">
                        <img src={postmanIcon} alt="" />
                        <h2>Postman</h2>
                    </div> */}

                
                <div className="skills-item">
                    <i class="fa-brands fa-github"></i>
                    <h2>Github</h2>
                    </div>
                    {/* <div className="skills-item">
                        <img src={bashIcon} alt="" />
                        <h2>Bash</h2>
                    </div>
                    <div className="skills-item">
                        <img src={awsIcon} alt="" />
                        <h2>AWS</h2>
                    </div> */}
                    <div className="skills-item">
                        <img src={springIcon} alt="" />
                        <h2>Spring Boot</h2>
                    </div>
                    <div className="skills-item">
                        <img src={mysqlIcon} alt="" />
                        <h2>MySQL</h2>
                    </div>
                    <div className="skills-item">
                        <i class="fa-brands fa-html5"></i>
                        <h2>HTML</h2>
                    </div>

                </div>
            </section>
        </Element>
    )
}
export default Skills;