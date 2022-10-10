import Header from './header'
import Footer from './footer'

export default function promotion() {
  return (
    <>
      <Header />
      <section className="header-area header-bg" id="product"></section>
        <div className="container-fluid">
          <div className="col img-fluid">
            <img src="/images/DiscountAdvert.jpg"/>
          </div>    
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
