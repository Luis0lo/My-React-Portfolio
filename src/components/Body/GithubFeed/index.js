import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithubAlt } from 'react-icons/fa';
import css from './githubFeed.module.css';

const GithubFeed = () => {
  const [data, setData] = useState('');
  const gitUrl = 'https://api.github.com/users/luis0lo';
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 3;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  async function getGitHubInfo() {
    const response = await fetch(gitUrl);
    const answer = await response.json();
    const data = answer.public_repos;
    setData(data);
  }
  useEffect(() => {
    getGitHubInfo();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.container2}>
        <a href="https://github.com/Luis0lo"><FaGithubAlt size="3em" title="Github" /></a>
        <p className={css.repositories}>{data} Repositories to Explore</p>
        <span className={css.calendar}><GitHubCalendar
          username="luis0lo"
          transformData={selectLastHalfYear}
          hideTotalCount
          hideColorLegend
        /></span>
      </div>
    </div>
  );
};

export default GithubFeed;
