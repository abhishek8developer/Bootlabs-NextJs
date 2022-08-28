import Header from './header'
import Footer from './footer'

export default function Product() {
  return (
    <>
      <Header />
      <section className="header-area header-bg" id="product">
        <h2 className='blue-underline-heading'>Sailor</h2>
        <div className="image-frame">
          <div className='image-scroller'>
            <a target="_blank" href="https://console.sailorcloud.io/login" title="Visit Sailor Site">
              <img src="/images/product/sailor-full-home.png" alt="" />
            </a>
          </div>
          <a target="_blank" href="https://console.sailorcloud.io/login" title="Visit Sailor Site">
            <img className='link' src="/images/execute_color.png" />
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
