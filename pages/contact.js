import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import React from "react";

const initFormState = {
  fname: "",
  lname: "",
  emailId: "",
  phone: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = React.useState(initFormState);
  async function fireEmail(e) {
    e.preventDefault();
    if (
      !form.fname ||
      !form.lname ||
      !form.emailId ||
      (!form.phone && form.phone.length !== 10) ||
      !form.message
    ) {
      return null;
    }
    try {
      const payload = form;
      const res = await axios.post("/api/email", payload);
      if (res.status === 200) {
        alert("Mailed successfully.");
        setForm(initFormState);
      }
    } catch (e) {
      setForm(initFormState);
      console.error("Error in firing Email:", e);
    }
  }
  function onChange({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }
  return (
    <>
      <Header />
      <section className="header-area header-bg" id="contactus">
        <div className="shape-1">
          <img src="/images/shape/01.png" alt="" />
        </div>
        <div className="shape-2">
          <img src="/images/shape/02.png" alt="" />
        </div>
        {/* <div className="shape-3"><img src="/images/shape/03.png" alt=""/></div> */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="blue-underline-heading wow fadeInDown">
                Have a question or want to know more about us?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="blue-underline-heading wow fadeInDown">
                Get in touch
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="Form-container">
              <form onSubmit={fireEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fname"
                    onChange={onChange}
                    value={form.fname}
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="lname"
                    onChange={onChange}
                    value={form.lname}
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="emailId"
                    onChange={onChange}
                    value={form.emailId}
                    placeholder="Email id"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    onChange={onChange}
                    value={form.phone}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    onChange={onChange}
                    value={form.message}
                    rows="10"
                    placeholder="Enter message"
                  ></textarea>
                </div>
                <button type="submit" onClick={fireEmail}>
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="row" >
            <div className="col-12 text-center">
              <h2 className="blue-underline-heading wow fadeInDown">
                Our Office
              </h2>
            </div>
          </div>
          <div className="row"
           style={{paddingBottom :"50px"}}
          >
            <div className="col-lg-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4528.7640463729595!2d77.69792067498804!3d12.956465421261656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b0fb0b9ea7%3A0xcd5c8a1ebc0498!2sNovel%20Office%20Marathahalli!5e0!3m2!1sen!2sin!4v1665428773662!5m2!1sen!2sin"
                width="600"
                height="200"
                style={{ border: 0, margin: "20px auto", display: "block" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div
              className="col-lg-3"
              style={{ padding: "50px 50px 0 15px", textAlign: "right" }}
            >
              <p>Bootlabs, 4th Floor,</p>
              <p>Novel MSR Building</p>
              <p>Marathahalli, Bengaluru</p>
              <p>Karnataka 560037</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
