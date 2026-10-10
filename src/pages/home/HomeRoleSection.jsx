import React from 'react'
import './HomeRoleSection.css'
import logo from '@assets/logo_PNG.png'


const HomeRoleSection = () => {
    return (
        <div>
            <section className="roles-section" aria-label="Roles in MyVidya">
                <h2 className="roles-title">Smart Connection for Smarter Education</h2>

                <div className="roles-grid" role="list">
                    {/* <!-- Management --> */}
                    <article className="role-card" role="listitem" aria-labelledby="role-management">
                        <div className="role-head">
                            <span className="emoji">🏫</span>
                            <h3 id="role-management">Management</h3>
                        </div>
                        <ul className="role-points">
                            <li>School settings & policy control</li>
                            <li>Staff & department management</li>
                            <li>Fee, timetable & resource allocation</li>
                        </ul>
                    </article>

                    {/* <!-- Teachers --> */}
                    <article className="role-card" role="listitem" aria-labelledby="role-teacher">
                        <div className="role-head">
                            <span className="emoji">👩‍🏫</span>
                            <h3 id="role-teacher">Teachers</h3>
                        </div>
                        <ul className="role-points">
                            <li>Class management & attendance</li>
                            <li>Create assignments & gradebooks</li>
                            <li>Communicate with students & parents</li>
                        </ul>
                    </article>

                    {/* <!-- Parents --> */}
                    <article className="role-card" role="listitem" aria-labelledby="role-parents">
                        <div className="role-head">
                            <span className="emoji">👨‍👩‍👧‍👦</span>
                            <h3 id="role-parents">Parents</h3>
                        </div>
                        <ul className="role-points">
                            <li>Track attendance & performance</li>
                            <li>Receive announcements & invoices</li>
                            <li>Direct messaging with teachers</li>
                        </ul>
                    </article>

                    {/* <!-- Students --> */}
                    <article className="role-card" role="listitem" aria-labelledby="role-students">
                        <div className="role-head">
                            <span className="emoji">🎓</span>
                            <h3 id="role-students">Students</h3>
                        </div>
                        <ul className="role-points">
                            <li>View timetable & submit work</li>
                            <li>Check grades & feedback</li>
                            <li>Join classes & resources</li>
                        </ul>
                    </article>

                    {/* <!-- Center Logo --> */}
                    <div className="center-logo">
                        <img src={logo} alt="MyVidya" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeRoleSection
