import Image from 'next/image'
import Header from "./header"
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <header class="header-area header-bg" id="home">
          <div class="shape-1">
            <img src="/images/shape/01.png" alt="" />
          </div>
          <div class="shape-2">
            <img src="/images/shape/02.png" alt="" />
          </div>
          <div class="shape-3">
            <img src="/images/shape/03.png" alt="" />
          </div>
          <div class="header-right-image wow zoomIn">
            <img src="/images/mobile-image-4.png" alt="header right image" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="header-inner">
                  <h1 class="title wow fadeInDown">
                    Embark your Digital Journey
                  </h1>
                  <p>
                    While you focus on moulding your product, we build a secured
                    platform for you on the cloud
                  </p>
                  <div class="btn-wrapper wow fadeInUp">
                    {/* <!--   <a href="#about" class="boxed-btn btn-rounded">About Us</a>
                      <a href="" class="boxed-btn btn-rounded blank">Learn More</a> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section class="about-us-area style-two" id="about">
          <div class="container">
            <h1 className="blue-underline-heading">Let us help with your Cloud Journey</h1>
            <div class="row">
              <ul class="feature-list style-03">
                <li class="single-feature-list wow zoomIn">
                  <img src="/images/icon-1.png" />
                  <div class="content">
                    <h4 class="title">
                      <a href="#">Devops Consulting</a>
                    </h4>
                    <p>
                      From development to operations, we provide solutions to
                      ensure product delivery pipeline is seamless
                    </p>
                  </div>
                  <button type="button" class="boxed-btn btn-rounded">
                    <a href="/solutions">Find out more >></a>
                  </button>
                </li>
                <li class="single-feature-list wow zoomIn">
                  <img src="/images/icon-2.png" />
                  <div class="content">
                    <h4 class="title">
                      <a href="#">Cloud Consulting</a>
                    </h4>
                    <p>
                      With our strong expertise in multiple cloud platform (AWS,
                      GCP, Azure), we will be able to build a solid and secured
                      architecture on cloud
                    </p>
                  </div>
                  <button type="button" class="boxed-btn btn-rounded">
                    <a href="/solutions">Find out more >></a>
                  </button>
                </li>
                <li class="single-feature-list wow zoomIn">
                  <img src="/images/icon-3.png" />
                  <div class="content">
                    <h4 class="title">
                      <a href="#">Application Development</a>
                    </h4>
                    <p>
                      Following Test driven development, our full stack engineers
                      deliver the software with utmost quality
                    </p>
                  </div>
                  <button type="button" class="boxed-btn btn-rounded">
                    <a href="/about">Find out more >></a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="how-it-work-area" id="approach">
          <div class="shape-1">
            <img src="/images/shape/08.png" alt="" />
          </div>
          <div class="shape-2">
            <img src="/images/shape/09.png" alt="" />
          </div>
          <div class="shape-3">
            <img src="/images/shape/08.png" alt="" />
          </div>
          <div class="shape-4">
            <img src="/images/shape/09.png" alt="" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="section-title">
                  <span class="subtitle">Working Process</span>
                  <h3 class="title">How it works?</h3>
                  <p>
                    We have crafted the process to ensure there is clear delivery
                    principles followed
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="how-it-work-tab-nav">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="account-tab"
                        data-toggle="tab"
                        href="#account"
                        role="tab"
                        aria-controls="account"
                        aria-selected="true"
                      >
                        <i class="flaticon-checked"></i> Inception{" "}
                        <span class="number">1</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="chat-tab"
                        data-toggle="tab"
                        href="#chat"
                        role="tab"
                        aria-controls="chat"
                        aria-selected="false"
                      >
                        <i class="flaticon-chat-1"></i> Planning{" "}
                        <span class="number">2</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="settings-tab"
                        data-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <i class="flaticon-settings-1"></i> Execution{" "}
                        <span class="number">3</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="tab-content wow slideInUp">
                  <div
                    class="tab-pane fade show active"
                    id="account"
                    role="tabpanel"
                    aria-labelledby="account-tab"
                  >
                    <div class="how-it-works-tab-content">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="left-content-area">
                            <h4 class="title">Inception</h4>
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
                        <div class="col-lg-6">
                          <div class="right-content-area">
                            <div class="img-wrapper">
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
                    class="tab-pane fade"
                    id="chat"
                    role="tabpanel"
                    aria-labelledby="chat-tab"
                  >
                    <div class="how-it-works-tab-content">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="left-content-area">
                            <h4 class="title">Planning</h4>
                            <p>
                              The aim is to gather the information necessary to
                              control the software project. It describes the
                              approach to development and is the used to direct
                              the development effort and track progress.
                            </p>
                            <p>Focussed actions are listed below:</p>
                            <ul style={{ listStyleType:'disc'}}>
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
                        <div class="col-lg-6">
                          <div class="right-content-area">
                            <div class="img-wrapper">
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
                    class="tab-pane fade"
                    id="settings"
                    role="tabpanel"
                    aria-labelledby="settings-tab"
                  >
                    <div class="how-it-works-tab-content">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="left-content-area">
                            <h4 class="title">Execution</h4>
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
                        <div class="col-lg-6">
                          <div class="right-content-area">
                            <div class="img-wrapper">
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
        {/* <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          }
          
          * {
            box-sizing: border-box;
          }
        `}</style> */}
      </div>
      <Footer />
    </>
  );
}
