import React, {useState} from 'react'
import css from './topProjects.module.css'
import portfolioImg from './portfolio-img.jpg';
import{FaGithubSquare, FaLaptop} from 'react-icons/fa';
import projects from '../../../libs/projects-data'

const TopProjects = () => {
  const [data, setData] = useState(projects)
  console.log(data)
    return (<div>
      {data.map((project)=>{
        return (
          <div key={project.id} className={css.topProjects}>
          <div className={css.mainProjectHeader}>
            <span className={css.projectTitle}>
              {project.title} <small>({project.subTitle})</small>
            </span>
            <div className={css.projectIcons}>
            <a href={project.githubUrl}><FaGithubSquare size="3em" title=""></FaGithubSquare></a>
            <a href={project.websiteUrl}><FaLaptop size="3em" title=""></FaLaptop></a>
            </div>
          </div>
          <div className={css.projectInfo}>
            <div className={css.projectDescription}>
            {project.description.map((text)=>{
              return (<p key={text.id}>{text.paragraph}</p>)
            })}
              {/* <p>This is the result of my self learning journey</p>
              <p>In this portfolio, you can find several projects using a wide
                variety of tools.
              </p>
              <p>
                I started with HTML and end up at the point where I had to build
                a basic DB and deploy a 100% functional app.
              </p> */}
            </div>
            <img src={portfolioImg} className={css.portfolioImg} alt="portfolio" />  
          </div>
        </div>
        )
      })}
        
            
        </div>
    )
}

export default TopProjects