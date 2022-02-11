import React from 'react';
import css from './shareProfile.module.css';
import { FaShareAlt, FaLinkedin, FaWhatsappSquare, FaTwitterSquare  } from 'react-icons/fa';
import {WhatsappShareButton, LinkedinShareButton,TwitterShareButton} from 'react-share'


const ShareProfile = () => {
const title = 'Luis is a Software Developer and has an interesting profile! It may fit your needs'
const url = 'www.linkedin.com/in/withluis'

  return (
    <div className={css.stickyShare}>
        <span className={css.shareSpan}><FaShareAlt size="2.5em" title="css" /></span>

        <span>
        <LinkedinShareButton
        title={title}
        summary='Luis is a Software Developer looking for an opportunity to step in the tech world'
        url={url}>
            <FaLinkedin size="2.5em" title="css" />
        </LinkedinShareButton>
        </span>

        <span>
        <TwitterShareButton 
        title={title}
        url={url}>
            <FaTwitterSquare size="2.5em" title="css" />
        </TwitterShareButton>
        </span>

        <span>
        <WhatsappShareButton
        title={title}
        url={url}>
            <FaWhatsappSquare size="2.5em" title="css" />
        </WhatsappShareButton>
        </span>

    </div>
  );
};

export default ShareProfile;
