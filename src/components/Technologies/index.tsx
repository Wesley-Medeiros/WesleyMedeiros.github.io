import { StudiedTechnologies, TechnologiesCard, TechnologiesContainer, TechnologiesGrid } from "./styles"
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiSass } from 'react-icons/di';
import { SiTypescript } from 'react-icons/Si';
import { AiFillGithub } from 'react-icons/Ai'


const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'javascript', name: 'JavaScript',icon: <DiJavascript /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'typescript', name: 'TypeScript', icon: <SiTypescript /> },
  { id: 'github', name: 'GitHub', icon: <AiFillGithub /> },
  { id: 'sass', name: 'Sass', icon: <DiSass /> }
]

function Technologies() {
  return(
    <TechnologiesContainer>
    <StudiedTechnologies>
      <h1>Tecnologias estudadas</h1>
      <img src="" alt="" />
      <TechnologiesGrid>
        {technologies.map((tech) => (
          <TechnologiesCard id={tech.id} key={tech.id}> 
            {tech.icon}
          </TechnologiesCard>
        ))}
      
      </TechnologiesGrid>
    </StudiedTechnologies>
</TechnologiesContainer>
  )
}

export default Technologies