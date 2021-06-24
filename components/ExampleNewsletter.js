const ExampleNewsletter = () => {
  return (
    <div className="">
      <div>
        <base target="_blank" />
        <title>War by the day</title>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n    body {\n      margin: 0;\n      padding: 0;\n      background-color: #4f4f4f;\n    }\n\n    table {\n      border-spacing: 0;\n    }\n\n    td {\n      padding: 0;\n    }\n\n    img {\n      border: 0;\n    }\n\n    .wrapper {\n      width: 100%;\n      table-layout: fixed;\n      background-color: #ededed;\n    }\n\n    .webkit {\n      max-width: 600px;\n      background-image: linear-gradient(#fdf2df, #FFFFFF);\n    }\n\n    .outer {\n      margin: 0 auto;\n      width: 100%;\n      max-width: 600px;\n      border-spacing: 0;\n      font-family: "Courier New", Courier, monospace;\n      color: #4a4a4a;\n    }\n\n    .three-columns {\n      text-align: center;\n      font-size: 0;\n      line-height: 0;\n      padding-top: 40px;\n      padding-bottom: 30px;\n    }\n\n    .three-columns .column {\n      width: 100%;\n      max-width: 200px;\n      display: inline-block;\n      vertical-align: top;\n    }\n\n    .three-columns .content {\n      font-size: 15px;\n      line-height: 20px;\n    }\n\n    .padding {\n      padding: 15px;\n    }\n\n    .month-day {\n      /* font-style:oblique; */\n      font-size: xx-large;\n      padding-top: 15px;\n    }\n\n    .year-row {\n      background-color: rgba(0, 0, 0, 0);\n    }\n\n    .year {\n      text-decoration: underline;\n      font-size: x-large;\n      padding-left: 15px;\n      padding-top: 5px;\n\n    }\n\n    .year-text {\n      font-size: large;\n      padding-left: 25px;\n      padding-right: 15px;\n    }\n\n    a {\n      text-decoration: underline;\n      color: #6D8C9C;\n      font-size: 17px;\n    }\n  ',
          }}
        />
        <center className="wrapper" className=" shadow-2xl">
          <div className="webkit">
            <table className="outer" align="center">
              {/* EVENTS */}
              <tbody>
                <tr>
                  <td> 
                    <table style={{ borderSpacing: 0 }} width="100%">
                      <tbody>
                        <tr>
                          {/* HEADER */}
                          <td
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              padding: "0px",
                              textAlign: "center",
                            }}
                          >
                            {/* COVER GIF */}
                            <a
                              href="#"
                              style={{
                                paddingTop: "10px",
                                fontSize: "xxx-large",
                                fontStyle: "italic",
                                textDecoration: "none",
                                wordSpacing: "-12px",
                                color: "#4a4a4a",
                              }}
                            >
                              <img
                                src="https://i.ibb.co/DCmMF5n/f.gif"
                                alt="Loading video..."
                                width="100%"
                              />
                            </a>
                            {/* DATE/TITLE */}
                            <div className="month-day">
                              <span
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              >
                                Today: January 1,
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="year-row">
                          <td>
                            <p className="year">
                              {" "}
                              <span
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              >
                                1940:
                              </span>
                            </p>
                            <dd>
                              {" "}
                              <span
                                className="year-text"
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              />
                            </dd>
                            <dd className="px-5 pb-5">
                              {" "}
                              10,000 Japanese troops launch a counter-attack in
                              eastern Shanxi Province in China in an attempt to
                              relieve the nearly-surrounded Japanese 36th
                              Division.
                            </dd>
                          </td>
                        </tr>
                        <tr className="year-row">
                          <td>
                            <p className="year">
                              {" "}
                              <span
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              >
                                1941:
                              </span>
                            </p>
                            <dd>
                              {" "}
                              <span
                                className="year-text"
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              />
                            </dd>
                            <dd className="px-5 pb-5">
                              {" "}
                              Accounting of the previous night's bombing of
                              London reveals that the{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Old_Bailey"
                                title="Old Bailey"
                              >
                                Old Bailey
                              </a>
                              , the{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Guildhall,_London"
                                title="Guildhall, London"
                              >
                                Guildhall
                              </a>
                              , and eight churches by{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Christopher_Wren"
                                title="Christopher Wren"
                              >
                                Christopher Wren
                              </a>{" "}
                              were destroyed or badly damaged. RAF bombs
                              aircraft factories in Bremen, Germany.
                            </dd>
                          </td>
                        </tr>
                        <tr className="year-row">
                          <td>
                            <p className="year">
                              {" "}
                              <span
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              >
                                1942:
                              </span>
                            </p>
                            <dd>
                              {" "}
                              <span
                                className="year-text"
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              />
                            </dd>
                            <dd className="px-5 pb-5">
                              {" "}
                              Twenty-six Allied countries signed the{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Declaration_by_United_Nations"
                                title="Declaration by United Nations"
                              >
                                Declaration by United Nations
                              </a>{" "}
                              during the{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Arcadia_Conference"
                                title="Arcadia Conference"
                              >
                                Arcadia Conference
                              </a>
                              .
                            </dd>
                          </td>
                        </tr>
                        <tr className="year-row">
                          <td>
                            <p className="year">
                              {" "}
                              <span
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              >
                                1943:
                              </span>
                            </p>
                            <dd >
                              {" "}
                              <span
                                className="year-text"
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              />
                            </dd>
                            <dd className="px-5 pb-5">
                              {" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Germany"
                                title="Germany"
                              >
                                German
                              </a>{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/1st_Panzer_Division_(Wehrmacht)"
                                title="1st Panzer Division (Wehrmacht)"
                              >
                                1st Panzer Division
                              </a>{" "}
                              withdraws from the{" "}
                              <a
                                className="mw-redirect"
                                href="https://en.wikipedia.org/wiki/Terek_River"
                                title="Terek River"
                              >
                                Terek River
                              </a>{" "}
                              area in southern Russia to prevent encirclement.
                            </dd>
                          </td>
                        </tr>
                        <tr className="year-row">
                          <td>
                            <p className="year">
                              {" "}
                              <span
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              >
                                1945:
                              </span>
                            </p>
                            <dd>
                              {" "}
                              <span
                                className="year-text"
                                style={{
                                  fontFamily:
                                    '"Courier New", Courier, monospace',
                                }}
                              />
                            </dd>
                            <dd className="px-5 pb-5">
                              {" "}
                              The Germans begin a surprise offensive (
                              <a
                                href="https://en.wikipedia.org/wiki/Operation_Nordwind"
                                title="Operation Nordwind"
                              >
                                Operation Nordwind
                              </a>
                              ) in northern{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Alsace"
                                title="Alsace"
                              >
                                Alsace
                              </a>
                              .{" "}
                              <a
                                className="mw-redirect"
                                href="https://en.wikipedia.org/wiki/Unternehmen_Bodenplatte"
                                title="Unternehmen Bodenplatte"
                              >
                                Unternehmen Bodenplatte (Operation Baseplate)
                              </a>{" "}
                              is launched by the Luftwaffe against western
                              Allied air bases in{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Belgium"
                                title="Belgium"
                              >
                                Belgium
                              </a>{" "}
                              and Holland by elements of ten different{" "}
                              <a
                                className="mw-redirect"
                                href="https://en.wikipedia.org/wiki/Wing_(military_aviation_unit)#United_States_usage"
                                title="Wing (military aviation unit)"
                              >
                                Jagdgeschwadern
                              </a>{" "}
                              (fighter wings), as its last major air offensive
                              of the war in the West. American troops{" "}
                              <a
                                href="https://en.wikipedia.org/wiki/Chenogne_massacre"
                                title="Chenogne massacre"
                              >
                                kill dozens of German POWs
                              </a>{" "}
                              at{" "}
                              <a
                                className="mw-redirect"
                                href="https://en.wikipedia.org/wiki/Chenogne,_Belgium"
                                title="Chenogne, Belgium"
                              >
                                Chenogne
                              </a>
                            </dd>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {/* SHARE BOX */}
                <tr>
                  <td>
                    <table style={{ borderSpacing: 0 }} width="100%">
                      <tbody>
                        <tr>
                          <td
                            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0)",
                              padding: "5px",
                              textAlign: "center",
                            }}
                          >
                            <p
                              style={{
                                borderTop: "4px #4f4f4f solid",
                                fontSize: "18px",
                                color: "#4f4f4f",
                                paddingTop: "15px",
                                marginBottom: "13px",
                              }}
                            >
                              Support this project by:
                            </p>
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#4f4f4f",
                                paddingTop: "15px",
                                marginBottom: "13px",
                              }}
                            >
                              forwarding this email
                            </p>
                            <p className="pb-4" style={{ fontSize: "16px", color: "#4f4f4f" }}>
                              or
                            </p>
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#4f4f4f",
                                marginBottom: "13px",
                              }}
                            >
                              sharing the website
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {/* FOOTER */}
                <tr>
                  <td style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                    <table style={{ borderSpacing: 0 }} width="100%">
                      <tbody>
                        <tr>
                          <td style={{ padding: "0px", textAlign: "center" }}>
                            <p
                              style={{ fontSize: "16px", marginTop: "18px" }}
                            ></p>
                            <p className="pb-5">
                              <a href="#">warbytheday.com</a>
                            </p>
                            <p />
                            <p 
                              style={{
                                fontSize: "16px",
                                marginBottom: "10px",
                                padding: "15px",
                              }}
                            >
                              This project is free, and always will be.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              paddingBottom: "20px",
                              textAlign: "center",
                            }}
                            align="center"
                          >
                            <p>
                              <a href="" style={{ fontSize: "15px" }}>
                                UNSUBSCRIBE
                              </a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </div>
  );
};
export default ExampleNewsletter;
