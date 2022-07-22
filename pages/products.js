import Header from './header'
import Footer from './footer'

export default function Product() {
  return (
    <>
      <Header />
      <section className="header-area header-bg" id="product">
        <h1 className='blue-underline-heading'>Sailor</h1>
        <div className="image-frame">
          <a target="_blank" href="https://console.sailorcloud.io/login" title="Visit Sailor Site">
            <img src="/images/product/sailor.png" alt="" />
          </a>
          <a target="_blank" href="https://console.sailorcloud.io/login" title="Visit Sailor Site">
            <img className='link' src="/images/execute_color.png" />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
