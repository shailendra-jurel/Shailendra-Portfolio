import './Projects.css'
import spotifyProject from '../../Assets/Images/SpotifyProject.png'
import github from '../../Assets/Images/github-logo.png';
import link from '../../Assets/Images/external-link.png'
import QuizApp from '../../Assets/Images/QuizApp.png'
import { Element } from 'react-scroll';
import portfolio from "../../Assets/Images/Portfolio-img.png"

function Projects(){
    return (
        <Element name='projects'>
            <section className="project-section">
            <h1 className='project-section-header'>Projects</h1>
            <div className="project-section-projectCards">
            <div className="projectCard" id='portfolio-project'>
<h2 className="project-title">Portfolio</h2>
<img id="developer-folio" className="project-demoView" src={portfolio} alt="" />
<div className="project-links-description">
    <div className="project-description">


Welcome to the digital playground where creativity meets code! Here, HTML, CSS, and ReactJS unite to sculpt captivating online experiences. Get ready to journey through a realm of interactive wonders, where responsive designs and dynamic content reign supreme. Explore my portfolio, a fusion of artistry and innovation, showcasing a kaleidoscope of personal and professional projects. Ready to inject some pizzazz into your next endeavor? Let's ignite the digital frontier together!                        </div>
    <div className="project-skills-links">
        <div className="project-skills">
            <div className='btn'>JavaScript</div>
            <div className='btn'>REACT</div>
            <div className='btn'>CSS</div>
        </div>
        <div className="project-links">
          <a href="https://github.com/shailendra-jurel/Shailendra-Portfolio" className="github-icon"><i class="fa-brands fa-github"></i></a>
          <a href=' ' className='deployed-link'><i class="fa-solid fa-link"></i></a>
        </div>
    </div>
</div>
</div>
                
                <div className="projectCard">
                    <h2 className="project-title">TicTacToe Game</h2>
                    <img id="quiz-app" className="project-demoView" src={QuizApp} alt="" />
                    <div className="project-links-description">
                        <div className="project-description">
                        Presenting my Tic Tac Toe marvel, meticulously fashioned with HTML, CSS, and JavaScript. Engage in this timeless clash of wits with elegance and simplicity. Featuring a sleek design, fluid gameplay, and effortless controls, it's a gaming experience redefined. Are you prepared to outmaneuver your opponent and claim triumph? Let the games commence!                        </div>
                        <div className="project-skills-links">
                            <div className="project-skills">
                                <div className='btn'>JavaScript</div>
                                <div className='btn'>HTML5</div>
                                <div className='btn'>CSS</div>
                            </div>
                            <div className="project-links">
                              <a href="https://github.com/shailendra-jurel/TicTacToe_Shailendra" className="github-icon"><i class="fa-brands fa-github"></i></a>
                              <a href=' /' className='deployed-link'><i class="fa-solid fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <h2 className="project-title">Music Player</h2>
                    <img id="spotifyProject" className="project-demoView" src={spotifyProject} alt="" />
                    <div className="project-links-description">
                        <div className="project-description">

Dive into the beats with my custom-built music player! Crafted with HTML, CSS, and JavaScript, this sleek interface offers seamless tunes at your fingertips. Experience dynamic playlists, smooth transitions, and a visually stunning design. Elevate your auditory journey with this innovative creation!
                        </div>
                        <div className="project-skills-links">
                            <div className="project-skills">
                                <div className='btn'>JavaScript</div>
                                <div className='btn'>HTML5</div>
                                <div className='btn'>CSS</div>
                            </div>
                            <div className="project-links">
                              <a href="https://github.com/shailendra-jurel/Music-Player" className="github-icon"><i class="fa-brands fa-github"></i></a>
                              <a href=' ' className='deployed-link'><i class="fa-solid fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
               
                {/* <div className="projectCard">
                    <h2 className="project-title">Employee Management System</h2>
                    <img src="" alt="" className="project-demoView" />
                </div>
                <div className="projectCard">
                    <h2 className="project-title">Employee Management System</h2>
                    <img src="" alt="" className="project-demoView" />
                </div> */}
            </div>
        </section>
        </Element>
    )
}
export default Projects;









