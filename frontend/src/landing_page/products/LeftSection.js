import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            style={{
              width: "85%",
              maxWidth: "650px",
            }}
          />
        </div>

        <div className="col-6 p-5">
          <h1
            className="mb-4"
            style={{
              fontSize: "36px",
              fontWeight: "500",
            }}
          >
            {productName}
          </h1>

          <p
            className="mb-4"
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#424242",
            }}
          >
            {productDesription}
          </p>

          <div className="mb-4">
            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                fontSize: "18px",
                marginRight: "70px",
              }}
            >
              Try demo&nbsp; →
            </a>

            <a
              href={learnMore}
              style={{
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Learn more&nbsp; →
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googleplayBadge.svg"
                alt="Google Play"
                style={{
                  width: "150px",
                }}
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                style={{
                  width: "145px",
                  marginLeft: "25px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
