import React from "react";

export const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about mt-2">
        <div className="d-flex justify-content-evenly align-content-center m-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                <div className="d-flex flex-column align-content-start">
                  <p className="fs-6">HOW IT WORKS</p>
                  <h1 className="about-title">
                    We help families find reliable, flexible kidcare
                  </h1>
                  <p className="fs-3">
                    We'll match you with sitters based on your family's needs
                    and their availability.
                  </p>
                  <div className="d-flex flex-column">
                    <button className="btn about-btn btn-block align-self-start mb-2 d-flex align-items-center justify-content-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fbd3b6"
                        className="bi bi-circle-fill align-items-center me-1"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      Sign up
                    </button>
                    <button className="btn about-btn btn-block align-self-start mb-2 d-flex align-items-center justify-content-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fbd3b6"
                        className="bi bi-circle-fill align-items-center me-1"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      Book a sitter
                    </button>
                    <button className="btn about-btn btn-block align-self-start mb-2 d-flex align-items-center justify-content-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fbd3b6"
                        className="bi bi-circle-fill align-items-center me-1"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>{" "}
                      Get care & pay
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="card text-center mt-5">
                  <img
                    src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/64307bc13be141600626c749_Sign%20up%202.webp"
                    className="img-fluid p-4 about-card-img card-img-top"
                  />
                  <p className="p-2 fs-5" style={{ color: "#00373e" }}>
                    We like to keep it simple. Tell us your name, contact <br />{" "}
                    information, and a little bit about you and your kids.{" "}
                    <br />
                    Just like that, you're all set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
