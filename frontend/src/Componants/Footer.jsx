import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h2 className="footer-logo">ServePlus</h2>
                    <p>Share Surplus, Serve Smiles.<br />Ending food waste, one meal at a time.</p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/donate">Donate</Link></li>
                        <li><Link to="/request">Request</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Get Involved</h3>
                    <ul>
                        <li><Link to="/volunteer">Volunteer</Link></li>
                        <li><Link to="/partners">Partner With Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    © 2025 ServePlus. All rights reserved. |
                    <Link to="/privacy"> Privacy Policy</Link> |
                    <Link to="/terms"> Terms</Link>
                </p>
            </div>
        </footer>
    );
};
