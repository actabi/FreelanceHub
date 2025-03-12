import React from 'react'
import styled from 'styled-components'
import { FiArrowRight, FiInfo } from 'react-icons/fi'

const ChainContainer = styled.div`
  margin-bottom: 2rem;
`

const MissionInfo = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.1rem;
    margin: 0 0 1rem;
  }
  
  .details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    
    .detail-item {
      h4 {
        font-size: 0.85rem;
        color: #ccc;
        margin: 0 0 0.25rem;
      }
      
      p {
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
      }
    }
  }
`

const ChainFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ChainItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 100%;
    left: 24px;
    width: 2px;
    height: 1.5rem;
    background-color: ${props => props.theme.colors.lightGrey};
  }
  
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${props => 
      props.level === 0 ? props.theme.colors.primary : 
      props.level === 1 ? props.theme.colors.success : 
      props.level === 2 ? props.theme.colors.info : 
      props.theme.colors.warning};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    flex-shrink: 0;
  }
  
  .content {
    flex: 1;
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: 8px;
    padding: 1rem;
    
    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      
      h4 {
        font-size: 1rem;
        margin: 0;
      }
      
      .level {
        font-size: 0.8rem;
        color: #ccc;
      }
    }
    
    .role {
      font-size: 0.85rem;
      color: #ccc;
      margin-bottom: 0.75rem;
    }
    
    .details {
      display: flex;
      gap: 1.5rem;
      
      .detail-item {
        h5 {
          font-size: 0.75rem;
          color: #ccc;
          margin: 0 0 0.25rem;
        }
        
        p {
          font-size: 0.9rem;
          font-weight: 500;
          margin: 0;
        }
      }
    }
  }
`

const SummaryBox = styled.div`
  background-color: rgba(255, 107, 0, 0.1);
  border-radius: 8px;
  padding: 1.25rem;
  margin-top: 1.5rem;
  
  .header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    
    h4 {
      font-size: 1rem;
      margin: 0;
    }
    
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    
    .summary-item {
      h5 {
        font-size: 0.85rem;
        color: #ccc;
        margin: 0 0 0.25rem;
      }
      
      p {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0;
        
        &.highlight {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`

const CooptationChain = ({ data }) => {
  const { mission, chain } = data
  
  // Calculate total cooptation fees
  const totalFees = chain.slice(1).reduce((sum, item) => sum + item.amount, 0)
  
  return (
    <ChainContainer>
      <MissionInfo>
        <h3>{mission.title}</h3>
        <div className="details">
          <div className="detail-item">
            <h4>Client</h4>
            <p>{mission.client}</p>
          </div>
          <div className="detail-item">
            <h4>TJM initial</h4>
            <p>{mission.initialRate} €</p>
          </div>
          <div className="detail-item">
            <h4>TJM final</h4>
            <p>{mission.finalRate} €</p>
          </div>
          <div className="detail-item">
            <h4>Durée</h4>
            <p>{mission.duration}</p>
          </div>
        </div>
      </MissionInfo>
      
      <ChainFlow>
        {chain.map((item) => (
          <ChainItem key={item.id} level={item.level}>
            <div className="avatar">
              {item.avatar}
            </div>
            <div className="content">
              <div className="header">
                <h4>{item.name}</h4>
                <div className="level">Niveau {item.level}</div>
              </div>
              <div className="role">{item.role}</div>
              <div className="details">
                <div className="detail-item">
                  <h5>TJM de référence</h5>
                  <p>{item.rate} €</p>
                </div>
                <div className="detail-item">
                  <h5>Pourcentage</h5>
                  <p>{item.percentage}%</p>
                </div>
                <div className="detail-item">
                  <h5>Montant</h5>
                  <p>{item.amount} €</p>
                </div>
              </div>
            </div>
          </ChainItem>
        ))}
      </ChainFlow>
      
      <SummaryBox>
        <div className="header">
          <FiInfo />
          <h4>Récapitulatif de la mission</h4>
        </div>
        <div className="summary-grid">
          <div className="summary-item">
            <h5>Valeur totale</h5>
            <p>{mission.totalValue} €</p>
          </div>
          <div className="summary-item">
            <h5>Frais de cooptation</h5>
            <p>{totalFees} €</p>
          </div>
          <div className="summary-item">
            <h5>Revenu freelance</h5>
            <p className="highlight">{mission.totalValue - totalFees} €</p>
          </div>
          <div className="summary-item">
            <h5>Taux de rétention</h5>
            <p>{Math.round(((mission.totalValue - totalFees) / mission.totalValue) * 100)}%</p>
          </div>
        </div>
      </SummaryBox>
    </ChainContainer>
  )
}

export default CooptationChain
