import Header from './header'
import Footer from './footer'

export default function operations() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ paddingTop: '4vw' }}>
         <section className="row" id="Ops">
          <div className="container text-lg-left pb-5">
            <h2 className="blue-underline-heading">Case Studies</h2>
            <div className="row py-2">
              <div class="col-lg-1">
              </div>
              <div className="container-fluid">
                <div className='row'>
                  <div class="col-lg text-lg-left">
                    <p>We had been instrumental in running various workloads on cloud, designing robust pipelines, and managing humoungius migration activities
                      In the below case studies we talk about the same. Accelerate your cloud journey by leveraging our end-to-end Cloud managed services.</p>                    
                  </div>                  
                  <div className="col-lg-4-6">
                  <h2 className="blue-underline-heading">Migration from Azure to GCP</h2>
                  <img src="/images/Slide1.jpg" className="img-fluid" />
                  <img src="/images/Slide2.jpg" className="img-fluid" />
                  </div>
                  <div className="col-lg-4-6">
                  <h2 className="blue-underline-heading">Resilience in the Code</h2>
                  <img src="/images/Slide3.jpg" className="img-fluid" />
                  <img src="/images/Slide4.jpg" className="img-fluid" />
                  </div>
                  <div className="col-lg-4-6">
                  <h2 className="blue-underline-heading">Deployment in GCP</h2>
                  <img src="/images/Slide5.jpg" className="img-fluid" />
                  <img src="/images/Slide6.jpg" className="img-fluid" />
                  </div>
                  </div>
                </div>
                <div class="col-lg-1">
                </div>
              </div>
            </div>
          </section>        
        <section className="about-us-area row bg-black style-two pb-5" id="about">
        <div className="container text-lg-center pb-5d">       
       <h2 className="blue-underline-heading">Would you like to Explore more?</h2>
       <br></br>
       <a href="\contact" className="btn btn-primary" style={{ padding: '9px 40px' }}>Get in Touch</a>  
       <p></p>
       </div>
        </section>         
       </div>
      <Footer/>
    </>
  );
}
