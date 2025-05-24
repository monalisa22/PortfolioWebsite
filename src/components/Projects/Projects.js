import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import speed from "../../Assets/Projects/speed.jpg";
import quantum from "../../Assets/Projects/quantum.jpeg";
import blockchain from "../../Assets/Projects/blockchain.jpg";
import Nexus from "../../Assets/Projects/Nexus.jpeg";
import Rover from "../../Assets/Projects/Rover.jpeg";
import heart from "../../Assets/Projects/heart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quantum}
              isBlog={false}
              title="Quantum"
              description="Fitness score generator built with AI/ML techniques that accurately reflects a person's overall health and fitness level, hence improving their overall quality of life."
              ghLink="https://github.com/misramrinal/medihacks"
              demoLink="https://misramrinal.pythonanywhere.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nexus}
              isBlog={false}
              title="Nexus"
              description="Revolutionizing Information Access and Decision-Making at enterprise level with Large Language Models and Retrieval-Augmented Generation. AI-powered engine that uses LLM to analyze business data
 and offer actionable strategies"
             ghLink="https://github.com/misramrinal/ATMECS"
              demoLink="https://www.youtube.com/watch?v=JgSHi3XIpWU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="Tokenised Asset management"
              description="A blockchain-based Tokenization platform to liquidate assets like Stocks, Pre-IPO Equities, Land and Real Estate, Gold etc. The platform tokenizes such assets into equivalent worth of ERC20 tokens so that multiple investors can invest in same asset with any amount of money"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rover}
              isBlog={false}
              title="VIKRANT"
              description="A six-wheeled battery-operated rover designed to navigate diverse and often challenging terrains.Equipped with a rocker-bogie suspension system that ensures smooth and stable navigation over rugged ground."
              ghLink="https://github.com/misramrinal/robofest_rover"
              demoLink="https://youtu.be/PNhyHu2acvo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speed}
              isBlog={false}
              title="Road Safety and Management"
              description="Real Time Tracking of vehicles and speed detection using camera. Number plate recognition using ANPR technique. Simplifying Challan cut system and leveraging Road safety.."
              ghLink="https://github.com/monalisa22/Smart_Pillars"
              demoLink="https://github.com/monalisa22/Smart_Pillars"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              isBlog={false}
              title="Precision Care Challenge"
              description="Image translation in clean chest x-ray images using a stable diffusion model. Model trained with custom dataset and fine tuned for realistic images. Resolution of x-ray images enhanced to about 90%. Generate high-quality and diverse data with fewer artifacts.
"
              ghLink=""
              demoLink="https://drive.google.com/file/d/1jEmCNpGXsU_N6J4-pRT6lYdv9XYSRu0d/view?usp=drive_link" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
