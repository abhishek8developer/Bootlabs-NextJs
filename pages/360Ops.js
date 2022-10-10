import Header from './header'
import Footer from './footer'

export default function operations() {
  return (
    <>
      <Header />
      <section className="header-area header-bg" id="product"></section>
      <div className="container-fluid">
         <section className="difficult row" id="difficult">
          <div className="container text-lg-left pb-5">
            <h2 className="blue-underline-heading">360&deg; Ops</h2>
            <div className="row py-2">
              <div class="col-lg-1">
              </div>
              <div className="container-fluid">
                <div className='row'>
                  <div class="col-lg-7 text-lg-left">
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
                <div class="col-lg-1">
                </div>
              </div>
            </div>
          </section>
        <section className="about-us-area row bg-black style-two pb-5" id="about">
          <div className="container text-center">
            <h2 className="white-underline-heading text-on-dark-bg">We monitor, manage,optimise and everything in Cloud</h2>
            <div className="container-fluid">
            <div className="row py-4">                         
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-build.png" className="service-images" width="100px" />   
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Build</h4>
                  <p className='white'>
                  Custom build, configuration, and deployment to meet client requirement.
                  Incorporate Cloud best practices and leveraging Automation library &amp; Templates
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-manage.png" className="service-images" width="100px" />   
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Manage</h4>
                  <p className='white'>
                  Customization to meet enterprise-grade security services delivered using
                  cloud platform and support processes
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-operate.png" className="service-images" width="100px" />
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Operate</h4>
                  <p className='white'>
                  Support and incident remediation from best-in-class talents
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>        
       </div>
       <section className="header-area header-bg" id="product">
       <h2 className="blue-underline-heading text-on-dark-bg">Would like to Explore more</h2>
       <br></br>
       <a href="\contact" className="btn btn-primary">Contact Us</a>
       </section>

      <Footer />
    </>
  );
}
