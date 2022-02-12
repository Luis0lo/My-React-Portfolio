import React, {useState} from 'react'
import css from './topProjects.module.css'
import{FaGithubSquare, FaLaptop} from 'react-icons/fa';
import projects from '../../../libs/projects-data'

const TopProjects = () => {
  const [data, setData] = useState(projects)
    return (<div>
    <div className={css.sectionTitle}>Top Projects</div>
      {data.map((project)=>{
        console.log(project.imageUrl)
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
            </div>
            <img src={project.imageUrl} className={css.projectImg} alt={project.imageAlt} />  
          </div>
        </div>
        )
      })}
        
            
        </div>
    )
}

export default TopProjects