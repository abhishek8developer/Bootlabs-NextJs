export default function Home() {
    return (
        <footer className="footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="footer-widget about_widget">
                                <a href="/" className="footer-logo">
                                    <img src="/images/brand-logos/logo.png" alt="" />
                                </a>
                                <ul className="social-icon">
                                    <p>Bootlabs, 4th Floor,</p>
                                    <p>Novel MSR Building, Marathahalli,</p>
                                    <p>Bengaluru, Karnataka 560037</p>
                                    <p><a href="mailto:sales@bootlabstech.com">sales@bootlabstech.com</a></p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-widget about_widget">
                                <h3 className="quicklink-header" >Quick links</h3>
                                <ul className="footer-nav">
                                    <li><a href="/about" className="quicklink">About</a></li>
                                    <li><a href="/contact" className="quicklink">Contact Us</a></li>
                                    <li><a href="/policies" className="quicklink">Policies</a></li>
                                    <li><a href="/products" className="quicklink">Products</a></li>
                                    <li><a href="/solutions" className="quicklink">Solutions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-inner">
                                <div className="left-content-area">
                                    &copy; Copyrights 2020 Bootlabs All rights reserved.
                                </div>
                                <div className="right-content-area">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
