import React, { useState } from "react";

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
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>
        <div className="form-field">
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Contact;
