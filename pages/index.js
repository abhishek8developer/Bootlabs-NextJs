import Image from 'next/image'
import Header from "./header"
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <section className="header-area header-bg row" id="home">
          <div className="shape-1">
            <img src="/images/shape/01.png" alt="" />
          </div>
          <div className="shape-2">
            <img src="/images/shape/02.png" alt="" />
          </div>
          <div className="shape-3">
            <img src="/images/shape/03.png" alt="" />
          </div>
          <div className="header-right-image wow zoomIn">
            <img src="/images/mobile-image-4.png" alt="header right image" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="header-inner">
                  <h2 className="main-heading wow fadeInDown">
                    Building catalysts for Clouds and Pipelines
                  </h2>
                  <p>
                    Bridging the gap between business and cloud ecosystems by building accelerators
                  </p>
                  <div className="btn-wrapper wow fadeInUp">
                    {/* <!--   <a href="#about" className="boxed-btn btn-rounded">About Us</a>
                      <a href="" className="boxed-btn btn-rounded blank">Learn More</a> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="partners row" id="partners">
          <div class="container text-center">
            <h2 className="blue-underline-heading">PROUD PARTNERS</h2>
            <div class="row">
              <div class="col-md-3 col-6">
                <img src="images/aws.svg" alt="AWS" />
              </div>
              <div class="col-md-3 col-6">
                <img src="images/spot.png" alt="Spot.io" />
              </div>
              <div class="col-md-3 col-6">
                <img src="images/gcp.svg" alt="GCP" />
              </div>
              <div class="col-md-3 col-6">
                <img src="images/ingram.png" alt="Ingram" />
              </div>
            </div>
          </div>
        </section>
        <section className="difficult row" id="difficult">
          <div className="container text-center pb-5">
            <h2 className="blue-underline-heading">Difficulty in building your DevOps capability?</h2>
            <div className="row py-2">
              <div class="col-lg-1">
              </div>
              <div class="col-lg-10">
                <p>We are continuous experimenters in DevSecOps transformations. Having successfully
                  transformed large digital platforms across various industries including Automotive,
                  BFSI & Retail, e-commerce, our motto is to engineer a seamless digital fluency to 
                  your business. Powered by DevSecOps tools of your choice, this package delivers in 
                  just 3-6 months, your automation needs. For beginners, intermediates and advanced 
                  SaaS organizations.</p>
              </div>
              <div class="col-lg-1">
              </div>
            </div>
          </div>
        </section>
        <section className="about-us-area row bg-black style-two pb-5" id="about">
          <div className="container text-center">
            <h2 className="blue-underline-heading text-on-dark-bg">Let us help with your Cloud Journey</h2>
            <div className="row py-4">
              <div className="col-7 center-image">
                <img src="/images/icon-1.png" className="service-images" width="150px" />
              </div>
              <div className="col-5">
                <div className="content">
                  <h4 className="title text-on-dark-bg">Automated Pipeline (CI / CD)</h4>
                  <p className='white'>
                    Cover different tech stack needs 
                    with efficient management of 
                    automated deployments for each 
                    type of release. Ensure build, 
                    deploy and operate are seamless. 
                    Unit / Integration / Security / 
                    Performance testing. Infrastructure 
                    as a Code and Release Orchestration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-5">
                <div className="content">
                  <h4 className="title text-on-dark-bg">Kubernetes Enablement</h4>
                  <p className='white'>
                    Deliver best-in-class cloud-agnostic container 
                    orchestration for your workloads. Migrate your 
                    workloads from VM's to containers. Automate 
                    cluster deployment strategies. Service-mesh 
                    enablement for microservices. Scalability 
                    based on custom metrics
                  </p>
                </div>
              </div>
              <div className="col-7 center-image">
                <img src="/images/icon-2.png" className="service-images" width="150px" />
              </div>
            </div>
            <div className="row py-4">
              <div className="col-7 center-image">
                <img src="/images/icon-1.png" className="service-images" width="150px" />
              </div>
              <div className="col-5">
                <div className="content">
                  <h4 className="title text-on-dark-bg">Observability and Monitoring</h4>
                  <p className='white'>
                    Behavioural insight definitions for performance, 
                    compliance and security on your services and 
                    applications. Automate monitoring, tracing and 
                    logging. Connected view of all performance metrics 
                    at one place. Pinpoint issues faster and understand why
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-5">
                <div className="content">
                  <h4 className="title text-on-dark-bg">Security</h4>
                  <p className='white'>
                    Securing application and infrastructure using 
                    compliance checkpoints. Provide central SIEM 
                    (Security, Information and Event Management). 
                    Cloud compliance and governance. Granular, 
                    policy based IAM and authentication controls
                  </p>
                </div>
              </div>
              <div className="col-7 center-image">
                <img src="/images/icon-2.png" className="service-images" width="150px" />
              </div>
            </div>
          </div>
        </section>
        {/*<section className="how-it-work-area" id="approach">
          <div className="shape-1">
            <img src="/images/shape/08.png" alt="" />
          </div>
          <div className="shape-2">
            <img src="/images/shape/09.png" alt="" />
          </div>
          <div className="shape-3">
            <img src="/images/shape/08.png" alt="" />
          </div>
          <div className="shape-4">
            <img src="/images/shape/09.png" alt="" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title">
                  <span className="subtitle">Working Process</span>
                  <h2 className="main-heading">How it works?</h2>
                  <p>
                    We have crafted the process to ensure there is clear delivery
                    principles followed
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="how-it-work-tab-nav">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="account-tab"
                        data-toggle="tab"
                        href="#account"
                        role="tab"
                        aria-controls="account"
                        aria-selected="true"
                      >
                        <i className="flaticon-checked"></i> Inception{" "}
                        <span className="number">1</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="chat-tab"
                        data-toggle="tab"
                        href="#chat"
                        role="tab"
                        aria-controls="chat"
                        aria-selected="false"
                      >
                        <i className="flaticon-chat-1"></i> Planning{" "}
                        <span className="number">2</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="settings-tab"
                        data-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <i className="flaticon-settings-1"></i> Execution{" "}
                        <span className="number">3</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content wow slideInUp">
                  <div
                    className="tab-pane fade show active"
                    id="account"
                    role="tabpanel"
                    aria-labelledby="account-tab"
                  >
                    <div className="how-it-works-tab-content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-content-area">
                            <h4 className="title">Inception</h4>
                            <p>
                              <b>Requirement gathering</b>: Multiple discussions
                              to thoroughly understand and clarify the functional
                              and non-functional requirements.
                            </p>
                            <p>
                              <b>Project Scope</b>: Articulate what the project
                              entails so that all stakeholders can understand
                              what's involved. This includes defining, at a high
                              level, what the system will do and establishes the
                              boundaries within which the team will operate.
                            </p>
                            <p>
                              <b>Project feasibility</b>: A project must be
                              feasible from technical, operational, and business
                              perspectives. In other words, one should be able to
                              build it and once it's deployed we should be able to
                              run it. It should also economically makes sense to
                              do these things.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-content-area">
                            <div className="img-wrapper">
                              <img
                                src="/images/inception.png"
                                alt="how it works image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="chat"
                    role="tabpanel"
                    aria-labelledby="chat-tab"
                  >
                    <div className="how-it-works-tab-content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-content-area">
                            <h4 className="title">Planning</h4>
                            <p>
                              The aim is to gather the information necessary to
                              control the software project. It describes the
                              approach to development and is the used to direct
                              the development effort and track progress.
                            </p>
                            <p>Focussed actions are listed below:</p>
                            <ul style={{ listStyleType: 'disc' }}>
                              <li>Architecture</li>
                              <li>Application Design</li>
                              <li>Infrastructure Design</li>
                              <li>Infrastructure cost and estimate</li>
                              <li>Number of people needed</li>
                              <li>Delivery timeline</li>
                              <li>Deliverables</li>
                              <li>Technology</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-content-area">
                            <div className="img-wrapper">
                              <img
                                src="/images/planning.png"
                                alt="how it works image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="settings"
                    role="tabpanel"
                    aria-labelledby="settings-tab"
                  >
                    <div className="how-it-works-tab-content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="left-content-area">
                            <h4 className="title">Execution</h4>
                            <p>
                              We believe that the way people interact with each
                              other is the primary determinant of success for a
                              solution delivery team. Also, the team members
                              should collaborate closely and learn from each
                              other.
                            </p>
                            <p>
                              Following agile methodology, the team will be
                              presenting the sprint progress every 2 weeks to
                              ensure there is no deviation from the vision.
                            </p>
                            <p>
                              While most of the executions fail because of Cloud
                              infrastructure spend, our teams ensure this is taken
                              care with clear definition of infrastructure sizing
                              and keep safety check on cloud billing.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="right-content-area">
                            <div className="img-wrapper">
                              <img
                                src="/images/deliver.png"
                                alt="how it works image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}
        <section className="partners" id="partners">
          <div className="container text-center pb-5">
            <h2 className="blue-underline-heading">Our Partners</h2>
            <div className="row py-2">
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/falabella.svg" class="object-cover" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/mahindra_logo.svg" class="object-cover" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/deserve.svg" class="object-cover" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/ola.svg" class="object-cover" />
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/crisil.png" class="object-cover" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/astraZeneca.svg" class="object-cover" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/thoughtworks.svg" class="object-cover" />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="col-12 py-4">
                  <img src="images/bewakoof.svg" class="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
