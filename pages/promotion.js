import Header from './header'
import Footer from './footer'

export default function promotion() {
  return (
    <>
      <Header />
      <section className="header-area" id="promotion">
        <div className="container-fluid">
          <div className="col">
            <img src="/images/DiscountAdvert.jpg" className="service-image"/>
          </div>    
        </div>
        <div className="container text-lg-center pb-5d">       
       <h2 className="blue-underline-heading">Would you like to Explore more?</h2>
       <br></br>
       <a href="\contact" className="btn btn-primary" style={{ padding: '9px 40px' }}>Get in Touch</a>  
       <p></p>
       </div>
       </section>
      <Footer />
    </>
  );
}
