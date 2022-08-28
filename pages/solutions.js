import Header from './header'
import Footer from './footer'

export default function Solutions() {
    return (
        <>
            <Header />
            <section class="solution-area style-two" id="solutions">
                <div class="container">
                    <h2 className="blue-underline-heading">Let us help with your Cloud Journey</h2>
                    <div class="row">
                        <ul class="feature-list style-03">
                            <li class="single-feature-list wow zoomIn">
                                <img src="/images/icon-1.png" />
                                <div class="content">
                                    <h4 class="title">
                                        <a href="#">Cloud Platform</a>
                                    </h4>
                                    <p>
                                        BootLabs can amplify your team's productivity with efficient, highly resilient, auto-scalable cloud solutions, using cutting-edge cloud platforms. We have deep expertise in modernising the core, which then transforms your business, reduces cost overhead and improves operational agility.
                                    </p>
                                </div>
                                {/* <button type="button" class="boxed-btn btn-rounded">
                                    <a href="/solutions">Find out more >></a>
                                </button> */}
                            </li>
                            <li class="single-feature-list wow zoomIn">
                                <img src="/images/icon-2.png" />
                                <div class="content">
                                    <h4 class="title">
                                        <a href="#">Cloud Security</a>
                                    </h4>
                                    <p>
                                    How to be secure while moving workloads to cloud? Modernising infrastructure, data and applications does not mean less secure. Implementing security policies, vulnerability checks and securing cloud infrastructure are implicit. Continuous security monitoring, fixing leaks, adhering to compliance and governance are our DNA.
                                    </p>
                                </div>
                                {/* <button type="button" class="boxed-btn btn-rounded">
                                    <a href="/solutions">Find out more >></a>
                                </button> */}
                            </li>
                            <li class="single-feature-list wow zoomIn">
                                <img src="/images/icon-3.png" />
                                <div class="content">
                                    <h4 class="title">
                                        <a href="#">Cloud Operate</a>
                                    </h4>
                                    <p>
                                    Modern organisations look for agility, speed and nimbleness as they embrace open source technology. We don't always want to know the underlying complexities. The abstraction can be achieved using automated infrastructure provisioning via IaaC (Infrastructure as a Code) and CaaS (Container as a Service). This reduces manual errors & improves speed to market.
                                    </p>
                                </div>
                                {/* <button type="button" class="boxed-btn btn-rounded">
                                    <a href="/about">Find out more >></a>
                                </button> */}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="container pt-5">
                    <div className="section-title">
                        <span className="subtitle">ARE YOU STRUGGLING WITH</span>
                        <h2 className="main-heading">Building DevOps Capability?</h2>
                        <p>Improving speed to market or operational agility?</p>
                        <br/>
                        <p>We are continuous experimenters in DevSecOps transformations. Having successfully transformed large digital platforms across various industries including Automotive, BFSI & Retail, e-commerce, our motto is to engineer a seamless digital fluency to your business. Powered by DevSecOps tools of your choice, this package delivers in just 3-6months, your automation needs. For beginners, intermediates and advanced SaaS organizations.</p>
                    </div>
                    <div class="row">
                        <ul class="feature-list style-03 style-04">
                            <li class="single-feature-list wow zoomIn">
                                <img src="/images/icon-1.png" />
                                <div class="content">
                                    <h4 class="title">
                                        <a href="#">Automated Pipeline (CI / CD)</a>
                                    </h4>
                                    <p>Cover different tech stack needs with efficient management of automated deployments for each type of release. Ensure build, deploy and operate are seamless. Unit / Integration / Security / Performance testing. Infrastructure as a Code and Release Orchestration.</p>
                                </div>
                            </li>
                            <li class="single-feature-list wow zoomIn">
                                <img src="/images/icon-2.png" />
                                <div class="content">
                                    <h4 class="title">
                                        <a href="#">Kubernetes Enablement</a>
                                    </h4>
                                    <p>Deliver best-in-class cloud-agnostic container orchestration for your workloads. Migrate your workloads from VM's to containers. Automate cluster deployment strategies. Service-mesh enablement for microservices. Scalability based on custom metrics</p>
                                </div>
                            </li>
                            <li class="single-feature-list wow zoomIn">
                                <img src="/images/icon-3.png" />
                                <div class="content">
                                    <h4 class="title">
                                        <a href="#">Observability and Monitoring</a>
                                    </h4>
                                    <p>Behavioural insight definitions for performance, compliance and security on your services and applications. Automate monitoring, tracing and logging. Connected view of all performance metrics at one place. Pinpoint issues faster and understand why</p>
                                </div>
                            </li>
                            <li class="single-feature-list wow zoomIn">
                                <img src="/images/icon-3.png" />
                                <div class="content">
                                    <h4 class="title">
                                        <a href="#">Security</a>
                                    </h4>
                                    <p>Securing application and infrastructure using compliance checkpoints. Provide central SIEM (Security, Information and Event Management). Cloud compliance and governance. Granular, policy based IAM and authentication controls</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <header className="header-area header-bg" id="home">
                <div className="shape-1">
                    <img src="/images/shape/01.png" alt="" />
                </div>
                {/* <!-- <div className="shape-2"><img src="/images/shape/02.png" alt=""></div>
          <div className="shape-3"><img src="/images/shape/03.png" alt=""></div> --> * /}
                <div className="header-right-image-solution">
                    <img src="/images/planning.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="header-inner">
                                <h1 className="title wow fadeInDown">
                                    Let's make another revolution in cloud..
                                </h1>
                                <p>
                                    While you focus on moulding your product, we build a secured
                                    platform for you on the cloud
                                </p>
                                <div className="btn-wrapper wow fadeInUp"></div>
                            </div>
                        </div>
                    </div>
                    <h4 className="title-service">
                        # Let us help you to
                        <br />
                        Build a Cloud Strategy
                    </h4>
                </div>
            </header>
            <section>
                <div className="container">
                    <div className="container-product">
                        <h1>We are Cloud Experts</h1>
                        <h3>Engage with your own cloud using Bootlabs</h3>
                    </div>
                    <div className="container-product-sailor">
                        <h1>Ready to sail ?</h1>
                        <h3>Join us to sail with our</h3>
                    </div>
                    <div className="content">
                        <h2>Sailor</h2>
                        <h2>Sailor</h2>
                    </div>
                </div>
            </section>
            <header className="header-area header-bg" id="home">
                <div className="shape-1"><img src="/images/shape/01.png" alt="" /></div>
                {/* <!-- <div className="shape-2"><img src="/images/shape/02.png" alt=""/></div>
                <div className="shape-3"><img src="/images/shape/03.png" alt=""/></div> --> * /}
                <div className="header-right-image-solution">
                    <img src="/images/planning.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="header-inner">
                                <h1 className="title wow fadeInDown">Let's make another revolution in cloud..</h1>
                                <p>While you focus on moulding your product, we build a secured platform for you on the cloud</p>
                                <div className="btn-wrapper wow fadeInUp">
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="title-service"># Let us help you to<br />Build a Cloud Strategy</h4>
                </div>
            </header> */}
            {/* <section className="solution-area">
                <div className="container">
                    <div className="solution-list">
                        <head>Cloud Migration<br />_______</head>
                    </div>
                    <div className="solution-content">
                        <h4>Making Cloud Migration Simplified For Your Complex Business</h4>
                        <p>
                            Transforming your Business through the seamless migrating between secure and scalable
                            cloud environments while ensuring near zero downtime and zero data loss.
                            We handcraft unique strategy exclusive to your processes and execute to scale faster,
                            reducing overheads accelerating Business Growth.
                        </p>
                        <img src="/images/Onprem-cloud.gif" alt="" />
                        <div className="solution-list-devops">
                            <head>Devops Consulting<br />_______</head>
                        </div>
                        <div className="solution-content-devops">
                            <img src="/images/Devops (2).gif" alt="" />
                            <div>
                                <h4>Agility | Speed | Viability - Yes, It's Bootlabs Devops Boutique</h4>
                                <p>
                                    Powerful Methodologies and
                                    Proven Practices tailored to modernize your DevOps processes at every stage.
                                    You can get the liberty to make things in your own way by utilising our highly customisable libraries.
                                    Experience the Near Zero Touch implementation with BootLabs.
                                    <li>End to End Pipeline (CI/CD/CT)</li>
                                    <li>K8s enablement</li>
                                    <li>Infrastructure as Code (IaaS)</li>
                                    <li>Servicemesh implementation</li>
                                </p>
                            </div>
                        </div>
                        <div className="solution-list-cloud">
                            <head>Cloud in a Box<br />_______</head>
                        </div>
                        <div className="solution-content-cloud">
                            <h4>Bootlab's Cloud Agnostic Trademark Solution</h4>
                            <p>
                                We enable organizations with next-generation cloud intelligence for a digital shift.
                                When you drive towards innovation, we anticipate and move your critical workloads to
                                cloud smart models. We take charge of your whole cloud infrastructure and provide world-class
                                support through our boutique of versatile tools and battle tested automation scripts for multi-cloud
                                orchestration
                            </p>
                            <img src="/images/sol01-img02.gif" alt="" />
                        </div>
                        <div className="solution-list-govern">
                            <head>Cloud Governance<br />_______</head>
                            <img src="/images/Govern.gif" alt="" />
                        </div>
                        <div className="solution-content-govern">
                            <h4>Bringing everything together to Assess, Monitor and Control Cloud seamlessly!!</h4>
                            <p>
                                We ensure a clear-cut Cloud adoption through our unique policy engine capabilities
                                to bring in the curated policy settings and the future-ready best practices,
                                that make your organization compliant with any audits and security requirements.
                                Customised Policy Template
                                Cloud Independence Security Features
                                Developer Portal for Self Service
                            </p>
                        </div>
                        <div className="solution-list-observe">
                            <head>Observability<br />_______</head>
                        </div>
                        <div className="solution-content-observe">
                            <h4>Stay on top, Detect earlier, Troubleshoot Faster, Resolve and Automate</h4>
                            <p>
                                With our decades of expertise over various observability stack tools, we bring essential
                                insights right for your organization resulting in preventive actions and informed decisions
                            </p>
                            <img src="/images/Observe.gif" alt="" />
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </>
    )
}