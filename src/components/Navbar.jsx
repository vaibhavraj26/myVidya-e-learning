import { useState } from "react";
import logo from "@assets/logo_PNG.png";
import logo_name from "@assets/logo_name_PNG.png";
import ProfileIcon from "@assets/profile.png"
import NotificationIcon from "@assets/notification.png"

import './Navbar.css';

function Navbar() {

  // ✅ Dummy login state
  const isLoggedIn = false;
  const count = 7;

  return (
    <nav>
      <div className="NavBar">

        <div className="NavLogo">
          <img src={logo} className="logo" alt="MyVidya" />
          <img src={logo_name} className="logoName" alt="MyVidya" />
        </div>

        <div className="NavButtons">
          {isLoggedIn ? (
            <>
              {/* after ligin */}
              <div className="navigation">
                <div className="tooltip notification-wrapper">
                  <img src={NotificationIcon} alt="Profile" className="nav-icon" />
                  {count > 0 && <span className="notification-badge">{count}</span>}
                  <span className="tooltip-text">Notification</span>
                </div>

                <div className="tooltip">
                  <img src={ProfileIcon} alt="Profile" className="nav-icon" />
                  <span className="tooltip-text">Profile</span>
                </div>
              </div>



            </>
          ) : (
            <>
              {/* before login */}
              <button className="btnCTA">Get Started</button>
              <button className="btnCTA">Learn More</button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
