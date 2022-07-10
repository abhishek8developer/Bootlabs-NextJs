import Header from './header'
import Footer from './footer'

export default function Career(){
    return (
        <>
            <Header />
            <section class="how-it-work-area" id="approach">
                <div class="shape-1"><img src="/images/shape/08.png" alt=""/></div>
                <div class="shape-2"><img src="/images/shape/09.png" alt=""/></div>
                <div class="shape-3"><img src="/images/shape/08.png" alt=""/></div>
                <div class="shape-4"><img src="/images/shape/09.png" alt=""/></div>
                <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <div class="section-title">
                                    <h3 class="title">SUBSCRIBE US</h3>
                                </div>
                            </div>
                        </div>        
                        <button type="button" class="btn btn-primary">
                            <a href="RegistrationForm.html">Click Here</a>
                        </button>
                </div>           
            </section>
            <Footer/>
        </>
    )
}