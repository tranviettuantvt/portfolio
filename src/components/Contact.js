import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../asset/contact.svg";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [btn, setBtn] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setBtn("Sending...")
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "tranviettuan@gmail.com",
  //       pass: "2230011123",
  //     },
  //   });

  //   const mailOptions = {
  //     from: formInitialDetails.email,
  //     to: "tranviettuantvt@gmail.com",
  //     subject: `Contact message from ${formInitialDetails.firstName} ${formInitialDetails.lastName} `,
  //     text: `Message: ${formInitialDetails.message}`,
  //   };

  //   try {
  //     await transporter.sendMail(mailOptions);
  //     setStatus({ succes: true, message: "Message sent successfully" });
  //     setFormDetails({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       phone: "",
  //       message: "",
  //     });
  //     setBtn("Send")
  //   } catch (err) {
  //     setStatus({
  //       succes: false,
  //       message: "Something went wrong, please try again later.",
  //     });
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contact} alt="" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form >
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="sumbit">
                    <span>{btn}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
