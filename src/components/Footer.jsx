import React from 'react'
import logoName from '@assets/logo_name_PNG.png'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer className="footer">
                <div className="footer-container">

                    <div className="footer-brand">
                        <img src={logoName} alt="" />
                        <p>Smart School Management for a Smarter Future.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Terms & Policy</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="#">🌐</a>
                            <a href="#">📘</a>
                            <a href="#">🐦</a>
                            <a href="#">📷</a>
                            <a href="#">💼</a>
                            <a href="#">▶️</a>
                        </div>
                    </div>

                    <div className="footer-apps">
                        <h4>Also Available On</h4>
                        <div className="app-badges">
                            <a href=" ">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
                            </a>
                            <a href="#">
                                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2025 MyVidya. All Rights Reserved.</p>
                </div>
            </footer>
    </div>
  )
}

export default Footer
