import './Portfolio.css';
import { Pagination, PortfolioShow } from '../../components';
import { Projects } from '../../constants';
import { useState } from 'react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const projectsPerPage = 3;
  
  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;

  const currentProjects = Projects.slice(firstProjectIndex, lastProjectIndex);

  return (
    <section className='app__portfolio section__padding' id="portfolio">
        
        <div className='app__portfolio-text'>
            <h1>My <span>Portfolio</span></h1>

            <div className='app__portfolio-details'>
                <p>
                    Take a look at my awesome work. I have showcase all my skills by implementing them in these projects.
                </p>
            </div>
        </div>

        <div className='app__portfolio-pagination'>
            <Pagination 
                totalProjects={Projects.length} 
                projectsPerPage={projectsPerPage}
                currentPage={currentPage}
                setCurrentPage = {setCurrentPage}
            />
        </div>

        <div className='app__portfolio-projects'>
            {currentProjects.map((project) => {
                return <PortfolioShow key={project.id} {...project}/>
            })}
        </div>
        
    </section>
  )
}

export default Portfolio;