import './ContactForm.css'

function ContactForm(){
    return (
        <div className="contact-form">
            <h2>Let's Connect Together 😇</h2>
            <div className='form'>
                <div className='form-item'>
                    <input type="text" placeholder='Your Name' required/>
                </div>
                <div className='form-item'>
                    <input type="text" placeholder='enter your email' required/>
                </div>
                <div className='form-item'>
                   <input type="text" placeholder='your Mob.no' required/>
                </div>
                <div className='form-item'>
                    <textarea className='contactMe-textarea' placeholder='what you want to say to us' name="" id=""></textarea>
                </div>
                <button className='send'>Send message</button>
            </div>
        </div>
    )
}
export default ContactForm;