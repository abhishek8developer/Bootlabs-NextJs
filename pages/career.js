import Header from "./header";
import Footer from "./footer";

export default function Career() {
  const jobs = [
    {
      title: "Senior Frontend Developer - WordPress",
      description:
        "Job Overview: Bootlabs is looking for an ambitious and self-driven Senior Front-end Developer who is motivated to combine the art of design with the art...",
      city: "Bangalore",
    },
    {
      title: "Associate Software Engineer - ReactJS",
      description:
        "Job Overview: We are looking for some fresh software developer to train and develop react development skills in-house which is hard to find in a",
      city: "Bangalore",
    },
    {
      title: "Sr. Digital Content writer",
      description:
        "Job Overview: We are looking for candidates who posses strong writing, editing and competitive research skills to join as an SEO content writer.",
      city: "Bangalore",
    },
    {
      title: "Social Media Marketing Manager",
      description:
        "Job Overview: The Social Media Marketing Manager is both a creative and strategic role. You'll help shape our social strategy, bringing the Bootlabs brand",
      city: "Bangalore",
    },
  ];
  return (
    <>
      <Header />
      <section class="how-it-work-area bg-grey" id="career">
        <div class="container-fluid">
          <div class="row ">
            <div className="col-lg-12 bg-image">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <h2 className="main-heading"> Join Our Team </h2>
                    <p>
                      We are simplifying the cloud for developers. We need talented
                      people like you to help us support and expand our
                      high-performance cloud infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-12 text-center ">
                  <h2 className="blue-underline-heading">Current Openings</h2>
                </div>
              </div>
              {jobs.map((job) => (
                <div className="row box">
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
