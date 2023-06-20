import React from "react";

export const Footer = () => {
  return (
    <>
      {/* FOOTER SECTION */}
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-evenly align-items-center footer-container">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="card m-5 p-5 footer-card-1">
                  <h1 className="fs-1">The bright side of kidcare</h1>
                  <p className="fs-4">
                    Get reliable on demand childcare from vetted sitters.
                  </p>
                  <button className="btn action-btn">Get started</button>
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-6">
                <div className="card m-5 p-5 footer-card-2">
                  <div className="d-flex justify-content-between align-items-center mb-5 social-links-footer">
                    <div className="d-flex flex-column align-items-center justify-content-start">
                      <a href="#" className="fs-5">
                        Parents
                      </a>
                      <a href="#" className="fs-5">
                        Sitters
                      </a>
                      <a href="#" className="fs-5">
                        Trust & Safety
                      </a>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-start">
                      <a href="#" className="fs-5">
                        FAQs
                      </a>
                      <a href="#" className="fs-5">
                        Careers
                      </a>
                      <a href="#" className="fs-5">
                        Blog
                      </a>
                      <a href="#" className="fs-5">
                        Contact
                      </a>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-start">
                      <a href="#" className="fs-5">
                        Instagram
                      </a>
                      <a href="#" className="fs-5">
                        Facebook
                      </a>
                      <a href="#" className="fs-5">
                        Twitter
                      </a>
                      <a href="#" className="fs-5">
                        Linkedin
                      </a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-5 social-links-footer">
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="#" className="me-3 fs-6">
                        Terms of Use
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fillRule="currentColor"
                        className="bi bi-circle-fill"
                        viewBox="0 0 18 18"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <a href="#" className="ms-3 fs-6">
                        Privacy Policy
                      </a>
                    </div>
                    <div>
                      <a className="footer-trademark fs-6">
                        © 2023 With Otter Inc.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
