import './Contact.css'
import { Link } from 'react-scroll';

function Contact(){
    return (
        <div className="contact-btn">
            <Link to="contactMe" smooth={true} duration={500}><h2 id='contact-me'>Contact Us</h2></Link>
            <Link to="contactMe" smooth={true} duration={500}>
                <img src="https://assets-v2.scaler.com/assets/svg/widget-icon-09f048bbbfe8e11c029279fbb872b3966281c5ef5c95a2065779de849e8b181f.svg.gz" className='contact-icon' alt="" />
            </Link>
        </div>
    )
}
export default Contact;