import Header from "./header";
import Footer from "./footer";
import React from "react";
import { get } from "axios";
import { useUser } from '@auth0/nextjs-auth0';

export default function Career() {
  const [jobs, setJobs] = React.useState([])
  const { user, error, isLoading } = useUser() || {}
  
  async function getJobs(){
    try {
      const response = await get('/api/all-careers')
      if(response.data && response.status >= 200 && response.status < 300) {
        setJobs(response.data.data)
      }
    } catch(e) {
      console.error('Error:', e);
    }
  }
  async function getJob(){
    try {
      const response = await get('/api/career')
      console.log(response, '-')
    } catch(e) {
      console.error('Error:', e);
    }
  }
  
  React.useEffect(() => {
    getJobs()
    getJob()
  }, [])
  return (
    <>
      <Header />
      <section class="how-it-work-area bg-grey" id="career">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div className="col-lg-12 bg-image">
              <h2 className="main-heading white"> Join Our Team </h2>
              <p>
                We're simplifying the cloud for developers. We need talented
                people like you to help us support and expand our
                high-performance cloud infrastructure.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-12 text-center ">
                  <h2 className="blue-underline-heading">Current Openings</h2>
                </div>
              </div>
              {user ? (
                <div className="row">
                  <div className="col-lg-12 text-right pb-4">
                    <button className="btn btn-primary">Manage Jobs</button>
                  </div>
                </div>
              ) : null}
              {jobs.map((job, i) => (
                <div className="row box" key={i}>
                  <div className="col-lg-9">
                    <label>{job.title}</label>
                    <p>
                      {job.description}
                    </p>
                    <a className="apply">APPLY NOW</a>
                  </div>
                  <div className="col-lg-3">
                    <i class="fas fa-map-marker-alt"></i> {job.city}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
