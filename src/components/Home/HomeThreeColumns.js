import React from "react";

export const HomeThreeColumns = () => {
  const style = {
    backgroundImage: `url('/assets/3ColumnsBackground.png')`,
  };

  return (
    <section className="three-columns" style={style}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-5 col-xl-3 box">
            <p className="three-columns__amount">10</p>
            <h3 className="three-columns__title">returned bags</h3>
            <p className="three-columns__description">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="col-6 col-md-5 col-xl-3 box">
            <p className="three-columns__amount">5</p>
            <h3 className="three-columns__title">supp organizations</h3>
            <p className="three-columns__description">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="col-6 col-md-5 col-xl-3 box">
            <p className="three-columns__amount">7</p>
            <h3 className="three-columns__title">organized collections</h3>
            <p className="three-columns__description">
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
