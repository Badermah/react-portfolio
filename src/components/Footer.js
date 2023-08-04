import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1" gutterBottom>
        Socials:
      </Typography>
      <IconButton
        href="https://github.com/Badermah"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#fff", "&:hover": { color: "#00bcd4" } }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/bader-mahdawi-181aa126b/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#fff", "&:hover": { color: "#0077B5" } }}
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
