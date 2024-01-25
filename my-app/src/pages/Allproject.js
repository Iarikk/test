import React, { Component } from 'react';
import '../pages/Progect.css'; // Файл со стилями

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="project">
          <img src="images/project1.jpg" alt="Project 1" />
          <div className="project-details">
            <h2>Project 1</h2>
            <p>Description of Project 1</p>
            <button className="btn">View Project</button>
          </div>
        </div>

        <div className="project">
          <img src="images/project2.jpg" alt="Project 2" />
          <div className="project-details">
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
            <button className="btn">View Project</button>
          </div>
        </div>
        <div className="project">
          <img src="images/project2.jpg" alt="Project 2" />
          <div className="project-details">
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
            <button className="btn">View Project</button>
          </div>
        </div>
        <div className="project">
          <img src="images/project2.jpg" alt="Project 2" />
          <div className="project-details">
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
            <button className="btn">View Project</button>
          </div>
        </div>
        <div className="project">
          <img src="images/project2.jpg" alt="Project 2" />
          <div className="project-details">
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
            <button className="btn">View Project</button>
          </div>
        </div>
        <div className="project">
          <img src="images/project2.jpg" alt="Project 2" />
          <div className="project-details">
            <h2>Project 2</h2>
            <p>Description of Project 2</p>
            <button className="btn">View Project</button>
          </div>
        </div>

        {/* Добавьте другие проекты аналогичным образом */}
      </div>
    );
  }
}