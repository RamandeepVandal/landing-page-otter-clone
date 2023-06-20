import React from "react";

export const Faq = () => {
  return (
    <>
      {/* FAQs SECTION */}
      <section className="mt-5 faq">
        <div className="container">
          <div className="row">
            <div>
              <div className="d-flex justify-content-evenly align-items-center faq-title">
                <h1 className="about-title target-audience">
                  Common Questions
                </h1>
                <button className="btn action-btn">View all FAQs</button>
              </div>
              <div className="card m-4 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="fs-3 faq-text">What is Otter?</h1>
                  <button className="btn action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="card m-4 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="fs-3 faq-text">
                    How is Otter different from other childcare options?
                  </h1>
                  <button className="btn action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="card m-4 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="fs-3 faq-text">
                    Does Otter offer last-minute backup care?
                  </h1>
                  <button className="btn action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="card m-4 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="fs-3 faq-text">Where is Otter available?</h1>
                  <button className="btn action-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-plus-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
