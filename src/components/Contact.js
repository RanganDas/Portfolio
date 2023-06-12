import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/pngwing.com (3).png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7h9fdrn', 'template_o1t7tac', form.current, 'IBH-PZMxYGWCRMiom')
      .then((result) => {
        alert("Sent Successfully")
        console.log(result.text);
      }, (error) => {
        alert("Message not sent")
        console.log(error.text);
      });

    e.target.reset();
  };
  
  const [focusedField, setFocusedField] = useState("");

    const handleFieldFocus = (field) => {
      setFocusedField(field);
    };

    const getContactImage = (field) => {
      // Define the mapping of field to image here
      switch (field) {
        case "fullName":
          return fullNameImage;
        case "email":
          return emailImage;
        case "phoneNumber":
          return phoneNumberImage;
        case "subject":
          return subjectImage;
        case "message":
          return messageImage;
        default:
          return defaultImage;
      }
    };

    const fullNameImage = require("../assets/img/face1.4.jpg");
    const emailImage = require("../assets/img/face1.4new.png");
    const phoneNumberImage = require("../assets/img/face1.10000.png");
    const subjectImage = require("../assets/img/face1.4.jpg");
    const messageImage = require("../assets/img/face1.4t.png");
    const defaultImage = require("../assets/img/face1.4.jpg");

    const contactImg = getContactImage(focusedField);

    return (
      <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img id="ci"  className={` ${isVisible ? "animate__animated animate__zoomIn" : ""}`} src={contactImg}  alt="Contact Us"/>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact me</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="user_name"
                          required
                          onFocus={() => handleFieldFocus("fullName")}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email"
                          name="user_email"
                          required
                          onFocus={() => handleFieldFocus("email")}
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="number"
                          placeholder="Phone number"
                          name="user_phone"
                          required
                          onFocus={() => handleFieldFocus("phoneNumber")}
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          required
                          onFocus={() => handleFieldFocus("subject")}
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          required
                          onFocus={() => handleFieldFocus("message")}
                        ></textarea>
                        <button type="submit">
                          <span>Send</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
