import React from 'react'
import css from './topProjects.module.css'
import portfolioImg from './portfolio-img.jpg';
import{FaGithubSquare, FaLaptop} from 'react-icons/fa'

const TopProjects = () => {
    return (
        <div>
            <div className={css.topProjects}>
          <div className={css.mainProjectHeader}>
            <span className={css.projectTitle}>
              Portfolio <small>(prior to School of Code)</small>
            </span>
            <div className={css.projectIcons}>
            <a href="https://github.com/Luis0lo"><FaGithubSquare size="3em" title=""></FaGithubSquare></a>
            <a href="https://withluis.com/"><FaLaptop size="3em" title=""></FaLaptop></a>
            </div>
          </div>
          <div className={css.projectInfo}>
            <div className={css.projectDescription}>
              <p>This is the result of my self learning journey</p>
              <p>In this portfolio, you can find several projects using a wide
                variety of tools.
              </p>
              <p>
                I started with HTML and end up at the point where I had to build
                a basic DB and deploy a 100% functional app.
              </p>
            </div>
            <img src={portfolioImg} className={css.portfolioImg} alt="portfolio" />  
          </div>
        </div>
        </div>
    )
}

export default TopProjects