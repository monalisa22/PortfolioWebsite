import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Monalisa Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software engineer at Qualcomm.
            <br />
            I have completed B.Tech in Electronics and Communication Engineering from NIT Rourkela
            <br />
            My journey blends curiosity, innovation, and a deep interest in building impactful solutions. From embedded systems to AI-driven platforms, I enjoy exploring the intersection of cutting-edge technologies and real-world applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <p /> ✈️ Traveling
            </li>
            <li className="about-activity">
              <p /> 🎧 Listening to music and podcasts
            </li>
            <li className="about-activity">
              <p /> 🎨 Sketching and digital art
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by code, inspired by innovation!"{" "}
          </p>
          <footer className="blockquote-footer">Monalisa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
