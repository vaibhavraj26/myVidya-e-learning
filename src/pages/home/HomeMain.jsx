import React from 'react'
import './HomeMain.css'
import classroom from '@assets/classroom_PNG.png'
import management from '@assets/management_PNG.png'
import analytics from '@assets/analytics_PNG.png'


const HomeMain = () => {
    return (
        <div>
            {/* secttion 1 */}
            <section className="section">
                <div className="content">
                    <h2>All-in-One School Management Platform</h2>
                    <p>Manage students, teachers, attendance, and reports — all from one intuitive dashboard.
                        MyVidya simplifies school operations so you can focus on what truly matters — learning.</p>
                </div>
                <div className="image">
                    <img src={management} alt="Dashboard showing school data" />
                </div>
            </section>

            {/* Section 2  */}
            <section className="section reverse">
                <div className="content">
                    <h2>Connect, Collaborate, and Learn Together</h2>
                    <p>From online classes to assignment tracking, MyVidya bridges the gap between students, teachers,
                        and parents. Stay connected anytime, anywhere.</p>
                </div>
                <div className="image">
                    <img src={classroom} alt="Students and teachers collaborating" />
                </div>
            </section>

            {/* <!-- Section 3 --> */}
            <section className="section">
                <div className="content">
                    <h2>Make Data-Driven Decisions</h2>
                    <p>Instantly generate performance reports, attendance summaries, and insights with a click.
                        Let MyVidya handle the numbers while you shape the future.</p>
                </div>
                <div className="image">
                    <img src={analytics} alt="Analytics and reports charts" />
                </div>
            </section>
        </div>
    )
}

export default HomeMain
