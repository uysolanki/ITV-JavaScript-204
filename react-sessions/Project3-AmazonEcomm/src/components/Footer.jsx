import './Footer.css';
import footer_logo from '../assets/myimages/Logo.png';
import insta from '../assets/myimages/insta.png';
import pinterest from '../assets/myimages/pinterest.png';
import whatsapp from '../assets/myimages/whatsapp.png';

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo-footer">
                <h1>Amazon.in</h1>
                <img src={footer_logo} alt="Logo" />
            </div>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Help</h3>
                    <ul>
                        <li>Customer Service</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>FAQs</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

            </div>
            <div className="footer-social-icons">
                <img src={insta} alt="Instagram" />
                <img src={pinterest} alt="Pinterest" />
                <img src={whatsapp} alt="WhatsApp" />
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright ©2025 - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer