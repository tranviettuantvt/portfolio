import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon icon="envelope" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
          <a href="" className="me-4 text-reset">
            <iconify-icon
              style={{ position: "relative", top: "2px" }}
              icon="simple-icons:netlify"
            ></iconify-icon>
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                VIET TUAN'S PORFOLIO
              </h6>
              <p>
                Thank you for visiting my personal portfolio website. Hope you
                give me a chance and I promise to try my best
              </p>
              <p>
                <span className="fw-bold">Plus Ultra</span>{" "}
                <i class="fa-sharp fa-regular fa-rocket-launch"></i>. Connect
                with me over socials
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">QUICK LINKS</h6>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Skill
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Education & Certificate
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Project
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon fab icon="github-square" className="me-3" />
                github.com/tranviettuantvt
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                tranviettuantvt@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />
                0934 983 251
              </p>
              <p>
                <MDBIcon fab icon="facebook-square" className="me-3" />
                facebook.com/viettuan.tran.9028
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 pt-2">
              <img
                style={{ width: "12rem" }}
                src="./images/TVT_LOGO.png"
                alt=""
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          TVT
        </a>
      </div>
    </MDBFooter>
  );
}
