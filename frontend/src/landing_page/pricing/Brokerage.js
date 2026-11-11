import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h1 className="fs-2 mb-4">Charges for account opening</h1>

          <div className="table-responsive">
            <table
              className="table table-bordered"
              style={{
                fontSize: "16px",
                marginBottom: "100px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "20px",
                      fontWeight: "400",
                    }}
                  >
                    Type of account
                  </th>

                  <th
                    style={{
                      padding: "20px",
                      fontWeight: "400",
                    }}
                  >
                    Charges
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "20px" }}>Individual account</td>

                  <td style={{ padding: "20px" }}>
                    <span
                      style={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        padding: "7px 14px",
                        borderRadius: "3px",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      FREE
                    </span>
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "20px" }}>Minor account</td>

                  <td style={{ padding: "20px" }}>
                    <span
                      style={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        padding: "7px 14px",
                        borderRadius: "3px",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      FREE
                    </span>
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "20px" }}>NRI account</td>

                  <td style={{ padding: "20px" }}>₹ 500</td>
                </tr>

                <tr>
                  <td style={{ padding: "20px" }}>HUF account</td>

                  <td style={{ padding: "20px" }}>
                    <span
                      style={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        padding: "7px 14px",
                        borderRadius: "3px",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      FREE
                    </span>

                    <span style={{ marginLeft: "10px" }}>
                      (online) / ₹ 500 (offline)
                    </span>
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "20px" }}>
                    Partnership, LLP, and Corporate accounts (offline only)
                  </td>

                  <td style={{ padding: "20px" }}>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 className="fs-2 mb-4">Demat AMC (Annual Maintenance Charge)</h1>

          <div
            style={{
              display: "inline-block",
              backgroundColor: "#f5f9ff",
              borderLeft: "5px solid #387ed1",
              padding: "14px 20px",
              marginBottom: "35px",
              fontSize: "18px",
            }}
          >
            Free for first year*
          </div>

          <p style={{ fontSize: "16px", marginBottom: "25px" }}>
            From second year onwards, for BSDA accounts:
          </p>

          <div className="table-responsive">
            <table
              className="table table-bordered"
              style={{
                fontSize: "16px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "20px",
                      fontWeight: "400",
                    }}
                  >
                    Value of holdings
                  </th>

                  <th
                    style={{
                      padding: "20px",
                      fontWeight: "400",
                    }}
                  >
                    AMC
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ padding: "20px" }}>Up to ₹4 lakh</td>

                  <td style={{ padding: "20px" }}>
                    <span
                      style={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        padding: "7px 14px",
                        borderRadius: "3px",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      FREE
                    </span>
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "20px" }}>₹4 lakh – ₹10 lakh</td>

                  <td style={{ padding: "20px" }}>
                    ₹100 per year + 18% GST, charged quarterly
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: "20px" }}>Above ₹10 lakh</td>

                  <td style={{ padding: "20px" }}>
                    ₹300 per year + 18% GST, charged quarterly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            style={{
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless
            of holdings value, charged quarterly.
          </p>

          <p
            style={{
              fontSize: "16px",
              marginTop: "30px",
            }}
          >
            To learn more about BSDA,{" "}
            <a
              href=" "
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              click here.
            </a>{" "}
            To learn more about AMC,{" "}
            <a
              href=" "
              style={{
                color: "#387ed1",
                textDecoration: "none",
              }}
            >
              click here.
            </a>
          </p>

          <p
            style={{
              fontSize: "16px",
              marginTop: "30px",
              marginBottom: "80px",
            }}
          >
            *Resident individual accounts only.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
