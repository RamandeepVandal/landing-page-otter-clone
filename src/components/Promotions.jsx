import React from "react";

export const Promotions = () => {
  return (
    <>
      {/* PROMOTION SECTION */}
      <section className="promotions">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12">
              <div className="card m-5 p-5 d-flex justify-content-between align-items-center promotions-card">
                <p className="fs-6 text-center m-2">AS FEATURED IN</p>
                <div className="img-fluid">
                  <img
                    src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642b1c26f78691df83e63005_forbes.svg"
                    loading="lazy"
                    alt="Forbes magazine"
                    className="featured-logo m-2"
                  />
                </div>
                <div className="img-fluid">
                  <img
                    src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642b1c916900c5313c377f14_parents.svg"
                    loading="lazy"
                    alt="parents.com"
                    className="featured-logo m-2"
                  />
                </div>
                <div className="img-fluid">
                  <img
                    src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642b1c266900c5c1e13779cb_NYT.svg"
                    loading="lazy"
                    alt="The New York Times"
                    className="featured-logo m-2"
                  />
                </div>
                <div className="img-fluid">
                  <img
                    src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642b1c267c52ff922aad871b_mom.svg"
                    loading="lazy"
                    alt="mom.com"
                    className="featured-logo m-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
