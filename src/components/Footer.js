import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
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
