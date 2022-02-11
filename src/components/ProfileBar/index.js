import React from 'react';
import css from './profileBar.module.css';
import Header from '../Header';
import ContactButton from '../ContactButton';
import Skills from '../Skills';
import ProfileImage from './profileSq.png';
import Education from '../Education';
//icons

const ProfileBar = () => {
  return (
    <>
      <Header />

      <div className={css.mainSection}>
        <div className={css.profile}>
          <div>
            <div className={css.imgProfile}>
              <img
                className={css.profileImg}
                src={ProfileImage}
                alt="Luis Rodrigues"
              />
            </div>
          </div>
          <div className={`${css.name}`}>
            <h1>Luis Rodrigues</h1>
            <h2 className={css.role}>Software Developer</h2>
          </div>
          <Skills />
          <Education />
          <ContactButton />
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
