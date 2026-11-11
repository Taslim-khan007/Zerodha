import React from "react";

function Pricing() {
  return (
    <div className="container p-3 mb-5">
      <div className="row p-5 align-items-center">
        {/* Left Section */}
        <div className="col-5 p-3">
          <h1 className="fs-2 mb-4">Unbeatable pricing</h1>

          <p className="lh-lg" style={{ width: "100%" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="/pricing" style={{ textDecoration: "none" }}>
            See pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Space */}
        <div className="col-1"></div>

        {/* Pricing Cards */}
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-4 border rounded-start">
              <h1 className="fs-2 mb-3">₹0</h1>
              <p className="mb-0">
                Free equity and
                <br />
                direct mutual funds
              </p>
            </div>

            <div className="col p-4 border rounded-end">
              <h1 className="fs-2 mb-3">₹20</h1>
              <p className="mb-0">Intraday and futures trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
