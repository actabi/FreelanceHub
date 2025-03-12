import React from 'react'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'
import { FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi'

const StatsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ChartContainer = styled.div`
  height: 200px;
  margin-bottom: 1.5rem;
`

const StatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: rgba(255, 107, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 1.25rem;
    }
  }
  
  .content {
    flex: 1;
    
    h4 {
      font-size: 0.9rem;
      margin: 0 0 0.25rem;
    }
    
    p {
      font-size: 0.8rem;
      color: #ccc;
      margin: 0;
    }
  }
  
  .value {
    font-size: 1.1rem;
    font-weight: 600;
  }
`

const CooptationStats = () => {
  // Données pour le graphique de répartition des revenus
  const revenueData = {
    labels: ['Revenus directs', 'Cooptation niveau 1', 'Cooptation niveau 2', 'Cooptation niveau 3'],
    datasets: [
      {
        data: [65, 20, 10, 5],
        backgroundColor: ['#FF6B00', '#4CAF50', '#2196F3', '#9C27B0'],
        borderWidth: 0,
      },
    ],
  }
  
  // Options pour le graphique en donut
  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#CCCCCC',
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: '#1E1E1E',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#FF6B00',
        borderWidth: 1,
      },
    },
    cutout: '70%',
  }
  
  return (
    <StatsContainer>
      <ChartContainer>
        <Doughnut data={revenueData} options={doughnutChartOptions} />
      </ChartContainer>
      
      <StatsList>
        <StatItem>
          <div className="icon">
            <FiTrendingUp />
          </div>
          <div className="content">
            <h4>Taux de conversion</h4>
            <p>Invitations acceptées</p>
          </div>
          <div className="value">68%</div>
        </StatItem>
        
        <StatItem>
          <div className="icon">
            <FiUsers />
          </div>
          <div className="content">
            <h4>Réseau étendu</h4>
            <p>Tous niveaux confondus</p>
          </div>
          <div className="value">28 freelances</div>
        </StatItem>
        
        <StatItem>
          <div className="icon">
            <FiDollarSign />
          </div>
          <div className="content">
            <h4>Revenu moyen par cooptation</h4>
            <p>Sur les 12 derniers mois</p>
          </div>
          <div className="value">850 €</div>
        </StatItem>
      </StatsList>
    </StatsContainer>
  )
}

export default CooptationStats
