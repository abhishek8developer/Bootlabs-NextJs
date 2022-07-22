import Head from "next/head";
import React from "react";

export default function Header() {
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/cloud1.png" />
        <link rel="stylesheet" href="/style.css" />
        <script src="/js/jquery.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/owl.carousel.min.js"></script>
        <script src="/js/jquery.magnific-popup.js"></script>
        <script src="/js/contact.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/main.js"></script>

        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/fontawesome.5.7.2.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

      </Head>
      <nav className="navbar navbar-area navbar-expand-lg nav-absolute white nav-style-01">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="logo-wrapper">
              <a href="/" className="logo">
                <img
                  src="/images/Bootlabs-logo.gif"
                  alt="logo"
                  style={{ maxWidth: 190, paddingTop: 9 }}
                />
              </a>
            </div>
            <button
              className="navbar-toggler black"
              type="button"
              data-toggle="collapse"
              data-target="#appside_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ margin: "none" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="appside_main_menu">
            <ul className="navbar-nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <div className="dropdown">
                  <a href="/solutions" className="dropbtn">
                    Solutions
                  </a>
                  {/* <div className="solution-drop-content">
                    <a href="/solutions">Services</a>
                    <a href="/products">Products</a>
                  </div> */}
                </div>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/career">Career</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              {/* <input type="text" placeholder="Search.." /> */}
            </ul>
          </div>
        </div>
      </nav>
      {loader ? (
        <div className="preloader-wrapper" id="preloader">
          <div className="preloader">
            <div className="sk-circle">
              <div className="sk-circle1 sk-child"></div>
              <div className="sk-circle2 sk-child"></div>
              <div className="sk-circle3 sk-child"></div>
              <div className="sk-circle4 sk-child"></div>
              <div className="sk-circle5 sk-child"></div>
              <div className="sk-circle6 sk-child"></div>
              <div className="sk-circle7 sk-child"></div>
              <div className="sk-circle8 sk-child"></div>
              <div className="sk-circle9 sk-child"></div>
              <div className="sk-circle10 sk-child"></div>
              <div className="sk-circle11 sk-child"></div>
              <div className="sk-circle12 sk-child"></div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="back-to-top">^</div>
    </>
  );
}
