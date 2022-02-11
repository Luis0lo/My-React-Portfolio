import React from 'react';
import About from './About';
import ShareProfile from './ShareProfile';
import TwitterFeed from './TwitterFeed'
import TopProjects from './TopProjects'
import GithubFeed from './GithubFeed'
import css from './body.module.css';

const Body = () => {
  return (
    <div className={css.bodyContainer}>
      <div className={css.gitInfo}><GithubFeed /></div>
      <div className={css.twitterInfo}><TwitterFeed /></div>
      <div className={css.topProjects}><TopProjects /></div>
      <div className={css.about}><About /></div>
      <div className={css.shareArea}><ShareProfile /></div>
    </div>
  );
};

export default Body;
