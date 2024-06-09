import './LandingPage.css'
import Typing from '../../Components/Typing/Typing';
import { Element } from 'react-scroll';
import ParticlesBackground from '../../Components/ParticlesBackground';
import stock from '../../Assets/Images/section-image.jpeg';
function LandingPage(){
    return (
        <Element name='home'>
            <section className='landing-page'>
                <div className="left-section">
                    <p>Hii  👋 </p>
                    <h2>I'm Shailendra😇</h2>
                    <Typing 
                    text = {[
                        "Software Engineer 👨‍💻",
                        "AI ML Enthusiast🤖", 
                        "web Developer 🌐"
                    ]}
                    typingSpeed = {90}
                    deletingSpeed = {48}
                    duration={1000}
                    />
                </div>
                <div className='right-section'>
                    <img className="right-section-img" src={stock}></img>
                </div>
            </section>
        </Element>
    )
}
export default LandingPage;