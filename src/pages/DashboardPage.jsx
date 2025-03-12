import React from 'react'
import styled from 'styled-components'
import { FiTrendingUp, FiClock, FiCalendar, FiBell, FiFileText, FiDollarSign } from 'react-icons/fi'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Enregistrer les composants Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
`

const GridItem = styled.div`
  grid-column: span ${props => props.span || 12};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-column: span ${props => props.tabletSpan || props.span || 12};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-column: span 12;
  }
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`

const StatCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  
  .icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: rgba(255, 107, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    
    svg {
      font-size: 1.5rem;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .content {
    flex: 1;
    
    h4 {
      font-size: 0.9rem;
      color: #ccc;
      margin: 0 0 0.25rem;
    }
    
    p {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
    }
    
    .trend {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      margin-top: 0.25rem;
      
      &.up {
        color: ${props => props.theme.colors.success};
      }
      
      &.down {
        color: ${props => props.theme.colors.error};
      }
    }
  }
`

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  
  .checkbox {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid ${props => props.theme.colors.primary};
    margin-right: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &.checked {
      background-color: ${props => props.theme.colors.primary};
      
      &:after {
        content: '✓';
        color: white;
        font-size: 0.8rem;
      }
    }
  }
  
  .content {
    flex: 1;
    
    h4 {
      margin: 0 0 0.25rem;
      font-size: 0.9rem;
      text-decoration: ${props => props.completed ? 'line-through' : 'none'};
      opacity: ${props => props.completed ? 0.7 : 1};
    }
    
    p {
      margin: 0;
      font-size: 0.8rem;
      color: #ccc;
    }
  }
`

const MissionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const MissionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  
  .content {
    flex: 1;
    
    h4 {
      margin: 0 0 0.25rem;
      font-size: 1rem;
    }
    
    p {
      margin: 0;
      font-size: 0.8rem;
      color: #ccc;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  
  .status {
    margin-left: 1rem;
  }
`

const NotificationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const NotificationItem = styled.li`
  display: flex;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  
  .icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background-color: rgba(255, 107, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    
    svg {
      font-size: 1.25rem;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .content {
    flex: 1;
    
    h4 {
      margin: 0 0 0.25rem;
      font-size: 0.9rem;
    }
    
    p {
      margin: 0;
      font-size: 0.8rem;
      color: #ccc;
    }
  }
  
  .time {
    font-size: 0.75rem;
    color: #999;
    white-space: nowrap;
  }
`

const DashboardPage = () => {
  // Données pour le graphique de revenus
  const revenueData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Revenus',
        data: [3200, 4100, 3800, 5200, 4800, 6000],
        borderColor: '#FF6B00',
        backgroundColor: 'rgba(255, 107, 0, 0.1)',
        tension: 0.4,
      },
    ],
  }
  
  // Options pour le graphique
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1E1E1E',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#FF6B00',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#CCCCCC',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#CCCCCC',
        },
      },
    },
  }
  
  return (
    <div>
      <h1>Tableau de bord</h1>
      
      <DashboardGrid>
        <GridItem span={12}>
          <StatsGrid>
            <StatCard>
              <div className="icon">
                <FiDollarSign />
              </div>
              <div className="content">
                <h4>Revenus du mois</h4>
                <p>6 000 €</p>
                <div className="trend up">
                  <FiTrendingUp /> +15% vs mois dernier
                </div>
              </div>
            </StatCard>
            
            <StatCard>
              <div className="icon">
                <FiClock />
              </div>
              <div className="content">
                <h4>Heures facturées</h4>
                <p>120h</p>
                <div className="trend up">
                  <FiTrendingUp /> +5% vs mois dernier
                </div>
              </div>
            </StatCard>
            
            <StatCard>
              <div className="icon">
                <FiFileText />
              </div>
              <div className="content">
                <h4>Missions en cours</h4>
                <p>3</p>
              </div>
            </StatCard>
            
            <StatCard>
              <div className="icon">
                <FiCalendar />
              </div>
              <div className="content">
                <h4>Prochaine échéance</h4>
                <p>2 jours</p>
              </div>
            </StatCard>
          </StatsGrid>
        </GridItem>
        
        <GridItem span={8} tabletSpan={12}>
          <Card 
            title="Évolution des revenus" 
            action={
              <Button variant="text" size="small">
                Voir détails
              </Button>
            }
          >
            <div style={{ height: '300px' }}>
              <Line data={revenueData} options={chartOptions} />
            </div>
          </Card>
        </GridItem>
        
        <GridItem span={4} tabletSpan={12}>
          <Card 
            title="Tâches à faire" 
            action={
              <Button variant="text" size="small">
                + Ajouter
              </Button>
            }
          >
            <TaskList>
              <TaskItem>
                <div className="checkbox"></div>
                <div className="content">
                  <h4>Finaliser proposition client XYZ</h4>
                  <p>Échéance: Aujourd'hui</p>
                </div>
              </TaskItem>
              
              <TaskItem>
                <div className="checkbox"></div>
                <div className="content">
                  <h4>Envoyer facture projet ABC</h4>
                  <p>Échéance: Demain</p>
                </div>
              </TaskItem>
              
              <TaskItem>
                <div className="checkbox checked"></div>
                <div className="content">
                  <h4>Réunion client DEF</h4>
                  <p>Terminé</p>
                </div>
              </TaskItem>
              
              <TaskItem>
                <div className="checkbox"></div>
                <div className="content">
                  <h4>Mettre à jour portfolio</h4>
                  <p>Échéance: 3 jours</p>
                </div>
              </TaskItem>
            </TaskList>
          </Card>
        </GridItem>
        
        <GridItem span={6} tabletSpan={12}>
          <Card title="Missions en cours">
            <MissionList>
              <MissionItem>
                <div className="content">
                  <h4>Refonte UX/UI pour TechCorp</h4>
                  <p>
                    <FiCalendar /> 15 juin - 30 juillet
                  </p>
                </div>
                <div className="status">
                  <Badge variant="success">En cours</Badge>
                </div>
              </MissionItem>
              
              <MissionItem>
                <div className="content">
                  <h4>Développement API pour FinTech</h4>
                  <p>
                    <FiCalendar /> 1 juin - 15 août
                  </p>
                </div>
                <div className="status">
                  <Badge variant="success">En cours</Badge>
                </div>
              </MissionItem>
              
              <MissionItem>
                <div className="content">
                  <h4>Audit sécurité pour E-commerce</h4>
                  <p>
                    <FiCalendar /> 10 juin - 25 juin
                  </p>
                </div>
                <div className="status">
                  <Badge variant="warning">En attente</Badge>
                </div>
              </MissionItem>
            </MissionList>
          </Card>
        </GridItem>
        
        <GridItem span={6} tabletSpan={12}>
          <Card title="Notifications récentes">
            <NotificationList>
              <NotificationItem>
                <div className="icon">
                  <FiFileText />
                </div>
                <div className="content">
                  <h4>Nouveau contrat reçu</h4>
                  <p>TechCorp vous a envoyé un contrat à signer</p>
                </div>
                <div className="time">
                  Il y a 2h
                </div>
              </NotificationItem>
              
              <NotificationItem>
                <div className="icon">
                  <FiDollarSign />
                </div>
                <div className="content">
                  <h4>Paiement reçu</h4>
                  <p>Facture #F-2023-042 payée (3 200€)</p>
                </div>
                <div className="time">
                  Il y a 1j
                </div>
              </NotificationItem>
              
              <NotificationItem>
                <div className="icon">
                  <FiBell />
                </div>
                <div className="content">
                  <h4>Rappel d'échéance</h4>
                  <p>Livraison du projet FinTech dans 5 jours</p>
                </div>
                <div className="time">
                  Il y a 2j
                </div>
              </NotificationItem>
            </NotificationList>
          </Card>
        </GridItem>
      </DashboardGrid>
    </div>
  )
}

export default DashboardPage
