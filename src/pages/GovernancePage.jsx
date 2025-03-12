import React, { useState } from 'react'
import styled from 'styled-components'
import { 
  FiGitPullRequest, 
  FiUsers, 
  FiBarChart2, 
  FiPieChart, 
  FiTrendingUp, 
  FiCode, 
  FiSettings, 
  FiAward, 
  FiThumbsUp, 
  FiMessageCircle, 
  FiShare2, 
  FiCheck, 
  FiGitMerge, 
  FiTarget, 
  FiCalendar, 
  FiFilter, 
  FiChevronDown, 
  FiChevronUp,
  FiStar,
  FiCheckSquare
} from 'react-icons/fi'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const PageHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #ccc;
    max-width: 800px;
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

const GovernanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const GovernanceCard = styled(Card)`
  height: 100%;
`

const GovernanceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: rgba(255, 107, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.75rem;
    color: ${props => props.theme.colors.primary};
  }
`

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  .filters {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .sort {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    select {
      background-color: ${props => props.theme.colors.darkGrey};
      color: ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.lightGrey};
      border-radius: 4px;
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`

const FilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.darkGrey};
  color: ${props => props.active ? props.theme.colors.dark : props.theme.colors.white};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGrey};
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGrey};
  }
`

const FeatureRequestCard = styled(Card)`
  margin-bottom: 1.5rem;
`

const FeatureHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background-color: rgba(255, 107, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 1.5rem;
    }
  }
  
  .feature-info {
    flex: 1;
    
    h3 {
      margin: 0 0 0.25rem;
      font-size: 1.1rem;
    }
    
    .feature-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.8rem;
      color: #ccc;
      
      .status {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        
        &.planned {
          color: #f0ad4e;
        }
        
        &.in-progress {
          color: #5bc0de;
        }
        
        &.completed {
          color: #5cb85c;
        }
      }
    }
  }
  
  .feature-votes {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1rem;
    
    .vote-count {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${props => props.theme.colors.primary};
    }
    
    .vote-label {
      font-size: 0.8rem;
      color: #ccc;
    }
  }
`

const FeatureContent = styled.div`
  margin-bottom: 1rem;
  
  p {
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
`

const FeatureTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const FeatureTag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  color: #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
`

const FeatureActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
`

const FeatureProgress = styled.div`
  margin: 1.5rem 0;
  
  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    .progress-title {
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .progress-value {
      font-size: 0.9rem;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .progress-bar {
    height: 8px;
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: 4px;
    overflow: hidden;
    
    .progress-fill {
      height: 100%;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 4px;
      width: ${props => props.progress || '0%'};
    }
  }
`

const ShareholderCard = styled(Card)`
  margin-bottom: 1.5rem;
`

const ShareholderStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
  
  .stat-value {
    font-size: 1.75rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.85rem;
    color: #ccc;
  }
`

const ChartContainer = styled.div`
  height: 250px;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  
  p {
    color: #ccc;
    font-size: 0.9rem;
  }
`

const VotingCard = styled(Card)`
  margin-bottom: 1.5rem;
`

const VotingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h3 {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .voting-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .voting-status {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
      
      &.active {
        background-color: rgba(92, 184, 92, 0.2);
        color: #5cb85c;
      }
      
      &.upcoming {
        background-color: rgba(240, 173, 78, 0.2);
        color: #f0ad4e;
      }
      
      &.closed {
        background-color: rgba(217, 83, 79, 0.2);
        color: #d9534f;
      }
    }
    
    .voting-deadline {
      font-size: 0.9rem;
      color: #ccc;
    }
  }
`

const VotingOptions = styled.div`
  margin-bottom: 1.5rem;
`

const VotingOption = styled.div`
  margin-bottom: 1rem;
  
  .option-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    .option-title {
      font-weight: 500;
    }
    
    .option-percentage {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  .option-progress {
    height: 8px;
    background-color: ${props => props.theme.colors.lightGrey};
    border-radius: 4px;
    overflow: hidden;
    
    .option-fill {
      height: 100%;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 4px;
      width: ${props => props.percentage || '0%'};
    }
  }
`

const VotingActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`

const Accordion = styled.div`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
`

const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.colors.darkGrey};
  border: none;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  text-align: left;
  
  svg {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
  }
`

const AccordionContent = styled.div`
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`

const GovernancePage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [featureFilter, setFeatureFilter] = useState('all')
  const [faqItems, setFaqItems] = useState([
    { id: 1, title: "Comment fonctionne le système d'actionnariat ?", isOpen: false },
    { id: 2, title: "Comment sont calculés les dividendes ?", isOpen: false },
    { id: 3, title: "Comment proposer une nouvelle fonctionnalité ?", isOpen: false },
    { id: 4, title: "Comment rejoindre le conseil des freelances ?", isOpen: false },
  ])
  
  const toggleFaqItem = (id) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ))
  }
  
  return (
    <div>
      <PageHeader>
        <h1>Gouvernance & Actionnariat</h1>
        <p>
          FreelanceHub est une plateforme développée par et pour les freelances. Participez à son évolution, proposez des fonctionnalités et devenez actionnaire.
        </p>
      </PageHeader>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')}
        >
          Vue d'ensemble
        </Tab>
        <Tab 
          active={activeTab === 'features'} 
          onClick={() => setActiveTab('features')}
        >
          Propositions
        </Tab>
        <Tab 
          active={activeTab === 'voting'} 
          onClick={() => setActiveTab('voting')}
        >
          Votes en cours
        </Tab>
        <Tab 
          active={activeTab === 'shareholders'} 
          onClick={() => setActiveTab('shareholders')}
        >
          Actionnariat
        </Tab>
        <Tab 
          active={activeTab === 'council'} 
          onClick={() => setActiveTab('council')}
        >
          Conseil des freelances
        </Tab>
        <Tab 
          active={activeTab === 'faq'} 
          onClick={() => setActiveTab('faq')}
        >
          FAQ
        </Tab>
      </TabsContainer>
      
      {activeTab === 'overview' && (
        <div>
          <GovernanceGrid>
            <GovernanceCard hoverable>
              <GovernanceIcon>
                <FiCode />
              </GovernanceIcon>
              <h3>Développement participatif</h3>
              <p>
                Contribuez au code source de la plateforme et proposez des améliorations techniques. Les contributions validées sont récompensées par des tokens.
              </p>
              <Button variant="outline" fullWidth style={{ marginTop: '1rem' }}>
                Voir le repository
              </Button>
            </GovernanceCard>
            
            <GovernanceCard hoverable>
              <GovernanceIcon>
                <FiCheckSquare />
              </GovernanceIcon>
              <h3>Système de vote</h3>
              <p>
                Votez pour les fonctionnalités prioritaires et les décisions stratégiques. Chaque freelance dispose d'un pouvoir de vote proportionnel à son implication.
              </p>
              <Button variant="outline" fullWidth style={{ marginTop: '1rem' }}>
                Voir les votes en cours
              </Button>
            </GovernanceCard>
            
            <GovernanceCard hoverable>
              <GovernanceIcon>
                <FiTrendingUp />
              </GovernanceIcon>
              <h3>Actionnariat freelance</h3>
              <p>
                Devenez actionnaire de FreelanceHub en fonction de votre activité, vos contributions et votre ancienneté sur la plateforme.
              </p>
              <Button variant="outline" fullWidth style={{ marginTop: '1rem' }}>
                En savoir plus
              </Button>
            </GovernanceCard>
            
            <GovernanceCard hoverable>
              <GovernanceIcon>
                <FiSettings />
              </GovernanceIcon>
              <h3>Conseil des freelances</h3>
              <p>
                Rejoignez le conseil qui supervise les orientations stratégiques de la plateforme et représente les intérêts de la communauté.
              </p>
              <Button variant="outline" fullWidth style={{ marginTop: '1rem' }}>
                Candidater
              </Button>
            </GovernanceCard>
          </GovernanceGrid>
          
          <Card style={{ marginTop: '2rem' }}>
            <h3>Prochaine assemblée générale</h3>
            <p>
              La prochaine assemblée générale des actionnaires freelances aura lieu le 15 juillet 2023 à 18h00. Vous pourrez y participer en ligne ou en présentiel à Paris.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Button variant="primary">S'inscrire</Button>
              <Button variant="outline">Voir l'ordre du jour</Button>
            </div>
          </Card>
          
          <div style={{ marginTop: '2rem' }}>
            <h3>Statistiques de la communauté</h3>
            <ShareholderStats>
              <StatCard>
                <div className="stat-value">1250</div>
                <div className="stat-label">Actionnaires freelances</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-value">35%</div>
                <div className="stat-label">Capital détenu par les freelances</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-value">312</div>
                <div className="stat-label">Propositions soumises</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-value">87</div>
                <div className="stat-label">Fonctionnalités implémentées</div>
              </StatCard>
            </ShareholderStats>
          </div>
        </div>
      )}
      
      {activeTab === 'features' && (
        <div>
          <div className="mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <h2>Propositions de fonctionnalités</h2>
            <Button variant="primary" icon={<FiGitPullRequest />}>
              Proposer une fonctionnalité
            </Button>
          </div>
          
          <p className="mb-4">
            Proposez de nouvelles fonctionnalités, votez pour celles qui vous intéressent et suivez leur développement. Les fonctionnalités les plus populaires seront intégrées en priorité.
          </p>
          
          <FilterBar>
            <div className="filters">
              <FilterButton 
                active={featureFilter === 'all'} 
                onClick={() => setFeatureFilter('all')}
              >
                Toutes
              </FilterButton>
              <FilterButton 
                active={featureFilter === 'popular'} 
                onClick={() => setFeatureFilter('popular')}
              >
                Populaires
              </FilterButton>
              <FilterButton 
                active={featureFilter === 'planned'} 
                onClick={() => setFeatureFilter('planned')}
              >
                Planifiées
              </FilterButton>
              <FilterButton 
                active={featureFilter === 'in-progress'} 
                onClick={() => setFeatureFilter('in-progress')}
              >
                En cours
              </FilterButton>
              <FilterButton 
                active={featureFilter === 'completed'} 
                onClick={() => setFeatureFilter('completed')}
              >
                Terminées
              </FilterButton>
            </div>
            
            <div className="sort">
              <span>Trier par:</span>
              <select>
                <option>Votes</option>
                <option>Date</option>
                <option>Statut</option>
              </select>
            </div>
          </FilterBar>
          
          <FeatureRequestCard>
            <FeatureHeader>
              <div className="feature-icon">
                <FiGitMerge />
              </div>
              <div className="feature-info">
                <h3>Système de paiement anticipé des factures</h3>
                <div className="feature-meta">
                  <span>Proposé par Marc Dubois • il y a 2 semaines</span>
                  <span className="status in-progress">
                    <FiGitMerge /> En développement
                  </span>
                </div>
              </div>
              <div className="feature-votes">
                <span className="vote-count">128</span>
                <span className="vote-label">votes</span>
              </div>
            </FeatureHeader>
            
            <FeatureContent>
              <p>
                Mettre en place un système permettant aux freelances de recevoir un paiement anticipé de leurs factures (avance de 80% par exemple) pour éviter les problèmes de trésorerie liés aux délais de paiement des clients.
              </p>
              
              <FeatureTags>
                <FeatureTag>Finance</FeatureTag>
                <FeatureTag>Facturation</FeatureTag>
                <FeatureTag>Trésorerie</FeatureTag>
              </FeatureTags>
              
              <FeatureProgress progress="65%">
                <div className="progress-header">
                  <span className="progress-title">Progression</span>
                  <span className="progress-value">65%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '65%' }}></div>
                </div>
              </FeatureProgress>
            </FeatureContent>
            
            <FeatureActions>
              <Button variant="primary" icon={<FiThumbsUp />}>
                Voter
              </Button>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button variant="outline" icon={<FiMessageCircle />}>
                  Commenter (23)
                </Button>
                <Button variant="outline" icon={<FiShare2 />}>
                  Partager
                </Button>
              </div>
            </FeatureActions>
          </FeatureRequestCard>
          
          <FeatureRequestCard>
            <FeatureHeader>
              <div className="feature-icon">
                <FiUsers />
              </div>
              <div className="feature-info">
                <h3>Système de mentorat entre freelances</h3>
                <div className="feature-meta">
                  <span>Proposé par Julie Martin • il y a 1 mois</span>
                  <span className="status planned">
                    <FiTarget /> Planifié
                  </span>
                </div>
              </div>
              <div className="feature-votes">
                <span className="vote-count">96</span>
                <span className="vote-label">votes</span>
              </div>
            </FeatureHeader>
            
            <FeatureContent>
              <p>
                Créer un système de mentorat permettant aux freelances expérimentés d'accompagner les nouveaux venus sur la plateforme. Les mentors pourraient être récompensés par des tokens ou des avantages sur la plateforme.
              </p>
              
              <FeatureTags>
                <FeatureTag>Communauté</FeatureTag>
                <FeatureTag>Formation</FeatureTag>
                <FeatureTag>Networking</FeatureTag>
              </FeatureTags>
              
              <FeatureProgress progress="25%">
                <div className="progress-header">
                  <span className="progress-title">Progression</span>
                  <span className="progress-value">25%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '25%' }}></div>
                </div>
              </FeatureProgress>
            </FeatureContent>
            
            <FeatureActions>
              <Button variant="primary" icon={<FiThumbsUp />}>
                Voter
              </Button>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button variant="outline" icon={<FiMessageCircle />}>
                  Commenter (12)
                </Button>
                <Button variant="outline" icon={<FiShare2 />}>
                  Partager
                </Button>
              </div>
            </FeatureActions>
          </FeatureRequestCard>
          
          <FeatureRequestCard>
            <FeatureHeader>
              <div className="feature-icon">
                <FiAward />
              </div>
              <div className="feature-info">
                <h3>Programme de certification des compétences</h3>
                <div className="feature-meta">
                  <span>Proposé par Alexandre Petit • il y a 3 semaines</span>
                  <span className="status completed">
                    <FiCheck /> Terminé
                  </span>
                </div>
              </div>
              <div className="feature-votes">
                <span className="vote-count">87</span>
                <span className="vote-label">votes</span>
              </div>
            </FeatureHeader>
            
            <FeatureContent>
              <p>
                Mettre en place un système de certification des compétences pour les freelances, validé par des tests techniques et des évaluations par les pairs. Ces certifications permettraient de renforcer la crédibilité des profils.
              </p>
              
              <FeatureTags>
                <FeatureTag>Profil</FeatureTag>
                <FeatureTag>Compétences</FeatureTag>
                <FeatureTag>Certification</FeatureTag>
              </FeatureTags>
              
              <FeatureProgress progress="100%">
                <div className="progress-header">
                  <span className="progress-title">Progression</span>
                  <span className="progress-value">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '100%' }}></div>
                </div>
              </FeatureProgress>
            </FeatureContent>
            
            <FeatureActions>
              <Button variant="secondary" icon={<FiStar />}>
                Déjà implémenté
              </Button>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button variant="outline" icon={<FiMessageCircle />}>
                  Commenter (31)
                </Button>
                <Button variant="outline" icon={<FiShare2 />}>
                  Partager
                </Button>
              </div>
            </FeatureActions>
          </FeatureRequestCard>
        </div>
      )}
      
      {activeTab === 'voting' && (
        <div>
          <div className="mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Votes en cours</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiFilter />
                <select style={{ 
                  backgroundColor: '#2D2D2D', 
                  color: 'white', 
                  border: '1px solid #444', 
                  borderRadius: '4px',
                  padding: '0.5rem'
                }}>
                  <option>Tous les votes</option>
                  <option>Votes actifs</option>
                  <option>Votes à venir</option>
                  <option>Votes terminés</option>
                </select>
              </div>
            </div>
          </div>
          
          <VotingCard>
            <VotingHeader>
              <h3>
                <FiCheckSquare /> Élection des membres du conseil des freelances
              </h3>
              <div className="voting-meta">
                <span className="voting-status active">En cours</span>
                <span className="voting-deadline">Fin dans 3 jours</span>
              </div>
            </VotingHeader>
            
            <p>
              Élisez les 5 membres qui représenteront la communauté des freelances au sein du conseil d'administration pour l'année 2023-2024.
            </p>
            
            <VotingOptions>
              <VotingOption percentage="42%">
                <div className="option-header">
                  <span className="option-title">Sophie Laurent</span>
                  <span className="option-percentage">42%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '42%' }}></div>
                </div>
              </VotingOption>
              
              <VotingOption percentage="38%">
                <div className="option-header">
                  <span className="option-title">Thomas Martin</span>
                  <span className="option-percentage">38%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '38%' }}></div>
                </div>
              </VotingOption>
              
              <VotingOption percentage="35%">
                <div className="option-header">
                  <span className="option-title">Julie Dubois</span>
                  <span className="option-percentage">35%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '35%' }}></div>
                </div>
              </VotingOption>
              
              <VotingOption percentage="28%">
                <div className="option-header">
                  <span className="option-title">Marc Leroy</span>
                  <span className="option-percentage">28%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '28%' }}></div>
                </div>
              </VotingOption>
              
              <VotingOption percentage="25%">
                <div className="option-header">
                  <span className="option-title">Claire Petit</span>
                  <span className="option-percentage">25%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '25%' }}></div>
                </div>
              </VotingOption>
            </VotingOptions>
            
            <VotingActions>
              <Button variant="primary">Voter</Button>
              <Button variant="outline">Voir les candidats</Button>
            </VotingActions>
          </VotingCard>
          
          <VotingCard>
            <VotingHeader>
              <h3>
                <FiCheckSquare /> Orientation stratégique 2024
              </h3>
              <div className="voting-meta">
                <span className="voting-status active">En cours</span>
                <span className="voting-deadline">Fin dans 5 jours</span>
              </div>
            </VotingHeader>
            
            <p>
              Votez pour définir la priorité stratégique principale de FreelanceHub pour l'année 2024.
            </p>
            
            <VotingOptions>
              <VotingOption percentage="45%">
                <div className="option-header">
                  <span className="option-title">Expansion internationale</span>
                  <span className="option-percentage">45%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '45%' }}></div>
                </div>
              </VotingOption>
              
              <VotingOption percentage="30%">
                <div className="option-header">
                  <span className="option-title">Développement de services financiers</span>
                  <span className="option-percentage">30%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '30%' }}></div>
                </div>
              </VotingOption>
              
              <VotingOption percentage="25%">
                <div className="option-header">
                  <span className="option-title">Renforcement de la communauté</span>
                  <span className="option-percentage">25%</span>
                </div>
                <div className="option-progress">
                  <div className="option-fill" style={{ width: '25%' }}></div>
                </div>
              </VotingOption>
            </VotingOptions>
            
            <VotingActions>
              <Button variant="primary">Voter</Button>
              <Button variant="outline">Plus de détails</Button>
            </VotingActions>
          </VotingCard>
          
          <VotingCard>
            <VotingHeader>
              <h3>
                <FiCheckSquare /> Distribution des dividendes
              </h3>
              <div className="voting-meta">
                <span className="voting-status upcoming">À venir</span>
                <span className="voting-deadline">Début dans 2 semaines</span>
              </div>
            </VotingHeader>
            
            <p>
              Votez pour déterminer la répartition des bénéfices de l'année 2023 entre dividendes, réinvestissement et réserves.
            </p>
            
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              borderRadius: '8px',
              textAlign: 'center',
              margin: '1.5rem 0'
            }}>
              <p>Le vote commencera le 15 août 2023</p>
            </div>
            
            <VotingActions>
              <Button variant="outline">Rappel</Button>
              <Button variant="outline">Plus de détails</Button>
            </VotingActions>
          </VotingCard>
        </div>
      )}
      
      {activeTab === 'shareholders' && (
        <div>
          <div className="mb-4">
            <h2>Programme d'actionnariat freelance</h2>
            <p>
              FreelanceHub est détenu en partie par sa communauté de freelances. Découvrez comment devenir actionnaire et participer aux décisions stratégiques de la plateforme.
            </p>
          </div>
          
          <ShareholderCard>
            <h3>Votre participation</h3>
            
            <ShareholderStats>
              <StatCard>
                <div className="stat-value">2.5%</div>
                <div className="stat-label">Parts détenues</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-value">1250</div>
                <div className="stat-label">Tokens FHT</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-value">3</div>
                <div className="stat-label">Années d'ancienneté</div>
              </StatCard>
              
              <StatCard>
                <div className="stat-value">15</div>
                <div className="stat-label">Contributions</div>
              </StatCard>
            </ShareholderStats>
            
            <h4>Évolution de votre participation</h4>
            <ChartContainer>
              <p>[Graphique d'évolution des parts]</p>
            </ChartContainer>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Button variant="primary" icon={<FiBarChart2 />}>
                Tableau de bord détaillé
              </Button>
              <Button variant="outline" icon={<FiPieChart />}>
                Répartition du capital
              </Button>
            </div>
          </ShareholderCard>
          
          <Card style={{ marginTop: '2rem' }}>
            <h3>Comment devenir actionnaire ?</h3>
            <p>
              Le programme d'actionnariat de FreelanceHub permet aux freelances actifs de devenir copropriétaires de la plateforme. Voici les différentes façons d'acquérir des parts :
            </p>
            
            <div style={{ margin: '1.5rem 0' }}>
              <h4 style={{ marginBottom: '1rem' }}>1. Par l'activité</h4>
              <p>
                Chaque mission réalisée via la plateforme vous permet de gagner des tokens FHT, convertibles en parts de la société. Plus vous êtes actif, plus vous accumulez de tokens.
              </p>
              
              <h4 style={{ margin: '1.5rem 0 1rem' }}>2. Par la contribution</h4>
              <p>
                Contribuez au développement de la plateforme (code, design, contenu, etc.) et recevez des tokens en fonction de l'importance de votre contribution.
              </p>
              
              <h4 style={{ margin: '1.5rem 0 1rem' }}>3. Par l'investissement direct</h4>
              <p>
                Lors des levées de fonds réservées à la communauté, vous pouvez investir directement dans FreelanceHub à des conditions préférentielles.
              </p>
              
              <h4 style={{ margin: '1.5rem 0 1rem' }}>4. Par la cooptation</h4>
              <p>
                Invitez d'autres freelances qualifiés à rejoindre la plateforme et recevez des tokens lorsqu'ils deviennent actifs.
              </p>
            </div>
            
            <Button variant="primary">
              Recevoir mes tokens du mois
            </Button>
          </Card>
          
          <Card style={{ marginTop: '2rem' }}>
            <h3>Prochaine distribution de dividendes</h3>
            <p>
              La prochaine distribution de dividendes aux actionnaires freelances aura lieu le 30 juillet 2023. Les dividendes sont calculés en fonction de votre pourcentage de parts et des résultats financiers de la plateforme.
            </p>
            
            <FeatureProgress progress="75%">
              <div className="progress-header">
                <span className="progress-title">Objectif trimestriel</span>
                <span className="progress-value">75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </FeatureProgress>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
              <div>
                <h4>Dividende estimé</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#FF6B00' }}>325 €</p>
              </div>
              <Button variant="outline">Historique des dividendes</Button>
            </div>
          </Card>
        </div>
      )}
      
      {activeTab === 'council' && (
        <div>
          <div className="mb-4">
            <h2>Conseil des freelances</h2>
            <p>
              Le conseil des freelances est l'organe représentatif de la communauté au sein de la gouvernance de FreelanceHub. Il est composé de 5 membres élus pour un mandat d'un an.
            </p>
          </div>
          
          <Card>
            <h3>Membres actuels du conseil</h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    backgroundColor: '#2D2D2D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#FF6B00'
                  }}>
                    {['SL', 'TM', 'JD', 'ML', 'CP'][i-1]}
                  </div>
                  <h4>{['Sophie Laurent', 'Thomas Martin', 'Julie Dubois', 'Marc Leroy', 'Claire Petit'][i-1]}</h4>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
                    {['Designer UX/UI', 'Développeur Full Stack', 'Consultante Marketing', 'Architecte Cloud', 'Product Manager'][i-1]}
                  </p>
                </div>
              ))}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <Button variant="outline">Voir les profils complets</Button>
              <Button variant="outline">Historique des conseils</Button>
            </div>
          </Card>
          
          <Card style={{ marginTop: '2rem' }}>
            <h3>Rôle et responsabilités</h3>
            <p>
              Le conseil des freelances joue un rôle clé dans la gouvernance de FreelanceHub. Ses principales responsabilités sont :
            </p>
            
            <ul style={{ margin: '1.5rem 0', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>Représenter les intérêts de la communauté des freelances</li>
              <li style={{ marginBottom: '0.75rem' }}>Participer aux décisions stratégiques de la plateforme</li>
              <li style={{ marginBottom: '0.75rem' }}>Valider les nouvelles fonctionnalités prioritaires</li>
              <li style={{ marginBottom: '0.75rem' }}>Superviser la distribution des tokens et des dividendes</li>
              <li style={{ marginBottom: '0.75rem' }}>Organiser les assemblées générales des actionnaires freelances</li>
            </ul>
          </Card>
          
          <Card style={{ marginTop: '2rem' }}>
            <h3>Prochaines élections</h3>
            <p>
              Les prochaines élections du conseil des freelances auront lieu du 1er au 15 septembre 2023. Tous les freelances actifs sur la plateforme peuvent se porter candidats et voter.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <Button variant="primary">Candidater</Button>
              <Button variant="outline">En savoir plus</Button>
            </div>
          </Card>
        </div>
      )}
      
      {activeTab === 'faq' && (
        <div>
          <div className="mb-4">
            <h2>Questions fréquentes</h2>
            <p>
              Retrouvez les réponses aux questions les plus fréquentes sur la gouvernance et l'actionnariat de FreelanceHub.
            </p>
          </div>
          
          {faqItems.map(item => (
            <Accordion key={item.id}>
              <AccordionHeader onClick={() => toggleFaqItem(item.id)}>
                {item.title}
                {item.isOpen ? <FiChevronUp /> : <FiChevronDown />}
              </AccordionHeader>
              <AccordionContent isOpen={item.isOpen}>
                {item.id === 1 && (
                  <div>
                    <p>
                      Le système d'actionnariat de FreelanceHub permet aux freelances de devenir copropriétaires de la plateforme. Il fonctionne selon un modèle de tokens (FHT) que vous pouvez accumuler de différentes manières :
                    </p>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                      <li style={{ marginBottom: '0.5rem' }}>En réalisant des missions via la plateforme</li>
                      <li style={{ marginBottom: '0.5rem' }}>En contribuant au développement (code, design, contenu)</li>
                      <li style={{ marginBottom: '0.5rem' }}>En participant activement à la communauté</li>
                      <li style={{ marginBottom: '0.5rem' }}>En cooptant d'autres freelances qualifiés</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                      Ces tokens peuvent ensuite être convertis en parts de la société lors des périodes de conversion trimestrielles. Plus vous accumulez de tokens, plus votre participation au capital augmente.
                    </p>
                  </div>
                )}
                
                {item.id === 2 && (
                  <div>
                    <p>
                      Les dividendes sont calculés en fonction de plusieurs facteurs :
                    </p>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Votre pourcentage de parts dans la société</li>
                      <li style={{ marginBottom: '0.5rem' }}>Les résultats financiers trimestriels de la plateforme</li>
                      <li style={{ marginBottom: '0.5rem' }}>La politique de distribution votée par l'assemblée générale</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                      Une partie des bénéfices est systématiquement réinvestie dans le développement de la plateforme, tandis que l'autre partie est distribuée aux actionnaires. La répartition exacte est soumise au vote des actionnaires chaque année.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Les dividendes sont versés trimestriellement, directement sur votre compte bancaire ou sous forme de tokens supplémentaires, selon votre choix.
                    </p>
                  </div>
                )}
                
                {item.id === 3 && (
                  <div>
                    <p>
                      Pour proposer une nouvelle fonctionnalité, suivez ces étapes :
                    </p>
                    <ol style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Rendez-vous dans l'onglet "Propositions" de la section Gouvernance</li>
                      <li style={{ marginBottom: '0.5rem' }}>Cliquez sur le bouton "Proposer une fonctionnalité"</li>
                      <li style={{ marginBottom: '0.5rem' }}>Remplissez le formulaire en détaillant votre idée, son intérêt et son impact potentiel</li>
                      <li style={{ marginBottom: '0.5rem' }}>Soumettez votre proposition à la communauté</li>
                    </ol>
                    <p style={{ marginTop: '1rem' }}>
                      Une fois soumise, votre proposition sera visible par tous les membres qui pourront voter et commenter. Si elle reçoit suffisamment de votes positifs, elle sera étudiée par l'équipe de développement et potentiellement intégrée à la feuille de route.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Si votre proposition est retenue et implémentée, vous recevrez des tokens en récompense, proportionnellement à l'importance de la fonctionnalité.
                    </p>
                  </div>
                )}
                
                {item.id === 4 && (
                  <div>
                    <p>
                      Pour rejoindre le conseil des freelances, vous devez :
                    </p>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Être un freelance actif sur la plateforme depuis au moins 1 an</li>
                      <li style={{ marginBottom: '0.5rem' }}>Détenir un minimum de 500 tokens FHT</li>
                      <li style={{ marginBottom: '0.5rem' }}>Présenter votre candidature lors de la période d'élection</li>
                      <li style={{ marginBottom: '0.5rem' }}>Rédiger un programme présentant votre vision pour la plateforme</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                      Les élections ont lieu une fois par an, généralement en septembre. Tous les freelances peuvent voter pour élire les 5 membres du conseil. Les candidats ayant reçu le plus de votes sont élus pour un mandat d'un an.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                      Être membre du conseil demande un investissement en temps d'environ 5 heures par semaine, mais c'est une excellente opportunité pour influencer l'avenir de la plateforme et développer votre réseau.
                    </p>
                  </div>
                )}
              </AccordionContent>
            </Accordion>
          ))}
          
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p>Vous n'avez pas trouvé la réponse à votre question ?</p>
            <Button variant="outline" style={{ marginTop: '1rem' }}>
              Contacter l'équipe
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GovernancePage
