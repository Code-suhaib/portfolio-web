import React from "react";

const About = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-5 text-center">
            <img
              src="Profile_photo.jpeg" // Replace with your profile image URL
              alt="Suhaib Jahagirdar"
              className="img-fluid rounded-circle shadow-lg"
            />
          </div>

          {/* About Content */}
          <div className="col-md-7">
            <h2 className="fw-bold">About Me</h2>
            <p className="lead text-muted">
              Hi! I'm <strong>Suhaib Jahagirdar</strong>, a passionate Full-Stack Developer and MERN Stack Enthusiast. I specialize in building responsive and dynamic web applications with modern technologies.
            </p>
            <p>
              With experience in MongoDB, Express.js, React, and Node.js, I love creating high-performance web solutions. My goal is to craft seamless digital experiences with clean code and user-friendly designs.
            </p>
            <p>
              I'm always open to new opportunities and collaborations. Feel free to reach out and let's build something amazing together!
            </p>

            {/* Skills Section */}
            <h4 className="mt-4">Skills & Technologies</h4>
            <ul className="list-inline">
              <li className="list-inline-item badge bg-primary m-1">HTML</li>
              <li className="list-inline-item badge bg-secondary m-1">CSS</li>
              <li className="list-inline-item badge bg-success m-1">JavaScript</li>
              <li className="list-inline-item badge bg-danger m-1">React.js</li>
              <li className="list-inline-item badge bg-warning m-1">Node.js</li>
              <li className="list-inline-item badge bg-info m-1">MongoDB</li>
              <li className="list-inline-item badge bg-dark m-1">Bootstrap</li>
            </ul>

            {/* Download Resume Button */}
            <a href="suhaaib resume.pdf" className="btn btn-primary mt-3" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
