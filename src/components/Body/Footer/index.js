import React from 'react';
import css from './footer.module.css';
import { FaGithubSquare, FaLaptop } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <div className={css.topProjects}>
      <div className={css.container}>
        <span className={css.projectTitle}>
          About this Portfolio <small>(check out the readme)</small>
        </span>
        <div className={css.projectIcons}>
          <a href="https://github.com/SchoolOfCode/w3_recap-tasks-Luis0lo">
            <FaGithubSquare size="3em" title=""></FaGithubSquare>
          </a>
        </div>
      </div>
      <div className={css.projectInfo}>
        <div className={css.projectDescription}>
          <p>
            This Portfolio was created on the third week of Bootcamp following
            the design thinking process and UX/UI planning.
          </p>
          <p>We were asked to:</p>
          <ul>
            <li>Create user personas and user stories.</li>
            <li>Plan your design, and create your wireframes.</li>
            <li>Create a low and high-fidelity design.</li>
          </ul>
        </div>
        <img
          src={require('./low-fi.jpg')}
          className={css.projectImg}
          alt="Portfolio Design"
        />
      </div>
    </div>
  );
};

export default Portfolio;
