import Header from './header'
import Footer from './footer'

export default function platform() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ paddingTop: '7vmax' }}>
        <section className="row" id="platform">
          <div className="container text-center pb-5">
            <h2 className="blue-underline-heading">Platform Engineering</h2>
            <div className="row py-2">
              <div class="col-lg-7 text-left">
                <p>We build custom platforms and frameworks based on the business use cases and aligned to your needs of availability, resilience and budget.</p>
                <p>We always share the toolset and monitoring mechanism best suited for your business and it can give you vision to monitor entire software development lifecycle from design to production.</p>
                <p class="font-weight-bold"> Our Thoughts: </p>
                <p></p>
                <p># A well architected source control system integrated to continuous integrations system with a pipeline build with security gates to help deploy artifacts with consistency</p>
                <p># Since we know every application and set of users will have different needs thus we ensure the horizontal compliance and governance is always in place, while individual application, product or team can independently build on their vertical software stack.</p>
                <p># These platforms are mostly self-service thus enabling both the organization and teams align it to best suite their needs and still give the granular visibility of architecture, cost and utility, they can  custom build their own CI/CD, deployment flows, notifications and audit mechanism beyond the default availability.</p>
                <p># Also, through these platforms we build a standardization and learning curve for best practices and safe ecosystem for any infrastructure , aligned to the culture of the organization. While reducing the dependencies of checkpoints, building security as integral component of code.</p>
              </div>
              <div className="col-lg-5">
                {/*<img src="/images/Observe.gif" className="img-fluid" />*/}
                <img src="/images/Platform.png" className="rounded-circle" />
              </div>
            </div>
          </div>
        </section>
        <section className="about-us-area row bg-black style-two pb-5" id="about">
          <div className="container text-center">
            <h2 className="white-underline-heading text-on-dark-bg">Accelerate your cloud with us</h2>
            <div className="container-fluid">
              <div className="row py-4">
                <div className="col-md-4">
                  <div className="content">
                    <div className='row'>
                      <div className='col-2'>
                        <img src="/images/360services-build.png" className="service-images" width="100px" />
                      </div>
                      <div className='col-10'>
                        <h4 className="title text-left text-on-dark-bg">DevSecOps</h4>
                        <p className='white'>Empower developers to build securely
                          Application security framework accounts for the technology, processes, and people involved, giving teams the security expertise they need within the tools and workflows they use.

                          Vulnerability-free code
                          Accurate scanning and automatic fix PRs help devs find and fix vulnerabilities as they code.

                          Enablement & education
                          Turn developers into security experts with fix prioritization and actionable remediation advice from the tools they use.

                          Visibility & intelligence
                          Customizable policies let security teams create guardrails while maintaining visibility and security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content">
                    <div className='row'>
                      <div className='col-2'>
                        <img src="/images/360services-manage.png" className="service-images" width="100px" />
                      </div>
                      <div className='col-10'>
                        <h4 className="title text-left text-on-dark-bg">SRE</h4>
                        <p className='white'>We help you achieve Resilience, fault tolerance and optimized SLO's aligned with your SLA's
                          with our Site Reliability Roadmaps & Automation Workflows.
                          While maintaining the expected Scalability and Availability, Velocity and Feature Building.
                          We help you constantly right size your infrastructure based on the AI-Ops driven Recommendation Engine and in the usual cases with active Observability
                          We help you plan your failures in advance , so you may focus on your business and keeping productivity intact, with no interruptions to your end customers experience while you deploy new features or becoming awesome in the back-end
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="content">
                    <div className='row'>
                      <div className='col-2'>
                        <img src="/images/360services-operate.png" className="service-images" width="100px" />
                      </div>
                      <div className='col-10'>
                        <h4 className="title text-left text-on-dark-bg">Cloud Accelerators</h4>
                        <p className='white'>Be Fast in the distributed world running on Cloud with our Templates, Workflows, Frameworks and our Custom Products. The journey of Modernization, Migration, Digital Transformation or Future Readiness.
                          We help you run the show fast with Day0, Day1 and Day2 readiness on any of your Public Cloud Subscription and when you want to interchange your workloads across them
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
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
