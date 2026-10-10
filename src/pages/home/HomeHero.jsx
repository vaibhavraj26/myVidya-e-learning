import React from 'react'
import './HomeHero.css'
import HomeSection1_PNG from '@assets/HomeSection1_PNG.png'
import communityIcon from '@assets/community.png'
import videoIcon from '@assets/video.png'


const HomeHero = () => {
    return (
        <div>
            <div className="HeroSection">
                <div className='ImgSection1'>
                    <img src={HomeSection1_PNG} alt="student-teacher" className='SectionImg' />
                </div>
                <div className='contentSection1'>
                    <h2>
                        Empowering Schools with Smarter Management
                    </h2>
                    <p className="">
                        MyVidya helps schools manage students, teachers, attendance, and performance </p>
                    <p> — all in one place.
                        Simplify operations and focus more on education.
                    </p>
                    <div className="SectionButton">
                        <button className="btnCTA">
                            Join Now
                            <img src={communityIcon} alt="" className='btnIcon' />
                        </button>
                        <button className="btnCTA">
                            Watch Demo
                            <img src={videoIcon} alt="" className='btnIcon' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
