import React from 'react'
import './HomePartner.css'
import partnerLogo from '@assets/DAV_Logo.svg'

const HomePartner = () => {

    const row1 = [
    { name: "Sunrise Public School", logo: partnerLogo, address: "Sector 12, Sunrise City" },
    { name: "Green Valley Academy", logo: partnerLogo, address: "45 Green Lane, Valley Town" },
    { name: "St. Xavier International", logo: partnerLogo, address: "12 Xavier Rd, Central District" },
    { name: "Delhi Model School", logo: partnerLogo, address: "Block B, Connaught Plaza" },
    { name: "Green Valley Academy", logo: partnerLogo, address: "45 Green Lane, Valley Town" },
    { name: "St. Xavier International", logo: partnerLogo, address: "12 Xavier Rd, Central District" },
    { name: "Delhi Model School", logo: partnerLogo, address: "Block B, Connaught Plaza" }
];

const row2 = [
    { name: "Lotus Convent School", logo: partnerLogo, address: "Lotus St., Riverside" },
    { name: "Gyan Jyoti School", logo: partnerLogo, address: "Gyan Marg, Knowledge Park" },
    { name: "Oxford Global Public", logo: partnerLogo, address: "Oxford Ave, West End" },
    { name: "City International School", logo: partnerLogo, address: "City Center, Plot 9" },
    { name: "Gyan Jyoti School", logo: partnerLogo, address: "Gyan Marg, Knowledge Park" },
    { name: "Oxford Global Public", logo: partnerLogo, address: "Oxford Ave, West End" },
    { name: "City International School", logo: partnerLogo, address: "City Center, Plot 9" }
];

    return (
        <div>
            <div className="partners-section">
                <h3 className="partners-title">Our Partners</h3>

                <div className="carousel-row">
                    <div className="carousel-track right-to-left">
                        {[...row1, ...row1].map((p, i) => (
                            <div className="partner-box" key={"r1-" + i}>
                                <img src={p.logo} alt={p.name} />
                                <div className='partner-details'>
                                    <p>{p.name}</p>
                                    <span>{p.address}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="carousel-row">
                    <div className="carousel-track left-to-right">
                        {[...row2, ...row2].map((p, i) => (
                            <div className="partner-box" key={"r2-" + i}>
                                <img src={p.logo} alt={p.name} />
                                <div className='partner-details'>
                                    <p>{p.name}</p>
                                    <span>{p.address}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePartner
