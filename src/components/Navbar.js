import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, styled } from "@mui/material";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#ccc",
  "&:hover": {
    color: "#fff",
  },
});

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bader Mahdawi
        </Typography>
        <Box
          component="ul"
          sx={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <li>
            <StyledLink
              to="/about"
              className={
                location.pathname === "/" || location.pathname === "/about"
                  ? "active"
                  : ""
              }
            >
              About Me
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "active" : ""}
            >
              Portfolio
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              Resume
            </StyledLink>
          </li>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
