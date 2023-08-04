import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import project1Image from "../assets/images/RichLifeStyle.png";
import project2Image from "../assets/images/BullitenBored.png";
import project3Image from "../assets/images/comingsoon.webp";


const Portfolio = () => {
  const projects = [
    {
      title: "Rich Life Style",
      description:
        "A website for manifesting what your rich life style would look like.",
      image: project1Image,
      githubLink: "https://github.com/Frank-Colorado/rich-life-style",
    },
    {
      title: "Bulletin Bored",
      description:
        "A bulletin board app for finding activites to do when you are bored.",
      image: project2Image,
      githubLink: "https://github.com/Badermah/bulletin-bored",
    },
    {
      title: "Soccer Scout",
      description:
        "A web application for scouting soccer players and posting yourself for scouts.",
      image: project3Image,
      githubLink: "https://github.com/demiapollo/soccerScout",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f2f2f2", 
        padding: "20px", 
      }}
    >
      <Typography variant="h2" sx={{ mb: 3 }}>
        Portfolio
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {projects.map((project, index) => (
          <Card key={index}>
            <CardActionArea href={project.githubLink} target="_blank">
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
