import React from "react";

export const TargetAud = () => {
  return (
    <>
      {/* TARGET AUDIENCE SECTION */}
      <section className="mb-5">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-evenly align-items-center double-card">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="card m-5 p-5 text-center d-flex justify-content-between align-items-center target-audience">
                  <img
                    src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fd6fe1f0f8f77e2ad8_Illo%20Woman%20Calendar.webp"
                    loading="lazy"
                    srcSet="https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fd6fe1f0f8f77e2ad8_Illo%20Woman%20Calendar-p-500.webp 500w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fd6fe1f0f8f77e2ad8_Illo%20Woman%20Calendar-p-800.webp 800w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fd6fe1f0f8f77e2ad8_Illo%20Woman%20Calendar-p-1080.webp 1080w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fd6fe1f0f8f77e2ad8_Illo%20Woman%20Calendar.webp 1193w"
                    alt="Mom planning while holding a baby"
                    sizes="(max-width: 479px) 73vw, (max-width: 767px) 62vw, (max-width: 991px) 32vw, 25vw"
                    className="u-img-cover"
                  />
                  <div>
                    <h1 className="about-title">LOOKING AHEAD</h1>
                    <p className="fs-3">
                      Look at you being so ahead of the game. We can book
                      childcare up to a month out — we look forward to seeing
                      you then.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-8 col-lg-6">
                <div className="card m-5 p-5 text-center d-flex justify-content-between align-items-center target-audience">
                  <img
                    src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fe6d9690f21a955320_Illo%20Date%20Night.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 73vw, (max-width: 767px) 62vw, (max-width: 991px) 32vw, 25vw"
                    srcSet="https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fe6d9690f21a955320_Illo%20Date%20Night-p-500.webp 500w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fe6d9690f21a955320_Illo%20Date%20Night-p-800.webp 800w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fe6d9690f21a955320_Illo%20Date%20Night-p-1080.webp 1080w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/643431fe6d9690f21a955320_Illo%20Date%20Night.webp 1157w"
                    alt="Mom planning while holding a baby"
                    className="u-img-cover"
                  />
                  <div>
                    <h1 className="about-title">A NIGHT AHEAD</h1>
                    <p className="fs-3">
                      Nothing should get in the way of the time you spend
                      together, without your kids. Our sitters make date night
                      easy to pull off. Mom planning while holding a baby
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-12">
              <div className="card m-3 p-3 text-center d-flex justify-content-center align-items-center target-audience single-card">
                <img
                  src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c9bf5fd7d72ae9b2e_woman%20on%20phone.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 66vw, (max-width: 767px) 48vw, (max-width: 991px) 37vw, 368px"
                  srcSet="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c9bf5fd7d72ae9b2e_woman%20on%20phone-p-500.webp 500w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c9bf5fd7d72ae9b2e_woman%20on%20phone-p-800.webp 800w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c9bf5fd7d72ae9b2e_woman%20on%20phone.webp 1054w"
                  alt=""
                  className="u-img-cover"
                />
                <div>
                  <h1 className="about-title">In a Pinch</h1>
                  <p className="fs-3">
                    Emergency? Sick nanny? No problem, we can help! We can fill
                    requests with as little as two hours' notice.
                  </p>
                </div>
                <img
                  src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c40ba075baaae4f89_man%20on%20phone.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 80vw, (max-width: 767px) 48vw, (max-width: 991px) 27vw, 348px"
                  srcSet="https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c40ba075baaae4f89_man%20on%20phone-p-500.webp 500w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c40ba075baaae4f89_man%20on%20phone-p-800.webp 800w, https://assets.website-files.com/6424ac4b25764708c6aa49f7/642f270c40ba075baaae4f89_man%20on%20phone.webp 1108w"
                  alt=""
                  className="u-img-cover hide-img-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
