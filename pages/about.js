import Header from './header'
import Footer from './footer'

export default function About() {
    return (
        <div id="aboutus" className='bg-black'>
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
                    <div className="row content py-5">
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
                </div>
            </section>
            <Footer />
        </div>
    )
}