import React, { useEffect, useState } from 'react';

const GithubFeed = () => {
  const [data, setData] = useState('');
  const gitUrl = 'https://api.github.com/users/luis0lo';

  async function getGitHubInfo() {
    const response = await fetch(gitUrl);
    const answer = await response.json();
    const data = answer.public_repos;
    setData(data);
  }
  useEffect(() => {
    getGitHubInfo();
  }, []);

  return <div>Github {data} Repositories to explore</div>;
};

export default GithubFeed;
