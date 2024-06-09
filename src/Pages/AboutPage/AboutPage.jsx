import './AboutPage.css'
import { Element } from 'react-scroll';
import profile from '../../Assets/Images/profile.png'

function AboutPage(){
    return(
        <Element name='About'>
            <section className="about-me-page">
                <div className="about-me">
                    <div className="profile-img">
                        <img src={profile} alt="" />
                    </div>
                    <div className="about-me-content">
                        <h2>Hello 👋 </h2>
                        <h4><p>I'm Shailendra ☺️, a passionate software developer on a mission to craft exceptional web experiences and build bulletproof backends. With a flair for problem-solving, I thrive on writing code that not only works flawlessly but also leaves a lasting impact. In this ever-evolving tech landscape, I'm constantly exploring new tools and techniques to ensure we're always ahead of the curve. Let's dive into the world of possibilities together and create something extraordinary! 🚀💻🌟</p></h4>
                    
                        <p>
                        🌟 Ready for thrilling collaborations and groundbreaking projects! Join me, fellow developers and tech enthusiasts, as we embark on an exhilarating journey of innovation. Together, let's craft wonders that redefine the future! Happy coding, let's create magic! 🚀✨
                        </p>
                    </div>
                </div>
            </section>
        </Element>
    )
}
export default AboutPage;