import React from "react";
import myImage from "../assets/images/myImage.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={myImage} alt="About Me" />
      </div>
      <div className="text-container">
        <h2>About Me</h2>
        <p>
          Bader is a driven and ambitious individual who has recently graduated
          from the University of Berkeley's Full Stack Web Development Bootcamp.
          With a strong passion for technology and an unwavering determination
          to succeed, Bader is ready to embark on an exciting journey in the
          world of web development.
        </p>
        <p>
          During his time at the University of Berkeley, Bader honed his skills
          in various aspects of web development, including front-end and
          back-end technologies. He has a solid foundation in HTML, CSS, and
          JavaScript, allowing him to create visually appealing and
          user-friendly websites. Bader's comprehensive knowledge of web
          development frameworks, such as React and Angular, enables him to
          build dynamic and interactive web applications.
        </p>
        <p>
          Bader's enthusiasm for learning and his ability to adapt to new
          technologies sets him apart. He stays up-to-date with the latest
          trends in web development and eagerly explores emerging frameworks and
          tools. His curiosity and willingness to take on challenges make him an
          asset in the ever-evolving field of technology.
        </p>
      </div>
    </div>
  );
};

export default About;
