import React from 'react'
import styled from 'styled-components'
import { FiPlus, FiFilter, FiCalendar, FiClock, FiDollarSign, FiUsers, FiMoreVertical } from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: space-between;
  }
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

const MissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const MissionCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const MissionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  .status {
    flex-shrink: 0;
  }
`

const MissionTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`

const MissionClient = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  
  .logo {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
  
  .name {
    font-size: 0.9rem;
    font-weight: 500;
  }
`

const MissionDetails = styled.div`
  flex: 1;
`

const MissionMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.85rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1rem;
  }
`

const MissionProgress = styled.div`
  margin-bottom: 1.5rem;
  
  .label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
  }
  
  .bar {
    height: 6px;
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: 3px;
    overflow: hidden;
    
    .fill {
      height: 100%;
      background-color: ${props => props.theme.colors.primary};
      width: ${props => props.progress}%;
    }
  }
`

const MissionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
  
  .team {
    display: flex;
    
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.lightGrey};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 500;
      color: ${props => props.theme.colors.white};
      margin-left: -8px;
      border: 2px solid ${props => props.theme.colors.darkGrey};
      
      &:first-child {
        margin-left: 0;
      }
    }
  }
`

const MissionsPage = () => {
  return (
    <div>
      <PageHeader>
        <div>
          <h1>Missions</h1>
          <p>Gérez vos missions en cours et passées</p>
        </div>
        
        <Button variant="primary" icon={<FiPlus />}>
          Nouvelle mission
        </Button>
      </PageHeader>
      
      <FilterBar>
        <FilterButton active>Toutes</FilterButton>
        <FilterButton>En cours</FilterButton>
        <FilterButton>À venir</FilterButton>
        <FilterButton>Terminées</FilterButton>
        <FilterButton icon={<FiFilter />}>Filtres</FilterButton>
      </FilterBar>
      
      <MissionsGrid>
        <MissionCard hoverable>
          <MissionHeader>
            <MissionTitle>Refonte UX/UI pour application mobile</MissionTitle>
            <div className="status">
              <Badge variant="success">En cours</Badge>
            </div>
          </MissionHeader>
          
          <MissionClient>
            <div className="logo">TC</div>
            <div className="name">TechCorp</div>
          </MissionClient>
          
          <MissionDetails>
            <MissionMeta>
              <MetaItem>
                <FiCalendar />
                <span>15 juin - 30 juillet 2023</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>120 heures estimées</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>12 000 € - 550 €/jour</span>
              </MetaItem>
            </MissionMeta>
            
            <MissionProgress progress={65}>
              <div className="label">
                <span>Progression</span>
                <span>65%</span>
              </div>
              <div className="bar">
                <div className="fill"></div>
              </div>
            </MissionProgress>
          </MissionDetails>
          
          <MissionFooter>
            <div className="team">
              <div className="avatar" style={{ backgroundColor: '#FF6B00' }}>SL</div>
              <div className="avatar" style={{ backgroundColor: '#4CAF50' }}>JD</div>
              <div className="avatar" style={{ backgroundColor: '#2196F3' }}>MR</div>
            </div>
            
            <Button variant="text" icon={<FiMoreVertical />}></Button>
          </MissionFooter>
        </MissionCard>
        
        <MissionCard hoverable>
          <MissionHeader>
            <MissionTitle>Développement API pour plateforme fintech</MissionTitle>
            <div className="status">
              <Badge variant="success">En cours</Badge>
            </div>
          </MissionHeader>
          
          <MissionClient>
            <div className="logo">FT</div>
            <div className="name">FinTech Solutions</div>
          </MissionClient>
          
          <MissionDetails>
            <MissionMeta>
              <MetaItem>
                <FiCalendar />
                <span>1 juin - 15 août 2023</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>200 heures estimées</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>18 000 € - 600 €/jour</span>
              </MetaItem>
            </MissionMeta>
            
            <MissionProgress progress={40}>
              <div className="label">
                <span>Progression</span>
                <span>40%</span>
              </div>
              <div className="bar">
                <div className="fill"></div>
              </div>
            </MissionProgress>
          </MissionDetails>
          
          <MissionFooter>
            <div className="team">
              <div className="avatar" style={{ backgroundColor: '#2196F3' }}>TM</div>
              <div className="avatar" style={{ backgroundColor: '#9C27B0' }}>AL</div>
            </div>
            
            <Button variant="text" icon={<FiMoreVertical />}></Button>
          </MissionFooter>
        </MissionCard>
        
        <MissionCard hoverable>
          <MissionHeader>
            <MissionTitle>Audit sécurité pour site e-commerce</MissionTitle>
            <div className="status">
              <Badge variant="warning">À venir</Badge>
            </div>
          </MissionHeader>
          
          <MissionClient>
            <div className="logo">EC</div>
            <div className="name">E-Commerce Plus</div>
          </MissionClient>
          
          <MissionDetails>
            <MissionMeta>
              <MetaItem>
                <FiCalendar />
                <span>10 juillet - 25 juillet 2023</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>40 heures estimées</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>5 000 € - 625 €/jour</span>
              </MetaItem>
            </MissionMeta>
            
            <MissionProgress progress={0}>
              <div className="label">
                <span>Progression</span>
                <span>0%</span>
              </div>
              <div className="bar">
                <div className="fill"></div>
              </div>
            </MissionProgress>
          </MissionDetails>
          
          <MissionFooter>
            <div className="team">
              <div className="avatar" style={{ backgroundColor: '#F44336' }}>RD</div>
            </div>
            
            <Button variant="text" icon={<FiMoreVertical />}></Button>
          </MissionFooter>
        </MissionCard>
        
        <MissionCard hoverable>
          <MissionHeader>
            <MissionTitle>Stratégie marketing digital</MissionTitle>
            <div className="status">
              <Badge variant="info">Terminée</Badge>
            </div>
          </MissionHeader>
          
          <MissionClient>
            <div className="logo">SM</div>
            <div className="name">Smart Marketing</div>
          </MissionClient>
          
          <MissionDetails>
            <MissionMeta>
              <MetaItem>
                <FiCalendar />
                <span>15 avril - 30 mai 2023</span>
              </MetaItem>
              
              <MetaItem>
                <FiClock />
                <span>80 heures réalisées</span>
              </MetaItem>
              
              <MetaItem>
                <FiDollarSign />
                <span>8 000 € - 500 €/jour</span>
              </MetaItem>
            </MissionMeta>
            
            <MissionProgress progress={100}>
              <div className="label">
                <span>Progression</span>
                <span>100%</span>
              </div>
              <div className="bar">
                <div className="fill"></div>
              </div>
            </MissionProgress>
          </MissionDetails>
          
          <MissionFooter>
            <div className="team">
              <div className="avatar" style={{ backgroundColor: '#9C27B0' }}>CL</div>
              <div className="avatar" style={{ backgroundColor: '#FF9800' }}>PD</div>
            </div>
            
            <Button variant="text" icon={<FiMoreVertical />}></Button>
          </MissionFooter>
        </MissionCard>
      </MissionsGrid>
    </div>
  )
}

export default MissionsPage
