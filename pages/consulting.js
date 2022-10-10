import Header from './header'
import Footer from './footer'

export default function consulting() {
  return (
    <>
      <Header />
      <section className="header-area header-bg" id="product"></section>
      <div className="container-fluid">
         <section className="difficult row" id="difficult">
          <div className="container text-lg-left pb-5">
            <h2 className="blue-underline-heading">Cloud Consulting</h2>
            <div className="row py-2">
              <div class="col-lg-1">
              </div>
              <div className="container-fluid">
                <div className='row'>
                  <div class="col-lg-7 text-lg-left">
                    <p>With our extended exposure and architectural experience in the major Public cloud like AWS, Azure, GCP, Oracle, digital ocean and hybrid cloud and data center we have learned their peculiarities and we always share them as our core consulting services.</p>
                    <p>We come as a trusted partner for services like Application Integration, Native Application Development, Data Analytics, Custom Platforming and Auto-Scaling, de-scaling.               
                    </p>
                    <p class="font-weight-bold"> Our Approaches:</p>
                    <p></p>
                    <p># When we assess the business need we keep in mind the cloud budget, cost optimisation, high reliability, fault tolerance, trust and security framework, governance and streamlined deliveries, so you can reap the maximum value from cloud computing
                    </p>
                    <p># We Help you migrate your infrastructure with practical strategies for hybrid, multi-cloud or Cloud Native keeping in mind your data and application  designs which helps in reducing cost of re-development</p>
                    <p># With our active monitoring solutions , you can monitor and manage your all the cloud infrastructure in one dashboard at a single organisation level and implement active control, audit and management of performance and cloud costs.</p>
                    <p># With ready boiler-plates, commons, templates, bundles and packages , we can deploy a well architected and compliant infrastructure using automated DevOps pipelines , that will accelerate and bring speed to your development.</p>
                    <p># We build Architecture for Day0 readiness of security and compliance, thus we design right landing zones, platforms shells and encryption layers built which are industry standard and provide balanced access levels and component level encryption to act as guard rails and gateways and thus securing you from cyberthreats</p>          
                    
                  </div>
                  <div className="col-lg-5">
                    <img src="/images/consulting.png" className="rounded-circle" />
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
            <h2 className="white-underline-heading text-on-dark-bg">We help you get the best of cloud</h2>
            <div className="container-fluid">
            <div className="row py-4">                        
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-build.png" className="service-images" width="100px" /> 
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Cost Optimisation</h4>
                  <p className='white'>Cost optimisation in cloud is achieved via Workflow-based Scheduling, 
                  which is designed as integrated approach of DevOps in Bootlabs, which keeps your resource utilisation 
                  optimum while also bringing the savings by reducing redundant, limited use and non-useful infrastructure
                  We also focus upon automating the routine tasks of role-mapping, workflow traversing, 
                  which brings a whole new optimisation in the cloud cost
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-manage.png" className="service-images" width="100px" />  
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">WAF Review</h4>
                  <p className='white'>The Well-Architected Framework describes key concepts, design principles, 
                  and architectural best practices for designing and running workloads in the cloud.
                  We have laid down various approaches and we abide by the AWS WAF Pillars to ensure 
                  the designed frameworks are resilient, optimised, reliable, sustainable, secure and 
                  performs well in efficiency and operations
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="content">
                <img src="/images/360services-operate.png" className="service-images" width="100px" />
                <p></p>
                <h4 className="title text-lg-center text-on-dark-bg">Assessment</h4>
                  <p className='white'>We perform various type of Asessment including Architecture, 
                  Cloud Cost Estimation, Projection of the Cost based on planned infrastructure and 
                  Recommendation based on Industry Standards, these assessments help teams/individuals/organisations 
                  get a robust and resilient infrastructure at an optimised cloud spend
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
