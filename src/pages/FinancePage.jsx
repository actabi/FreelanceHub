import React from 'react'
import styled from 'styled-components'
import { FiPlus, FiFilter, FiFileText, FiCalendar, FiDollarSign, FiDownload, FiCreditCard, FiTrendingUp, FiPieChart, FiAlertCircle } from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { Line, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
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
  ArcElement,
  Title,
  Tooltip,
  Legend
)

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

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
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

const StatsCard = styled(Card)`
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

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  margin-bottom: 2rem;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 0;
  }
`

const Tab = styled.button`
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.white};
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  white-space: nowrap;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
    border-radius: 3px 3px 0 0;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const InvoicesTable = styled.div`
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.colors.lightGrey};
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  align-items: center;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
    
    &:before {
      content: '';
      height: 1px;
      background-color: ${props => props.theme.colors.lightGrey};
      margin-bottom: 0.5rem;
    }
  }
`

const InvoiceTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
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
  
  .info {
    h3 {
      font-size: 1rem;
      margin: 0 0 0.25rem;
    }
    
    p {
      font-size: 0.85rem;
      color: #ccc;
      margin: 0;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Facture';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const ClientInfo = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Client';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Date';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const AmountInfo = styled.div`
  font-weight: 500;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Montant';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const StatusInfo = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Statut';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: flex-start;
    margin-top: 0.5rem;
    
    &:before {
      content: 'Actions';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const FinancePage = () => {
  const [activeTab, setActiveTab] = React.useState('invoices')
  
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
  
  // Données pour le graphique de répartition
  const distributionData = {
    labels: ['Développement', 'Design', 'Marketing', 'Conseil'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ['#FF6B00', '#4CAF50', '#2196F3', '#9C27B0'],
        borderWidth: 0,
      },
    ],
  }
  
  // Options pour le graphique linéaire
  const lineChartOptions = {
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
    <div>
      <PageHeader>
        <div>
          <h1>Finances</h1>
          <p>Gérez vos factures, paiements et suivez vos revenus</p>
        </div>
        
        <Button variant="primary" icon={<FiPlus />}>
          Nouvelle facture
        </Button>
      </PageHeader>
      
      <DashboardGrid>
        <GridItem span={3} tabletSpan={6}>
          <StatsCard>
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
          </StatsCard>
        </GridItem>
        
        <GridItem span={3} tabletSpan={6}>
          <StatsCard>
            <div className="icon">
              <FiFileText />
            </div>
            <div className="content">
              <h4>Factures en attente</h4>
              <p>3 500 €</p>
              <div className="trend">
                <span>2 factures</span>
              </div>
            </div>
          </StatsCard>
        </GridItem>
        
        <GridItem span={3} tabletSpan={6}>
          <StatsCard>
            <div className="icon">
              <FiCreditCard />
            </div>
            <div className="content">
              <h4>Paiements reçus</h4>
              <p>12 500 €</p>
              <div className="trend">
                <span>Dernier: 15 juin</span>
              </div>
            </div>
          </StatsCard>
        </GridItem>
        
        <GridItem span={3} tabletSpan={6}>
          <StatsCard>
            <div className="icon">
              <FiAlertCircle />
            </div>
            <div className="content">
              <h4>Retards de paiement</h4>
              <p>0 €</p>
              <div className="trend">
                <span>0 facture</span>
              </div>
            </div>
          </StatsCard>
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
              <Line data={revenueData} options={lineChartOptions} />
            </div>
          </Card>
        </GridItem>
        
        <GridItem span={4} tabletSpan={12}>
          <Card 
            title="Répartition par activité" 
            action={
              <Button variant="text" size="small">
                Voir détails
              </Button>
            }
          >
            <div style={{ height: '300px' }}>
              <Doughnut data={distributionData} options={doughnutChartOptions} />
            </div>
          </Card>
        </GridItem>
      </DashboardGrid>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'invoices'} 
          onClick={() => setActiveTab('invoices')}
        >
          Factures
        </Tab>
        <Tab 
          active={activeTab === 'payments'} 
          onClick={() => setActiveTab('payments')}
        >
          Paiements
        </Tab>
        <Tab 
          active={activeTab === 'expenses'} 
          onClick={() => setActiveTab('expenses')}
        >
          Dépenses
        </Tab>
        <Tab 
          active={activeTab === 'reports'} 
          onClick={() => setActiveTab('reports')}
        >
          Rapports
        </Tab>
      </TabsContainer>
      
      {activeTab === 'invoices' && (
        <InvoicesTable>
          <TableHeader>
            <div>Facture</div>
            <div>Client</div>
            <div>Date</div>
            <div>Montant</div>
            <div>Statut</div>
          </TableHeader>
          
          <TableRow>
            <InvoiceTitle>
              <div className="icon">
                <FiFileText />
              </div>
              <div className="info">
                <h3>Facture #F-2023-042</h3>
                <p>Refonte UX/UI</p>
              </div>
            </InvoiceTitle>
            
            <ClientInfo>TechCorp</ClientInfo>
            
            <DateInfo>
              <FiCalendar />
              <span>15/06/2023</span>
            </DateInfo>
            
            <AmountInfo>4 000 €</AmountInfo>
            
            <StatusInfo>
              <Badge variant="success">Payée</Badge>
              <ActionButtons>
                <Button variant="text" size="small" icon={<FiDownload />}></Button>
              </ActionButtons>
            </StatusInfo>
          </TableRow>
          
          <TableRow>
            <InvoiceTitle>
              <div className="icon">
                <FiFileText />
              </div>
              <div className="info">
                <h3>Facture #F-2023-045</h3>
                <p>Développement API - Acompte</p>
              </div>
            </InvoiceTitle>
            
            <ClientInfo>FinTech Solutions</ClientInfo>
            
            <DateInfo>
              <FiCalendar />
              <span>01/06/2023</span>
            </DateInfo>
            
            <AmountInfo>6 000 €</AmountInfo>
            
            <StatusInfo>
              <Badge variant="success">Payée</Badge>
              <ActionButtons>
                <Button variant="text" size="small" icon={<FiDownload />}></Button>
              </ActionButtons>
            </StatusInfo>
          </TableRow>
          
          <TableRow>
            <InvoiceTitle>
              <div className="icon">
                <FiFileText />
              </div>
              <div className="info">
                <h3>Facture #F-2023-048</h3>
                <p>Audit sécurité</p>
              </div>
            </InvoiceTitle>
            
            <ClientInfo>E-Commerce Plus</ClientInfo>
            
            <DateInfo>
              <FiCalendar />
              <span>05/07/2023</span>
            </DateInfo>
            
            <AmountInfo>2 500 €</AmountInfo>
            
            <StatusInfo>
              <Badge variant="warning">En attente</Badge>
              <ActionButtons>
                <Button variant="text" size="small" icon={<FiDownload />}></Button>
              </ActionButtons>
            </StatusInfo>
          </TableRow>
          
          <TableRow>
            <InvoiceTitle>
              <div className="icon">
                <FiFileText />
              </div>
              <div className="info">
                <h3>Facture #F-2023-050</h3>
                <p>Formation React</p>
              </div>
            </InvoiceTitle>
            
            <ClientInfo>Digital Academy</ClientInfo>
            
            <DateInfo>
              <FiCalendar />
              <span>10/07/2023</span>
            </DateInfo>
            
            <AmountInfo>1 000 €</AmountInfo>
            
            <StatusInfo>
              <Badge variant="warning">En attente</Badge>
              <ActionButtons>
                <Button variant="text" size="small" icon={<FiDownload />}></Button>
              </ActionButtons>
            </StatusInfo>
          </TableRow>
          
          <TableRow>
            <InvoiceTitle>
              <div className="icon">
                <FiFileText />
              </div>
              <div className="info">
                <h3>Facture #F-2023-038</h3>
                <p>Stratégie marketing</p>
              </div>
            </InvoiceTitle>
            
            <ClientInfo>Smart Marketing</ClientInfo>
            
            <DateInfo>
              <FiCalendar />
              <span>15/04/2023</span>
            </DateInfo>
            
            <AmountInfo>8 000 €</AmountInfo>
            
            <StatusInfo>
              <Badge variant="success">Payée</Badge>
              <ActionButtons>
                <Button variant="text" size="small" icon={<FiDownload />}></Button>
              </ActionButtons>
            </StatusInfo>
          </TableRow>
        </InvoicesTable>
      )}
    </div>
  )
}

export default FinancePage
