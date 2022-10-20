import Header from './header'
import Footer from './footer'

export default function CaseStudies() {
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: '7vmax' }} id="case-studies">
        <section className="row text-center">
          <div className="container" style={{ paddingTop: '4vmax' }}>
            <div className="row text-center">
              <div className="col-12">
                <h2 className="blue-underline-heading">Case Studies</h2>
              </div>
            </div>
            <div className="row text-center">
              <div class="col-lg-8" style={{ margin: '0 auto' }}>
                <p>
                  We had been instrumental in running various workloads on cloud, designing robust pipelines,
                  and managing humoungous migration activities. In the below case studies we talk about the
                  same. Accelerate your cloud journey by leveraging our end-to-end Cloud managed services.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="row text-center">
          <div className="container" style={{ paddingTop: '4vw' }}>
            <div className="row text-center">
              <div className="col-12">
                <h2 className="blue-underline-heading">Migration from Azure to GCP</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-12" style={{ margin: '0 auto' }}>
                <img src="images/Slide1.JPG" className="service-image" />
                <img src="images/Slide2.JPG" className="service-image" />
              </div>
            </div>
          </div>
        </section>
        <section className="row text-center">
          <div className="container" style={{ paddingTop: '4vw' }}>
            <div className="row text-center">
              <div className="col-12">
                <h2 className="blue-underline-heading">Resilience in the Code</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-12" style={{ margin: '0 auto' }}>
                <img src="images/Slide3.JPG" className="service-image" />
                <img src="images/Slide4.JPG" className="service-image" />
              </div>
            </div>
          </div>
        </section>
        <section className="row text-center">
          <div className="container" style={{ paddingTop: '4vw' }}>
            <div className="row text-center">
              <div className="col-12">
                <h2 className="blue-underline-heading">Deployment in GCP</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-lg-12" style={{ margin: '0 auto' }}>
                <img src="images/Slide5.JPG" className="service-image" />
                <img src="images/Slide6.JPG" className="service-image" />
              </div>
            </div>
          </div>
        </section>
        <section className="about-us-area row style-two pb-5" id="about">
          <div className="container text-lg-center pb-5d">
            <h2 className="blue-underline-heading">Would you like to Explore more?</h2>
            <br></br>
            <a href="\contact" className="btn btn-primary" style={{ padding: '9px 40px' }}>Get in Touch</a>
            <p></p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
