import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(250, 250, 250)",
        color: "#424242",
      }}
      className="pt-5 pb-4"
    >
      <div className="container border-top pt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "55%", marginBottom: "25px" }}
            />

            <p
              className="text-muted"
              style={{
                fontSize: "14px",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div
              className="d-flex align-items-center"
              style={{ gap: "28px", fontSize: "22px" }}
            >
              <a href=" " style={{ color: "#666", textDecoration: "none" }}>
                <i className="fa fa-twitter"></i>
              </a>

              <a href=" " style={{ color: "#666", textDecoration: "none" }}>
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href=" " style={{ color: "#666", textDecoration: "none" }}>
                <i className="fa fa-instagram"></i>
              </a>

              <a href=" " style={{ color: "#666", textDecoration: "none" }}>
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <hr
              style={{
                marginTop: "30px",
                marginBottom: "25px",
                width: "90%",
              }}
            />

            <div
              className="d-flex align-items-center"
              style={{ gap: "28px", fontSize: "22px" }}
            >
              <a href=" " style={{ color: "#666", textDecoration: "none" }}>
                <i className="fa fa-youtube-play"></i>
              </a>

              <a href=" " style={{ color: "#666", textDecoration: "none" }}>
                <i className="fa fa-whatsapp"></i>
              </a>

              <a href=" " style={{ color: "#666", textDecoration: "none" }}>
                <i className="fa fa-telegram"></i>
              </a>
            </div>

            <div className="d-flex mt-4" style={{ gap: "14px" }}>
              <img
                src="media/images/google-play.svg"
                alt="Google Play"
                style={{
                  width: "110px",
                  height: "auto",
                }}
              />

              <img
                src="media/images/appstore.svg"
                alt="App Store"
                style={{
                  width: "110px",
                  height: "auto",
                }}
              />
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5
              className="mb-4"
              style={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Account
            </h5>

            <a href=" " className="footer-link">
              Open demat account
            </a>
            <a href=" " className="footer-link">
              Minor demat account
            </a>
            <a href=" " className="footer-link">
              NRI demat account
            </a>
            <a href=" " className="footer-link">
              HUF demat account
            </a>
            <a href=" " className="footer-link">
              Commodity
            </a>
            <a href=" " className="footer-link">
              Dematerialisation
            </a>
            <a href=" " className="footer-link">
              Fund transfer
            </a>
            <a href=" " className="footer-link">
              MTF
            </a>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5
              className="mb-4"
              style={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Support
            </h5>

            <a href=" " className="footer-link">
              Contact us
            </a>
            <a href=" " className="footer-link">
              Support portal
            </a>
            <a href=" " className="footer-link">
              How to file a complaint?
            </a>
            <a href=" " className="footer-link">
              Status of your complaints
            </a>
            <a href=" " className="footer-link">
              Bulletin
            </a>
            <a href=" " className="footer-link">
              Circular
            </a>
            <a href=" " className="footer-link">
              Z-Connect blog
            </a>
            <a href=" " className="footer-link">
              Downloads
            </a>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5
              className="mb-4"
              style={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Company
            </h5>

            <a href=" " className="footer-link">
              About
            </a>
            <a href=" " className="footer-link">
              Philosophy
            </a>
            <a href=" " className="footer-link">
              Press & media
            </a>
            <a href=" " className="footer-link">
              Careers
            </a>
            <a href=" " className="footer-link">
              Zerodha Cares (CSR)
            </a>
            <a href=" " className="footer-link">
              Zerodha.tech
            </a>
            <a href=" " className="footer-link">
              Open source
            </a>
            <a href=" " className="footer-link">
              Referral program
            </a>
          </div>
        </div>

        <div
          className="mt-5 text-muted"
          style={{
            fontSize: "13px",
            lineHeight: "1.8",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to
            <a
              href="mailto:complaints@zerodha.com"
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              {" "}
              complaints@zerodha.com
            </a>
            , for DP related to
            <a
              href="mailto:dp@zerodha.com"
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              {" "}
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on{" "}
            <a
              href=" "
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              SEBI SCORES/SMARTODR
            </a>
            : Register on SCORES portal & SMARTODR. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of grievances
          </p>

          <p>
            <a
              href=" "
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              Smart Online Dispute Resolution
            </a>
            {" | "}
            <a
              href=" "
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              Grievances Redressal Mechanism
            </a>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a
              href=" "
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              NSE broker factsheet
            </a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please{" "}
            <a
              href=" "
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              create a ticket here
            </a>
            .
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </div>

      <style>
        {`
                    .footer-link {
                        display: block;
                        color: #555;
                        text-decoration: none;
                        font-size: 16px;
                        margin-bottom: 16px;
                        transition: color 0.2s;
                    }

                    .footer-link:hover {
                        color: #387ed1;
                    }

                    footer p {
                        color: #666;
                    }

                    footer h5 {
                        color: #424242;
                    }
                `}
      </style>
    </footer>
  );
}

export default Footer;
