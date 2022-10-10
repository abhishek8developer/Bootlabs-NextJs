import Header from './header'
import Footer from './footer'
import axios from 'axios'
import React from 'react'

const initFormState = {
    fname: '',
    lname: '',
    emailId: '',
    phone: '',
    message: ''
}

export default function Contact (){
    const [form, setForm] = React.useState(initFormState)
    async function fireEmail(e) {
        e.preventDefault()
        if(!form.fname || !form.lname || !form.emailId || (!form.phone && form.phone.length !== 10) || !form.message) {
            return null
        }
        try {
            const payload = form
            const res = await axios.post('/api/email', payload)
            if (res.status === 200) {
                alert('Mailed successfully.')
                setForm(initFormState)
            }
        } catch(e) {
            setForm(initFormState)
            console.error('Error in firing Email:', e)
        }
    }
    function onChange({ target }) {
        setForm({ ...form, [target.name]: target.value })
    }
    return (
        <>
            <Header />
            <section className="header-area header-bg" id="contactus">
                <div className="shape-1"><img src="/images/shape/01.png" alt=""/></div>
                <div className="shape-2"><img src="/images/shape/02.png" alt=""/></div>
                {/* <div className="shape-3"><img src="/images/shape/03.png" alt=""/></div> */}
                <div className="container">            
                    <div className="col-lg">
                        <div className="Form-header-inner text-center"> 
                            <h2 className="blue-underline-heading wow fadeInDown">Have a question or want to know more about us?</h2>
                            <h2 className="blue-underline-heading wow fadeInDown">Get in touch</h2>
                        </div>
                    </div>
                    <div className="Form-container">
                        <form onSubmit={fireEmail}>
                            <div className='form-group'>
                                <input type="text" name="fname" onChange={onChange} value={form.fname} placeholder="First Name" required/>
                                <input type="text" name="lname" onChange={onChange} value={form.lname} placeholder="Last Name" required/>
                            </div>
                            <div className='form-group'>
                                <input type="email" name="emailId" onChange={onChange} value={form.emailId} placeholder="Email id" required/>
                            </div>
                            <div className='form-group'>
                                <input type="text" name="phone" onChange={onChange} value={form.phone} placeholder="Phone Number" required/>
                            </div>
                            <div className='form-group'>
                                <textarea name="message" onChange={onChange} value={form.message} rows="10" placeholder="Enter message"></textarea>
                            </div>
                            <button type="submit" onClick={fireEmail}>Send</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}