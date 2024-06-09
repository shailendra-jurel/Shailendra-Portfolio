import { Element } from 'react-scroll';
import './ContactMe.css'
import ContactForm from '../../Components/ContactForm/ContactForm';

function ContactMe(){
    return (
        <Element name='contactMe'>
            <section className='contact-us'>
                <div className="contactMe-left-section">
                    <div className="left-section-header">
                        <h2 className='left-header-text' id='let-build'>Let's do</h2>
                        <h2 className='left-header-text' id='something'>something and </h2>
                        <h2 className='left-header-text' id='great-together'>built great together.</h2>
                    </div>
                    <div className="email">
                        <i class="fa-solid fa-envelope"></i>
                        <h2>shailendra.23bcs10201@ms.sst.scaler.com</h2>
                    </div>
                    <div className='location'>
                        <i class="fa-solid fa-location-dot"></i>
                        <h2> Delhi-UP-Bangalore, India</h2>
                    </div>
                    <div className="socialIcons">
                        <a href='www.linkedin.com/in/shailendra-jurel'><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/shailendra-jurel'><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.instagram.com/s____chaudhry/'><i class="fa-brands fa-instagram"></i></a>
                        <a href=''><i class="fa-brands fa-square-x-twitter"></i></a>
                    </div>
                </div>
                <div className="contactMe-right-section">
                    <ContactForm/>
                </div>
            </section>
        </Element>
    )
}
export default ContactMe;