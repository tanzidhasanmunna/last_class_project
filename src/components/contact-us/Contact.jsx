import './Contact.css';
import contactimg from '../../assets/contactus-removebg-preview.png';

export default function Contact() {
  return (
    <div>
          
        <h1>
            <span>
              Contact Us
            </span>
        </h1>
        <div className="contactus-container">

            <div>
                <img src={contactimg} alt=""/>
            </div>
            <div style={{ marginTop: '36px' }}>
                <form className="form-container">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" />
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" id="phone" />
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" rows={6} cols={40}></textarea>
                </form>
            </div>
        </div>

    </div>
  )
}
