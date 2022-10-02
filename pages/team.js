import Header from './header'
import Footer from './footer'

export default function About() {
    return (
        <div id="aboutus">
            <Header />
            <section className='team'>
                <div className="container text-center aos-init aos-animate pt-5" data-aos="fade-up">
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