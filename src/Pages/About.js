import React from "react";
import { Box, Typography } from "@mui/material";
import myImage from "../assets/images/myImage.jpg";
import "./About.css";

const About = () => {
  return (
    <Box
      className="about-container"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <div>
        <img
          src={myImage}
          alt="About Me"
          style={{ width: "300px", borderRadius: "50%" }}
        />
      </div>
      <div>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontSize: "2.5rem" }}>
            About Me
          </Typography>
          <Typography paragraph sx={{ fontSize: "1.2rem" }}>
            Bader is a driven and ambitious individual who has recently
            graduated from the University of Berkeley's Full Stack Web
            Development Bootcamp. With a strong passion for technology and an
            unwavering determination to succeed, Bader is ready to embark on an
            exciting journey in the world of web development.
          </Typography>
          <Typography paragraph sx={{ fontSize: "1.2rem" }}>
            During his time at the University of Berkeley, Bader honed his
            skills in various aspects of web development, including front-end
            and back-end technologies. He has a solid foundation in HTML, CSS,
            and JavaScript, allowing him to create visually appealing and
            user-friendly websites. Bader's comprehensive knowledge of web
            development frameworks, such as React and Angular, enables him to
            build dynamic and interactive web applications.
          </Typography>
          <Typography paragraph sx={{ fontSize: "1.2rem" }}>
            Bader's enthusiasm for learning and his ability to adapt to new
            technologies sets him apart. He stays up-to-date with the latest
            trends in web development and eagerly explores emerging frameworks
            and tools. His curiosity and willingness to take on challenges make
            him an asset in the ever-evolving field of technology.
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default About;
