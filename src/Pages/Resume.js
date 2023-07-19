import React from "react";
import myResume from "../assets/documents/myResume.pdf";

const Resume = () => {
  return (
    <div>
      <h1>My Resume</h1>
      <embed
        src={myResume}
        type="application/pdf"
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default Resume;
