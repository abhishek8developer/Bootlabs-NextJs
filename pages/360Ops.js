import Header from './header'
import Footer from './footer'

export default function operations() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ paddingTop: '7vmax' }}>
        <section className="row" id="Ops">
          <div className="container text-center pb-5">
            <h2 className="blue-underline-heading">360&deg; Ops</h2>
            <div className='row'>
              <div class="col-lg-7 text-left">
                <p>Make your cloud journey simpler, faster, and cost-effective, while meeting your business and digital objectives.
                  Accelerate your cloud journey by leveraging our end-to-end Cloud managed services.</p>
                <p>We provide End-to-end Cloud services for the partial or complete management
                  and control of your cloud platforms, and related activities, including migration, maintenance, and optimization.
                </p>
                <p class="font-weight-bold"> Managed Services:</p>
                <p></p>
                <p># Application modernization</p>
                <p># Application migration</p>
                <p># Security and Compliance management</p>
                <p># Automate to accelerate</p>
                <p># Infrastructure Management</p>
                <p># Operation and cost optimization</p>
                <p># Continuous Monitoring</p>
              </div>
              <div className="col-lg-5">
                <img src="/images/DigitalTransform.gif" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="about-us-area row bg-black image-design style-two pb-5" id="Ops">
          <div className="container text-center">
            <h2 className="white-underline-heading text-on-dark-bg">We monitor, manage, optimise and everything in Cloud</h2>
            <div className="container-fluid">
              <div className="row py-4">
                <div className="col-md-4">
                  <div className="content">
                    <div className='row'>
                      <div className="col-2">
                        <img src="/images/360services-build.png" />
                      </div>
                      <div className="col-10">
                        <h4 className="title text-on-dark-bg">Build</h4>
                        <p className='white'>
                          Custom build, configuration, and deployment to meet client requirement.
                          Incorporate Cloud best practices and leveraging Automation library &amp; Templates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content">
                    <div className='row'>
                      <div className="col-2">
                        <img src="/images/360services-manage.png" />
                      </div>
                      <div className="col-10">
                        <h4 className="title text-on-dark-bg">Manage</h4>
                        <p className='white'>
                          Customization to meet enterprise-grade security services delivered using cloud platform and support processes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content">
                    <div className='row'>
                      <div className="col-2">
                        <img src="images/360services-operate.png" />
                      </div>
                      <div className="col-10">
                        <h4 className="title text-on-dark-bg">Operate</h4>
                        <p className='white'>
                          Support and incident remediation from best-in-class talents
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container text-center pb-5d">
        <h2 className="blue-underline-heading">Would you like to Explore more?</h2>
        <br></br>
        <a href="\contact" className="btn btn-primary" style={{ padding: '9px 40px' }}>Contact Us</a>
        <p></p>
      </div>
      <Footer />
    </>
  );
}
