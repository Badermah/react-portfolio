import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Socials:</p>
      <div>
        <a
          href="https://github.com/Badermah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
