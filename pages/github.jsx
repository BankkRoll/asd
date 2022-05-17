import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  var {repos = [] } = repos;
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  user.login = 'shahnawazfakir'
  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={'https://avatars.githubusercontent.com/u/79532117?s=400&u=6b9c510de67936d3b7b95eac270070ca8e499de0&v=4'}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} 5 repos</h3>
        </div>
        {/* <div>
          <h3>{user.followers} followers</h3>
        </div> */}
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={user.login}
          theme={theme}
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  let repos = await repoRes.json();

  function highest(){ 
    return [].slice.call(arguments).sort(function(a,b){ 
      return b - a; 
    }); 
  }
  highest(repos);

  return {
    props: { title: 'GitHub', repos, user},
    revalidate: 10,
  };
}

export default GithubPage;