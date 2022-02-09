import React from 'react';
import css from './profileBar.module.css';
import Header from '../Header';
//icons
import { FaCss3Alt } from 'react-icons/fa';

const ProfileBar = () => {
  return (
    <>
      <Header />

      <div className={css.mainSection}>
        <div className={css.profile}>
          <div className={css.profileImg}>
            <div className={css.imgProfile}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D35AQHiLEImiWVpSg/profile-framedphoto-shrink_200_200/0/1605105644542?e=1644483600&v=beta&t=bMgLDKsBY1CEdbYcR38v1A4npZesCYfVzHoDK8Z4l7I"
                alt="Luis Rodrigues"
              />
            </div>
          </div>
          <div className={`${css.nameRole}`}>
            <div className={`${css.name}`}>
              <h1>Luis Rodrigues</h1>
            </div>
            <div className={`${css.role} `} style={{ lineHeight: '2.5rem' }}>
              <h2>Software Developer</h2>
            </div>
          </div>
          <div className={css.tools}>
            <h3 class="pdb">Tools</h3>
            <div class="pdb">
              {/* //css           <i class="fab fa-bootstrap fa-3x pdx"></i> */}
              <FaCss3Alt />
            </div>
            <div>
              <i class="fab fa-js-square fa-3x pdx"></i>
              <i class="fab fa-react fa-3x pdx"></i>
              <i class="fab fa-node-js fa-3x pdx"></i>
            </div>
          </div>
          <div className={css.education}>
            <h3 className={css.pdb}>Background</h3>
            <p>School of Code</p>
            <p>BA Sport Psychology</p>
          </div>
          <div className={css.contact}>
            <h4>
              Contact <i class="fas fa-envelope"></i>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
