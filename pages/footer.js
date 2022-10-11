export default function Home() {
    return (
        <footer className="footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
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
                        <div className="col-lg-2">
                            <div className="footer-widget about_widget">
                                <h3 className="quicklink-header">Product</h3>
                                <ul className="footer-nav">
                                    <li><a href="/product" className="quicklink">Sailor</a></li>
                                </ul>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4528.7640463729595!2d77.69792067498804!3d12.956465421261656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b0fb0b9ea7%3A0xcd5c8a1ebc0498!2sNovel%20Office%20Marathahalli!5e0!3m2!1sen!2sin!4v1665428773662!5m2!1sen!2sin"
                                    width="340"
                                    height="200"
                                    style={{ border: 0, position: 'absolute', right: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget about_widget">
                                <h3 className="quicklink-header">Company</h3>
                                <ul className="footer-nav">
                                    <li><a href="/about" className="quicklink">About Us</a></li>
                                    <li><a href="/contact" className="quicklink">Blogs</a></li>
                                    <li><a href="/solutions" className="quicklink">Services</a></li>
                                    <li><a href="/team" className="quicklink">Team</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-widget about_widget">
                                <h3 className="quicklink-header" >More...</h3>
                                <ul className="footer-nav">                                    
                                    <li><a href="/policies" className="quicklink">Terms of Service</a></li>
                                    <li><a href="/policies" className="quicklink">Privacy Policies</a></li>
                                    <li><a href="/contact" className="quicklink">Support</a></li>
                                    <li><a href="/contact" className="quicklink">Contact Us</a></li>
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
                                <div className="left-content-area">&copy; Copyrights 2020 Bootlabs All rights reserved.</div>
                                <div className="right-content-area"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
