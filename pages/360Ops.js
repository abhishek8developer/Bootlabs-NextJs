import Header from './header'
import Footer from './footer'

export default function operations() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ paddingTop: '4vw' }}>
         <section className="row" id="Ops">
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
                  <p className='white'>We help you build a compliant, secure and scalable systesm, while integrating capabilities to active perform
                  recovery , fault tolerance and backup-runs.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-manage.png" className="service-images" width="100px" /> 
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Manage</h4>
                  <p className='white'>We help you with analytics to monitor the trends and gaps to perform better, with round the clock availability of your business functions, applications and services. 
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-operate.png" className="service-images" width="100px" />
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Operate</h4>
                  <p className='white'>We build dashboards and no-code, low-code ecosystems that help you easily operate
                  your Infrastructure ane setup in a convenient and secure way. With a quick turn around time 
                  backed by a robust SLA mechanism makes operations seamless and helps build trust within and beyond the organisation.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>         
       </div>
       <div className="container text-lg-center pb-5d">       
       <h2 className="blue-underline-heading">Would you like to Explore more?</h2>
       <br></br>
       <a href="\contact" className="btn btn-primary" style={{ padding: '9px 40px' }}>Get in Touch</a>  
       <p></p>
       </div>
      <Footer/>
    </>
  );
}
