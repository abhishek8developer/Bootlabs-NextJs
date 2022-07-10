import Header from './header'
import Footer from './footer'

export default function About(){
    return (
        <div id="aboutus">
            <Header />
            <header class="header-area header-bg">
                <div class="shape-1"><img src="/images/shape/01.png" alt=""/></div>
                <div class="shape-2"><img src="/images/shape/02.png" alt=""/></div>
                <div class="shape-3"><img src="/images/shape/03.png" alt=""/></div>
                <div class="header-right-image wow zoomIn" style={{ display: 'inline-block', verticalAlign: 'middle'}}>
                    <img src="/images/ezgif.com-gif-maker.gif" alt="header right image" />
                </div>
                <div class="container">        
                    <div class="col-lg-12">
                        <div class="heading-content">
                            <h1 class="title wow fadeInDown">ABOUT US</h1>
                            <p>The Cloud is complex. We make it Simple.</p>
                            {/* <p>As a Cloud Oriented company, Bootlabs is simplifying cloud, with our Frameworks, Strategies and Consulting. Our focus is to make our Clients achieve reliability , availability and excellent reduction in time to market their products. 
                                We are new-gen and new-tech company in pursuit to make Multi-cloud way of life for everyone.
                            </p> */}
                        </div>
                    </div>
                </div>
            </header>
            <section class="about-us-area style-two" id="about">
                <div class="container">        
                    <div class="section-title left-aligned">
                        <h2 class="title extra wow fadeInDown">Mission</h2>
                        <p>
                            We are a Boutique Tech Consulting partner, specializing on Cloud Native Solutions. We are obsessed about anything “CLOUD”.
                            Our goal is to seamlessly automate development lifecycle,  modernize infrastructure and its associated applications.
                            With a product mind-set, we enable start-ups and enterprises on cloud transformation, cloud migration, end to end automation and managed cloud services. We are eager to research, discover, automate, adapt, empower and deliver quality solutions on-time every-time. We are passionate about customer success. With the right blend of experience and exuberant youth in our in-house team, we have made significant impact to customers.
                            </p>
                        <br/>
                        <p>We believe that only the best specialists create the best products. Our team has tremendous experience in the information technology field and is focused on creating new vectors for IT industry development</p>
                        <br/><br/>
                        <a href="#approach" class="boxed-btn btn-rounded">Join Us</a> 
                    </div>
                </div>
            </section>    
            <section id="our-team" class="our-team">
                <div class="container text-center aos-init aos-animate" data-aos="fade-up">
                    <div class="row gx-0">
                        <header class="section-header text-center justify-content-center wow fadeInDown">
                            <h2>Meet the Team</h2>
                            <p>We believe that only the best specialists create the best products. Our team has tremendous experience in the information technology field and is focused on creating new vectors for IT industry development</p>
                        </header>
                        <div class="col-lg-3 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="100">
                            <img src="/images/1649084655193-modified.png" class="img-fluid" alt=""/>
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div class="social justify-content-center">
                                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i class="ri-twitter-fill"></i></a>
                                <a href=""><i class="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="200">
                            <img src="/images/1649084655193-modified.png" class="img-fluid" alt=""/>
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div class="social justify-content-center">
                                <a href=""><i class="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i class="ri-twitter-fill"></i></a>
                                <a href=""><i class="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="300">
                            <img src="/images/1649084655193-modified.png" class="img-fluid" alt=""/>
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div class="social justify-content-center">
                                <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                <a href=""><i class="ri-twitter-fill"></i></a>
                                <a href=""><i class="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 team-box aos-init aos-animate wow fadeInDown" data-aos="fade-up" data-aos-delay="400">
                            <img src="/images/1649084655193-modified.png" class="img-fluid" alt=""/>
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet</p>
                            <div class="social justify-content-center">
                            <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                            <a href=""><i class="ri-twitter-fill"></i></a>
                            <a href=""><i class="ri-facebook-fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}