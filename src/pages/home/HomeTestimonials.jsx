import React from 'react'
import './HomeTestimonials.css'

const HomeTestimonials = () => {
    return (
        <div>
            <section className="testimonials-section">
                <h2 className="testimonials-title">What Schools Say About MyVidya</h2>

                <div className="testimonials-container">

                    <div className="testimonial-card">
                        <p>
                            “MyVidya has made attendance and reports extremely easy.
                            Our teachers save hours every week!”
                        </p>
                        <div className="testimonial-user">
                            <img src="https://i.pravatar.cc/150?img=7" alt="" />
                            <div>
                                <h4>Rajesh Sharma</h4>
                                <span>Principal, Sunrise Public School</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “Communication between parents and teachers has improved.
                            Everyone stays informed in real-time.”
                        </p>
                        <div className="testimonial-user">
                            <img src="https://i.pravatar.cc/150?img=7" alt="" />
                            <div>
                                <h4>Anjali Gupta</h4>
                                <span>Senior Teacher, Green Valley Academy</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “The analytics feature helps us identify students who need extra support.
                            Very helpful for planning.”
                        </p>
                        <div className="testimonial-user">
                            <img src="https://i.pravatar.cc/150?img=7" alt="" />
                            <div>
                                <h4>Vivek Kumar</h4>
                                <span>Principal, Lotus Convent School</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “Simple, powerful, and easy to use.
                            Best school management software we’ve used so far!”
                        </p>
                        <div className="testimonial-user">
                            <img src="https://i.pravatar.cc/150?img=7" alt="" />
                            <div>
                                <h4>Pooja Verma</h4>
                                <span>Class Teacher, Oxford Global Public</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default HomeTestimonials
