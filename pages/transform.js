import Header from './header'
import Footer from './footer'

export default function transform() {
  return (
    <>
      <Header />
        <div className="container-fluid" style={{ paddingTop: '4vw' }}>
        <section className="row" id="transform">
          <div className="container text-lg-left pb-5">
            <h2 className="blue-underline-heading">Digital Transformation</h2>
            <div className="row py-2">
              <div class="col-lg-1">
              </div>
              <div className="container-fluid">
                <div className='row'>
                  <div class="col-lg-7 text-lg-left">
                    <p>With everyday evolution of business strategy , we know you are re-designing your digital strategies , and that is where we want to partner you in bringing the right digital transformation.
                    </p> 
                    <p>Our strategies are designed with keeping customers, employees and partners in mind how we can make future proof approaches and applications which are aligned to business models looking forward to opportunities.               
                    </p>
                    <p className="font-weight-bold">DT Approaches:</p>
                    <p></p>
                    <p># We know you want to stay competitive and on the edge of new technology, that is why Bootlabs keeps on designing custom solutions and tech-integration platforms which help you modernize you for future.
                    </p>
                    <p># We are believer of market dynamics and how they enforce utilization of modern digital technologies - availing  services of cloud platforms, A/ML, IoT, Edge Technologies.</p>
                    <p># True digital transformation is about collaboration, agility and customer centric  approach , which we have adopted in every framework , technical architecture and solution we recommend to our partners. 
                    </p>
                    <p># We help adopt transformation that is scalable, data-centric , evolutionary and modern  while keeping your costs within the estimations.</p>                             
                    
                  </div>
                  <div className="col-lg-5">
                    <img src="/images/DigitalTrans.png" className="rounded-circle" />
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
            <h2 className="white-underline-heading text-on-dark-bg">Join the future with Cloud</h2>
            <div className="container-fluid">
            <div className="row py-4">              
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-build.png" className="service-images" width="100px" /> 
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Modernization</h4>
                  <p className='white'>Get future ready with our assessments of Skill, Process and Infrastructure.
                  Enter the next era of technology with a thoughtful approach to consolidate, update, replace or 
                  retire processes and systems aligned with your future plans.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-manage.png" className="service-images" width="100px" /> 
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Assessment</h4>
                  <p className='white'>We perform various types of asessments including Architecture, 
                  Cloud Cost Estimation, Projection of the Cost based on planned infrastructure and 
                  Recommendation based on Industry Standards, these assessments help teams/individuals/organisations 
                  get a robust and resilient infrastructure at an optimised cloud spend
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-operate.png" className="service-images" width="100px" />
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Migration</h4>
                  <p className='white'>We help you to design your systems based on well architected frameworks which 
                  are auto-scalable, adaptable to new technologies and evolutionary with the industry dynamics.
                  Be It Infrastructure, applications or databases, we will give the best recommendation and 
                  help you implement them in the optimized way
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
      <Footer />
    </>
  );
}
