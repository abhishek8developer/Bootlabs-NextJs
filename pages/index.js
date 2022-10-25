import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

const GCPImage = () => (
  <img src="data:image/png;base64,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" alt="GCP" />
)

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
                    Accelerating Cloud Journeys and Pipelines
                  </h2>
                  <p>
                    Bridging the gap between business and cloud ecosystems by
                    building accelerators
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
        <section class="partners row bg-black style-two pb-5" id="partners">
          <div class="container text-center">
            <h2 className="white-underline-heading">Proud Partners</h2>
            <div class="row">
              <div class="col-md-1 col-xs-0">
              </div>
              <div class="col-md-2 col-6">
                <img src="images/brand-logos/aws.png" alt="AWS" />
              </div>
              <div class="col-md-2 col-6">
                <img src="images/Spot.png" alt="Spot.io" />
              </div>
              <div class="col-md-2 col-6">
                <img src="images/brand-logos/scalix-logo.svg" alt="Scalix" />
              </div>
              <div class="col-md-2 col-6">
                <img src="images/Ingram.png" alt="Ingram" />
              </div>
              <div class="col-md-2 col-xs-12">
                <GCPImage />
              </div>
            </div>
          </div>
        </section>
        <section className="difficult row" id="difficult">
          <div className="container text-center pb-5">
            <h2 className="blue-underline-heading">
              We will bring the best of Cloud for you
            </h2>
            <div className="row py-2">
              <div class="col-lg-1"></div>
              <div class="col-lg-10">
                <p>
                  We make you Fast in the distributed world running on Cloud.
                </p>
                <p>
                  With our Templates, Workflows, Frameworks and our Custom
                  Products.
                </p>
                <p>
                  We partner you in your journey of Modernization, Migration,
                  Digital Transformation or Future Readiness.
                </p>
                <p>
                  We help you run the show fast with Day0, Day1 and Day2
                  readiness on any of your Public Cloud Subscription and when
                  you want to interchange your workloads across them.
                </p>
              </div>
              <div class="col-lg-1"></div>
            </div>
          </div>
        </section>
        <section
          className="about-us-area row bg-black style-two pb-5"
          id="cloudOfferings"
        >
          <div className="container text-center">
            <h2 className="white-underline-heading text-on-dark-bg">
              Cloud Offerings
            </h2>
            <div className="container-fluid">
              <div className="row py-4">
                <div className="col-md-6">
                  <div className="content">
                    <img
                      src="/images/cloud-consulting.png"
                      className="service-images"
                      width="70px"
                    />
                    <p></p>
                    <h4 className="title text-lg-center text-on-dark-bg">
                      Cloud Consulting
                    </h4>
                    <p className="white">
                      With our extended exposure and architectural experience in
                      the major Public cloud like AWS, Azure, GCP, Oracle,
                      digital ocean and hybrid cloud and data center we have
                      learned their peculiarities and we always share them as
                      our core consulting services. ...
                      <a
                        href="\consulting"
                        className="title text-lg-center text-on-dark-bg"
                      >
                        Know More
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <img
                      src="/images/360-degrees.png"
                      className="service-images"
                      width="70px"
                    />
                    <p></p>
                    <h4 className="title text-lg-center text-on-dark-bg">
                      360&deg; Ops
                    </h4>
                    <p className="white">
                      Accelerate your cloud journey by leveraging our end-to-end
                      Cloud managed services. Make your cloud journey simpler,
                      faster, and cost-effective, while meeting your business
                      and digital objectives. ...
                      <a
                        href="\360Ops"
                        className="title text-lg-center text-on-dark-bg"
                      >
                        Know More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row py-4">
                <div className="col-md-6">
                  <div className="content">
                    <img
                      src="/images/cloud-digital-transformation.png"
                      className="service-images"
                      width="70px"
                    />
                    <p></p>
                    <h4 className="title text-lg-center text-on-dark-bg">
                      Digital Transformation
                    </h4>
                    <p className="white">
                      We help you adopt transformation that is scalable,
                      data-centric , evolutionary and modern while keeping your
                      costs within the estimations. ...
                      <a
                        href="\transform"
                        className="title text-lg-center text-on-dark-bg"
                      >
                        Know More
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <img
                      src="/images/platform-engineering.png"
                      className="service-images"
                      width="70px"
                    />
                    <p></p>
                    <h4 className="title text-lg-center text-on-dark-bg">
                      Platform Engineering
                    </h4>
                    <p className="white">
                      We build custom platforms and frameworks based on the
                      business use cases and aligned to your needs of
                      availability, resilience and budget. ...
                      <a
                        href="\platform"
                        className="title text-lg-center text-on-dark-bg"
                      >
                        Know More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="difficult row" id="difficult">
          <div className="container text-center pb-5">
            <h2 className="blue-underline-heading">
              Are you facing difficulty in building your DevOps capability?
            </h2>
            <img src="/images/Observe.gif" className="img-fluid" />
            <div className="row py-2">
              <div class="col-lg-1"></div>
              <div class="col-lg-10">
                <p>
                  We are continuous experimenters in DevSecOps transformations.
                  Having successfully transformed large digital platforms across
                  various industries including Automotive, BFSI & Retail,
                  e-commerce, our motto is to engineer a seamless digital
                  fluency to your business. Powered by DevSecOps tools of your
                  choice, this package delivers in just 3-6 months, your
                  automation needs. For beginners, intermediates and advanced
                  SaaS organizations.
                </p>
              </div>
              <div class="col-lg-1"></div>
            </div>
          </div>
        </section>
        <section
          className="about-us-area row bg-black style-two pb-5"
          id="devopsOfferings"
        >
          <div className="container text-center">
            <h2 className="white-underline-heading text-on-dark-bg">
              DevOps Offerings
            </h2>
            <div className="row py-4">
              <div className="col-md-7">
                <img src="/images/CICD.png" className="rounded" />
              </div>
              <div className="col-md-5" style={{ textAlign: "right" }}>
                <div className="content">
                  <h4 className="title text-on-dark-bg">
                    Automated Pipeline (CI / CD)
                  </h4>
                  <p className="white">
                    Cover different tech stack needs with efficient management
                    of automated deployments for each type of release. Ensure
                    build, deploy and operate are seamless. Unit / Integration /
                    Security / Performance testing. Infrastructure as a Code and
                    Release Orchestration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-md-5">
                <div className="content">
                  <h4 className="title text-on-dark-bg">
                    Kubernetes Enablement
                  </h4>
                  <p className="white">
                    Deliver best-in-class cloud-agnostic container orchestration
                    for your workloads. Migrate your workloads from VM's to
                    containers. Automate cluster deployment strategies.
                    Service-mesh enablement for microservices. Scalability based
                    on custom metrics
                  </p>
                </div>
              </div>
              <div className="col-md-7 center-image">
                <img src="/images/kubernetes.png" className="rounded" />
              </div>
            </div>
            <div className="row py-4">
              <div className="col-md-7 center-image">
                <img src="/images/Observability.png" className="rounded" />
              </div>
              <div className="col-md-5">
                <div className="content">
                  <h4 className="title text-on-dark-bg">
                    Observability and Monitoring
                  </h4>
                  <p className="white">
                    Behavioural insight definitions for performance, compliance
                    and security on your services and applications. Automate
                    monitoring, tracing and logging. Connected view of all
                    performance metrics at one place. Pinpoint issues faster and
                    understand why
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-md-5">
                <div className="content">
                  <h4 className="title text-on-dark-bg">Security</h4>
                  <p className="white">
                    Securing application and infrastructure using compliance
                    checkpoints. Provide central SIEM (Security, Information and
                    Event Management). Cloud compliance and governance.
                    Granular, policy based IAM and authentication controls
                  </p>
                </div>
              </div>
              <div className="col-md-7 center-image">
                <img src="/images/Security.png" className="rounded" />
              </div>
            </div>
          </div>
        </section>
        {/*Older section of how it works */}
        <section className="how-it-work-area" id="approach">
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
                  <h2 className="blue-main-heading">How it works?</h2>
                  <p>
                    We have crafted the process to ensure there is clear
                    delivery principles followed
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
                              to thoroughly understand and clarify the
                              functional and non-functional requirements.
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
                              perspectives. In other words, one should be able
                              to build it and once it's deployed we should be
                              able to run it. It should also economically makes
                              sense to do these things.
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
                            <ul style={{ listStyleType: "disc" }}>
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
                              infrastructure spend, our teams ensure this is
                              taken care with clear definition of infrastructure
                              sizing and keep safety check on cloud billing.
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
        </section>
        {/*Call to action Section*/}
        <section
          className="about-us-area row bg-black style-two pb-5"
          id="about"
        >
          <div className="container text-center">
            <h2 className="white-underline-heading text-on-dark-bg">
              Would you like to Explore more?
            </h2>
            <br></br>
            <a href="\contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </section>
        {/*Client Section*/}
        <section className="partners" id="clients">
          <div className="container text-center pb-5">
            <h2 className="blue-underline-heading">We Serve</h2>
            <div className="row py-2">
              <div class="col-lg-3 col-md-6">
                  <img src="images/falabella.svg" class="object-cover" />
              </div>
              <div class="col-lg-3 col-md-6">
                  <img src="images/mahindra_logo.svg" class="object-cover" />
              </div>
              <div class="col-lg-3 col-md-6">
                  <img src="images/deserve.svg" class="object-cover" />
              </div>
              <div class="col-lg-3 col-md-6">
                  <img src="images/ola.svg" class="object-cover" />
              </div>
            </div>
            <div className="row py-2">
              <div class="col-lg-3 col-md-6">
                  <img src="images/crisil.png" class="object-cover" />
              </div>
              <div class="col-lg-3 col-md-6">
                  <img src="images/astraZeneca.svg" class="object-cover" />
              </div>
              <div class="col-lg-3 col-md-6">
                  <img src="images/thoughtworks.svg" class="object-cover" />
              </div>
              <div class="col-lg-3 col-md-6">
                  <img src="images/bewakoof.svg" class="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
