import React from "react";

export const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card m-5 p-5 d-flex flex-column justify-content-center align-items-center card-bg text-center">
                <h1 className="card-title">Reliable kidcare on demand</h1>
                <p className="card-text text-wrap">
                  Otter matches parents who need care with trusted sitters in
                  their community, on-demand.
                </p>
                <button className="btn nav-link action-btn">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
