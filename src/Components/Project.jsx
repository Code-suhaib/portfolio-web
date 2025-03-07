import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Featured Projects</h2>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-4">
          <div className="card">
            <img src="spotify.png" className="card-img-top" alt="Spotify Clone" />
            <div className="card-body">
              <h5 className="card-title">Spotify Clone</h5>
              <p className="card-text">A Front-end Spotify clone.</p>
              <a href="https://github.com/Code-suhaib/spotify-clone" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="card">
            <img src="jetsetgo.png" className="card-img-top" alt="JetsetGo Fullstack Webapp" />
            <div className="card-body">
              <h5 className="card-title">JetsetGo - Fullstack Webapp</h5>
              <p className="card-text">A travel website made in React with a MongoDB backend.</p>
              <a href="https://github.com/Atharv-18code/jetsetgo" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4">
          <div className="card">
            <img src="coffee.png" className="card-img-top" alt="Responsive Coffee Site" />
            <div className="card-body">
              <h5 className="card-title">Responsive Coffee Shop</h5>
              <p className="card-text">A responsive coffee shop website.</p>
              <a href="https://github.com/Code-suhaib/responsive_homepage" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
