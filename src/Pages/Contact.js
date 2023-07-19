import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email) {
      errors.email = "Email Required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid Email Address.";
    }

    if (!subject) {
      errors.subject = "Subject Required.";
    }

    if (!message) {
      errors.message = "Message Required.";
    }

    if (Object.keys(errors).length === 0) {
      const formData = {
        email: email,
        subject: subject,
        message: message,
      };
      console.log("Form Data:", formData);

      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      setSubmitMessage("Form submitted successfully.");
    } else {
      setErrors(errors);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Contact
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            error={!!errors.subject}
            helperText={errors.subject}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={!!errors.message}
            helperText={errors.message}
          />
          {submitMessage && (
            <Typography variant="body1" sx={{ color: "green" }}>
              {submitMessage}
            </Typography>
          )}
          <Button type="submit" variant="contained">
            Send Email
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
