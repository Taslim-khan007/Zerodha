import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1 className="fs-2 mb-3">The Zerodha Universe</h1>

        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-4 mt-4">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{
              width: "200px",
              height: "70px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 p-4 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{
              width: "200px",
              height: "70px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            Options trading platform that lets you
            <br />
            create strategies, analyze positions, and examine
            <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-4 mt-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt="goldenpi"
            style={{
              width: "200px",
              height: "70px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 p-4 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            style={{
              width: "200px",
              height: "70px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            Systematic trading platform
            <br />
            that allows you to create and backtest
            <br />
            strategies without coding.
          </p>
        </div>

        <div className="col-4 p-4 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{
              width: "200px",
              height: "70px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks or ETFs.
          </p>
        </div>

        <div className="col-4 p-4 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            style={{
              width: "200px",
              height: "70px",
              objectFit: "contain",
            }}
          />

          <p
            className="text-muted mt-4"
            style={{
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </p>
        </div>

        <div className="col-12 mt-5 mb-5">
          <button
            className="p-2 btn btn-primary fs-5"
            style={{
              width: "270px",
              margin: "0 auto",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
