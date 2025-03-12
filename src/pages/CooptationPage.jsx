import React, { useState } from 'react'
import styled from 'styled-components'
import { FiPlus, FiFilter, FiUsers, FiDollarSign, FiInfo, FiLink, FiShare2, FiBarChart2 } from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import CooptationChain from '../components/cooptation/CooptationChain'
import CooptationStats from '../components/cooptation/CooptationStats'
import ReferralForm from '../components/cooptation/ReferralForm'

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

const ReferralList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ReferralItem = styled(Card)`
  display: flex;
  align-items: center;
  padding: 1rem;
  
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.lightGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
  }
  
  .info {
    flex: 1;
    
    h4 {
      font-size: 1rem;
      margin: 0 0 0.25rem;
    }
    
    p {
      font-size: 0.85rem;
      color: #ccc;
      margin: 0;
    }
  }
  
  .amount {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    margin-right: 1rem;
  }
`

const InfoBox = styled.div`
  background-color: rgba(255, 107, 0, 0.1);
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`

const CooptationPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  // Sample data for the cooptation chain
  const cooptationChainData = {
    mission: {
      title: "Développement API pour plateforme fintech",
      client: "FinTech Solutions",
      initialRate: 600,
      finalRate: 450,
      duration: "45 jours",
      totalValue: 27000
    },
    chain: [
      {
        id: 1,
        name: "Thomas Martin",
        role: "Développeur principal",
        level: 0,
        rate: 450,
        percentage: 100,
        amount: 20250,
        avatar: "TM"
      },
      {
        id: 2,
        name: "Sophie Laurent",
        role: "Apporteur d'affaires",
        level: 1,
        rate: 600,
        percentage: 15,
        amount: 4050,
        avatar: "SL"
      },
      {
        id: 3,
        name: "Marc Dubois",
        role: "Responsable cooptation",
        level: 2,
        rate: 600,
        percentage: 5,
        amount: 1350,
        avatar: "MD"
      },
      {
        id: 4,
        name: "Plateforme FreelanceHub",
        role: "Frais de service",
        level: 3,
        rate: 600,
        percentage: 5,
        amount: 1350,
        avatar: "FH"
      }
    ]
  }
  
  // Sample data for referrals
  const myReferrals = [
    {
      id: 1,
      name: "Julie Dupont",
      role: "UX/UI Designer",
      date: "15/06/2023",
      status: "active",
      earnings: 2500,
      avatar: "JD"
    },
    {
      id: 2,
      name: "Romain Lefort",
      role: "Développeur Frontend",
      date: "03/05/2023",
      status: "active",
      earnings: 1800,
      avatar: "RL"
    },
    {
      id: 3,
      name: "Camille Mercier",
      role: "Chef de projet",
      date: "22/04/2023",
      status: "pending",
      earnings: 0,
      avatar: "CM"
    }
  ]
  
  return (
    <div>
      <PageHeader>
        <div>
          <h1>Cooptation</h1>
          <p>Gérez vos cooptations et suivez vos revenus de parrainage</p>
        </div>
        
        <Button variant="primary" icon={<FiPlus />}>
          Inviter un freelance
        </Button>
      </PageHeader>
      
      <InfoBox>
        <FiInfo />
        <p>
          Notre système de cooptation vous permet de parrainer d'autres freelances et de recevoir une commission sur leurs missions.
          Vous pouvez également être parrainé pour des missions et partager une partie de votre TJM avec votre parrain.
          Toutes les commissions sont transparentes et visibles par tous les membres de la communauté.
        </p>
      </InfoBox>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')}
        >
          Vue d'ensemble
        </Tab>
        <Tab 
          active={activeTab === 'my-referrals'} 
          onClick={() => setActiveTab('my-referrals')}
        >
          Mes parrainages
        </Tab>
        <Tab 
          active={activeTab === 'my-missions'} 
          onClick={() => setActiveTab('my-missions')}
        >
          Mes missions cooptées
        </Tab>
        <Tab 
          active={activeTab === 'create'} 
          onClick={() => setActiveTab('create')}
        >
          Créer une cooptation
        </Tab>
      </TabsContainer>
      
      {activeTab === 'overview' && (
        <>
          <DashboardGrid>
            <GridItem span={3} tabletSpan={6}>
              <StatsCard>
                <div className="icon">
                  <FiUsers />
                </div>
                <div className="content">
                  <h4>Freelances parrainés</h4>
                  <p>12</p>
                  <div className="trend up">
                    +3 ce mois-ci
                  </div>
                </div>
              </StatsCard>
            </GridItem>
            
            <GridItem span={3} tabletSpan={6}>
              <StatsCard>
                <div className="icon">
                  <FiDollarSign />
                </div>
                <div className="content">
                  <h4>Revenus de cooptation</h4>
                  <p>4 350 €</p>
                  <div className="trend up">
                    +850 € ce mois-ci
                  </div>
                </div>
              </StatsCard>
            </GridItem>
            
            <GridItem span={3} tabletSpan={6}>
              <StatsCard>
                <div className="icon">
                  <FiBarChart2 />
                </div>
                <div className="content">
                  <h4>Missions cooptées</h4>
                  <p>5</p>
                  <div className="trend">
                    2 en cours
                  </div>
                </div>
              </StatsCard>
            </GridItem>
            
            <GridItem span={3} tabletSpan={6}>
              <StatsCard>
                <div className="icon">
                  <FiLink />
                </div>
                <div className="content">
                  <h4>Niveau de cooptation</h4>
                  <p>Niveau 2</p>
                  <div className="trend">
                    3 niveaux max
                  </div>
                </div>
              </StatsCard>
            </GridItem>
          </DashboardGrid>
          
          <DashboardGrid>
            <GridItem span={7} tabletSpan={12}>
              <Card 
                title="Exemple de chaîne de cooptation" 
                action={
                  <Button variant="text" size="small">
                    Voir détails
                  </Button>
                }
              >
                <CooptationChain data={cooptationChainData} />
              </Card>
            </GridItem>
            
            <GridItem span={5} tabletSpan={12}>
              <Card 
                title="Statistiques de cooptation" 
                action={
                  <Button variant="text" size="small">
                    Voir tout
                  </Button>
                }
              >
                <CooptationStats />
              </Card>
            </GridItem>
          </DashboardGrid>
          
          <Card 
            title="Derniers parrainages" 
            action={
              <Button variant="text" size="small" icon={<FiFilter />}>
                Filtrer
              </Button>
            }
          >
            <ReferralList>
              {myReferrals.map(referral => (
                <ReferralItem key={referral.id}>
                  <div className="avatar" style={{ backgroundColor: referral.id % 2 === 0 ? '#FF6B00' : '#2196F3' }}>
                    {referral.avatar}
                  </div>
                  <div className="info">
                    <h4>{referral.name}</h4>
                    <p>{referral.role} • Parrainé le {referral.date}</p>
                  </div>
                  <div className="amount">
                    {referral.earnings > 0 ? `+${referral.earnings} €` : '—'}
                  </div>
                  <Badge variant={referral.status === 'active' ? 'success' : 'warning'}>
                    {referral.status === 'active' ? 'Actif' : 'En attente'}
                  </Badge>
                </ReferralItem>
              ))}
            </ReferralList>
          </Card>
        </>
      )}
      
      {activeTab === 'create' && (
        <Card title="Créer une nouvelle cooptation">
          <ReferralForm />
        </Card>
      )}
    </div>
  )
}

export default CooptationPage
