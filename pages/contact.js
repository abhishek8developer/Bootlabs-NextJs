import Header from './header'
import Footer from './footer'

export default function Contact (){
    return (
        <>
            <Header />
            <section class="header-area header-bg" id="contactus">
                <div class="shape-1"><img src="/images/shape/01.png" alt=""/></div>
                <div class="shape-2"><img src="/images/shape/02.png" alt=""/></div>
                {/* <div class="shape-3"><img src="/images/shape/03.png" alt=""/></div> */}
                <div class="container">            
                    <div class="col-lg">
                        <div class="Form-header-inner"> 
                            <h1 class="title wow fadeInDown">Have a question or want to know more about us?</h1>
                            <h1 class="title wow fadeInDown">Get in touch</h1>
                        </div>
                    </div>
                    <div class="Form-container">
                        <form onSubmit="sendEmail(); reset(); return false;">
                            <div className='form-group'>
                                <input type="text" id="name" placeholder="First Name" required/>
                                <input type="text" id="name" placeholder="Last Name" required/>
                            </div>
                            <div className='form-group'>
                                <input type="email" id="email" placeholder="Email id" required/>
                            </div>
                            <div className='form-group'>
                                <input type="text" id="phone" placeholder="Phone Number" required/>
                            </div>
                            <div className='form-group'>
                                <textarea id="message" rows="10" placeholder="Enter message"></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}