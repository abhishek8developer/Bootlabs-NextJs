import Header from './header'
import Footer from './footer'

export default function About() {
    return (
        <div id="aboutus">
            <Header />
            <header className="header-area header-bg">
                {/* <div className="shape-1"><img src="/images/shape/01.png" alt=""/></div>
                <div className="shape-2"><img src="/images/shape/02.png" alt=""/></div>
                <div className="shape-3"><img src="/images/shape/03.png" alt=""/></div>
                <div className="header-right-image wow zoomIn" style={{ display: 'inline-block', verticalAlign: 'middle'}}>
                    <img src="/images/ezgif.com-gif-maker.gif" alt="header right image" />
                </div> */}
                <div className="container">
                    <div className="col-lg-12">
                        <div className="heading-content">
                            <h2 className="main-heading white wow fadeInDown">ABOUT US</h2>
                            <p className="white">The Cloud is complex. We make it Simple.</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="about-us-area style-two">
                <div className="container text-center aos-init aos-animate" data-aos="fade-up">
                    <div className="row content">
                        <header className="section-header text-center justify-content-center wow fadeInDown">
                            <h2 className='blue-underline-heading'>Our Mission</h2>
                            <p>As a Cloud Oriented company, Bootlabs is simplifying cloud, with our Frameworks, Strategies and Consulting. Our focus is to make our Clients achieve reliability , availability and excellent reduction in time to market their products.
                                We are new-gen and new-tech company in pursuit to make Multi-cloud way of life for everyone.
                            </p>
                            <p>
                                We are a Boutique Tech Consulting partner, specializing on Cloud Native Solutions. We are obsessed about anything “CLOUD”.
                                Our goal is to seamlessly automate development lifecycle,  modernize infrastructure and its associated applications.
                                With a product mind-set, we enable start-ups and enterprises on cloud transformation, cloud migration, end to end automation and managed cloud services. We are eager to research, discover, automate, adapt, empower and deliver quality solutions on-time every-time. We are passionate about customer success. With the right blend of experience and exuberant youth in our in-house team, we have made significant impact to customers.
                            </p>
                        </header>
                    </div>
                    <a href="#approach" className="boxed-btn btn-rounded">Join Us</a>
                </div>
            </section>
            <section className='team'>
                <div className="container text-center aos-init aos-animate" data-aos="fade-up">
                    <div className="row content">
                        <header className="section-header text-center justify-content-center wow fadeInDown">
                            <h2 className='blue-underline-heading'>Our Team</h2>
                            <p>We believe that only the best specialists create the best products. Our team has tremendous experience in the information technology field and is focused on creating new vectors for IT industry development</p>
                        </header>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="100">
                            <div className="img-fluid male-1" />
                            <h5>Ramkumar Sambasivan</h5>
                            <p>CEO & Cloud Champion</p>
                            <div className="social justify-content-center">
                                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i className="ri-twitter-fill"></i></a>
                                <a href=""><i className="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="200">

                            <div className="img-fluid male-4" />
                            <h5>Mayank Awasthi</h5>
                            <p>Branding & Marketing</p>
                            <div className="social justify-content-center">
                                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i className="ri-twitter-fill"></i></a>
                                <a href=""><i className="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="300">
                            <div className="img-fluid male-3" />
                            <h5>Ravi R.</h5>
                            <p>VP Consulting</p>
                            <div className="social justify-content-center">
                                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i className="ri-twitter-fill"></i></a>
                                <a href=""><i className="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2" />
                        <div className="col-lg-4 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="400">
                            <div className="img-fluid male-2" />
                            <h5>Karthick Dharman</h5>
                            <p>Cloud Architect</p>
                            <div className="social justify-content-center">
                                <a href=""><i className="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i className="ri-twitter-fill"></i></a>
                                <a href=""><i className="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="100">
                            <div className="img-fluid male-5" />
                            <h5>Aravind kumar</h5>
                            <p>Development Lead</p>
                            <div className="social justify-content-center">
                                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i className="ri-twitter-fill"></i></a>
                                <a href=""><i className="ri-facebook-fill"></i></a>
                            </div>

                        </div>
                        <div className="col-lg-1" />
                    </div>
                    <div className="row">
                        <div className="col-lg-12 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="400">
                            <div className="img-fluid female-1" />
                            <h5>Radhika</h5>
                            <p>CHRO</p>
                            <div className="social justify-content-center">
                                <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i className="ri-twitter-fill"></i></a>
                                <a href=""><i className="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}