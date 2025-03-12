import React from 'react'
import styled from 'styled-components'
import { FiSearch, FiFilter, FiStar, FiMapPin, FiClock, FiDollarSign, FiBookmark } from 'react-icons/fi'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const SearchInput = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 0 1rem;
  
  svg {
    color: ${props => props.theme.colors.white};
    margin-right: 0.5rem;
  }
  
  input {
    flex: 1;
    background: none;
    border: none;
    color: ${props => props.theme.colors.white};
    padding: 0.75rem 0;
    outline: none;
    font-size: 0.9rem;
  }
`

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: ${props => props.theme.transitions.normal};
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.darkGrey};
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  .logo {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
  
  .info {
    flex: 1;
    
    h3 {
      margin: 0 0 0.25rem;
      font-size: 1rem;
    }
    
    p {
      margin: 0;
      font-size: 0.8rem;
      color: #ccc;
    }
  }
  
  .bookmark {
    background: none;
    border: none;
    color: ${props => props.bookmarked ? props.theme.colors.primary : props.theme.colors.white};
    font-size: 1.25rem;
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const ProjectDetails = styled.div`
  flex: 1;
  
  p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: #ccc;
  }
`

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #ccc;
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const MarketplacePage = () => {
  return (
    <div>
      <h1>Marketplace</h1>
      <p className="mb-4">Trouvez des missions adaptées à vos compétences ou proposez vos services aux entreprises.</p>
      
      <SearchContainer>
        <SearchInput>
          <FiSearch />
          <input type="text" placeholder="Rechercher une mission, une compétence, une entreprise..." />
        </SearchInput>
        
        <Button variant="primary" icon={<FiFilter />}>
          Filtres avancés
        </Button>
      </SearchContainer>
      
      <FiltersContainer>
        <FilterButton active>Tous les projets</FilterButton>
        <FilterButton>Développement</FilterButton>
        <FilterButton>Design</FilterButton>
        <FilterButton>Marketing</FilterButton>
        <FilterButton>Data</FilterButton>
        <FilterButton>Gestion de projet</FilterButton>
      </FiltersContainer>
      
      <ProjectsGrid>
        <ProjectCard hoverable>
          <ProjectHeader>
            <div className="logo">TC</div>
            <div className="info">
              <h3>Développement d'une application mobile</h3>
              <p>TechCorp</p>
            </div>
            <button className="bookmark">
              <FiBookmark />
            </button>
          </ProjectHeader>
          
          <ProjectDetails>
            <p>
              Nous recherchons un développeur mobile expérimenté pour créer une application iOS et Android avec React Native. Le projet inclut l'intégration d'API et de fonctionnalités de géolocalisation.
            </p>
            
            <ProjectMeta>
              <MetaItem>
                <FiMapPin />
                <span>100% Remote</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>3-4 mois</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>500-600€ / jour</span>
              </MetaItem>
              
              <MetaItem>
                <FiStar />
                <span>4.8/5</span>
              </MetaItem>
            </ProjectMeta>
            
            <SkillsList>
              <Badge variant="secondary">React Native</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">API REST</Badge>
              <Badge variant="secondary">Mobile</Badge>
            </SkillsList>
          </ProjectDetails>
          
          <Button fullWidth>Voir les détails</Button>
        </ProjectCard>
        
        <ProjectCard hoverable>
          <ProjectHeader>
            <div className="logo">FT</div>
            <div className="info">
              <h3>Refonte UX/UI d'une plateforme fintech</h3>
              <p>FinTech Solutions</p>
            </div>
            <button className="bookmark">
              <FiBookmark />
            </button>
          </ProjectHeader>
          
          <ProjectDetails>
            <p>
              Nous cherchons un designer UX/UI pour repenser l'expérience utilisateur de notre plateforme financière. Le projet comprend la création de wireframes, prototypes et design system.
            </p>
            
            <ProjectMeta>
              <MetaItem>
                <FiMapPin />
                <span>Paris + Remote</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>2-3 mois</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>450-550€ / jour</span>
              </MetaItem>
              
              <MetaItem>
                <FiStar />
                <span>4.6/5</span>
              </MetaItem>
            </ProjectMeta>
            
            <SkillsList>
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">UX Design</Badge>
              <Badge variant="secondary">UI Design</Badge>
              <Badge variant="secondary">Prototypage</Badge>
            </SkillsList>
          </ProjectDetails>
          
          <Button fullWidth>Voir les détails</Button>
        </ProjectCard>
        
        <ProjectCard hoverable>
          <ProjectHeader>
            <div className="logo">EC</div>
            <div className="info">
              <h3>Optimisation SEO d'un site e-commerce</h3>
              <p>E-Commerce Plus</p>
            </div>
            <button className="bookmark">
              <FiBookmark />
            </button>
          </ProjectHeader>
          
          <ProjectDetails>
            <p>
              Nous recherchons un expert SEO pour améliorer le référencement de notre site e-commerce. Le projet inclut l'audit, l'optimisation on-page et la stratégie de contenu.
            </p>
            
            <ProjectMeta>
              <MetaItem>
                <FiMapPin />
                <span>100% Remote</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>1-2 mois</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>400-500€ / jour</span>
              </MetaItem>
              
              <MetaItem>
                <FiStar />
                <span>4.5/5</span>
              </MetaItem>
            </ProjectMeta>
            
            <SkillsList>
              <Badge variant="secondary">SEO</Badge>
              <Badge variant="secondary">Google Analytics</Badge>
              <Badge variant="secondary">Content Marketing</Badge>
              <Badge variant="secondary">E-commerce</Badge>
            </SkillsList>
          </ProjectDetails>
          
          <Button fullWidth>Voir les détails</Button>
        </ProjectCard>
        
        <ProjectCard hoverable>
          <ProjectHeader>
            <div className="logo">DS</div>
            <div className="info">
              <h3>Développement d'un modèle d'IA prédictive</h3>
              <p>DataSmart</p>
            </div>
            <button className="bookmark">
              <FiBookmark />
            </button>
          </ProjectHeader>
          
          <ProjectDetails>
            <p>
              Nous cherchons un data scientist pour développer un modèle d'IA prédictive pour notre plateforme d'analyse. Expérience en machine learning et Python requise.
            </p>
            
            <ProjectMeta>
              <MetaItem>
                <FiMapPin />
                <span>Lyon + Remote</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>3-6 mois</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>550-650€ / jour</span>
              </MetaItem>
              
              <MetaItem>
                <FiStar />
                <span>4.9/5</span>
              </MetaItem>
            </ProjectMeta>
            
            <SkillsList>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">TensorFlow</Badge>
              <Badge variant="secondary">Data Science</Badge>
            </SkillsList>
          </ProjectDetails>
          
          <Button fullWidth>Voir les détails</Button>
        </ProjectCard>
      </ProjectsGrid>
    </div>
  )
}

export default MarketplacePage
