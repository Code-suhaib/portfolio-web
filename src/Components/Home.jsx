import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const currentHour = new Date().getHours();
  let greeting = "";
  let emoji = "";

  if (currentHour < 12) {
    greeting = "Good Morning!";
    emoji = "🌅";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon!";
    emoji = "☀️";
  } else {
    greeting = "Good Evening!";
    emoji = "🌙";
  }

  return (
    <section className="home-section d-flex align-items-center text-light text-center" style={{ minHeight: "100vh", background: "linear-gradient(135deg,#11998e,#38ef7d)" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="display-5">{greeting} {emoji}</h2>
            <h1 className="display-3 fw-bold">
              Hi, I'm <span className="text-primary">Suhaib Jahagirdar</span>
            </h1>
            <p className="lead">
              A passionate <strong>Full-Stack Developer</strong> & MERN Stack Enthusiast, crafting elegant and efficient web solutions.
            </p>

            {/* Animated Buttons */}
            <div className="mt-4">
              <Link to="/project" className="btn btn-lg btn-warning me-3 shadow-lg">
                View My Work 🚀
              </Link>
              <Link to="/contact" className="btn btn-lg btn-outline-light shadow-lg">
                Get in Touch 📩
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
