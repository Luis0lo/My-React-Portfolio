import React from 'react';
import css from './about.module.css';

const About = () => {
  return (
    <div className={css.aboutMe}>
      <div className={css.content}>
        <p>I am a dedicated, reliable, and ambitious person, which pushes me to improve my skills day by day.</p>
        <p>Highly passionate about building software that will improve people's lives somehow. </p>
        {/* <p>Working towards a mid-level software developer position.</p> */}
      </div>
    </div>
  );
};

export default About;
