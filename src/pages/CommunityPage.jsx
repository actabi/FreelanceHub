import React from 'react'
import styled from 'styled-components'
import { 
  FiMessageSquare, 
  FiUsers, 
  FiCalendar, 
  FiMapPin, 
  FiThumbsUp, 
  FiMessageCircle, 
  FiShare2, 
  FiTrendingUp, 
  FiGitPullRequest, 
  FiGitMerge, 
  FiStar, 
  FiAward, 
  FiBarChart2, 
  FiPieChart, 
  FiGift, 
  FiTarget, 
  FiCode, 
  FiSettings,
  FiCheck,
  FiCheckSquare
} from 'react-icons/fi'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

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

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const PostCard = styled(Card)`
  padding: 1.5rem;
`

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  .avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

const PostContent = styled.div`
  margin-bottom: 1.5rem;
  
  p {
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
  
  img {
    width: 100%;
    border-radius: 8px;
    margin-top: 1rem;
  }
`

const PostActions = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.white};
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGrey};
  }
  
  svg {
    font-size: 1.1rem;
  }
`

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`

const EventCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const EventImage = styled.div`
  height: 160px;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  margin-bottom: 1rem;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  .badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`

const EventDetails = styled.div`
  flex: 1;
  
  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }
  
  p {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    color: #ccc;
  }
`

const EventMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

// Nouveaux composants pour la section Gouvernance
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

const CommunityPage = () => {
  const [activeTab, setActiveTab] = React.useState('discussions')
  const [featureFilter, setFeatureFilter] = React.useState('all')
  
  return (
    <div>
      <h1>Communauté</h1>
      <p className="mb-4">Échangez avec d'autres freelances, partagez vos expériences et participez à des événements.</p>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'discussions'} 
          onClick={() => setActiveTab('discussions')}
        >
          Discussions
        </Tab>
        <Tab 
          active={activeTab === 'events'} 
          onClick={() => setActiveTab('events')}
        >
          Événements
        </Tab>
        <Tab 
          active={activeTab === 'governance'} 
          onClick={() => setActiveTab('governance')}
        >
          Gouvernance
        </Tab>
        <Tab 
          active={activeTab === 'features'} 
          onClick={() => setActiveTab('features')}
        >
          Propositions
        </Tab>
        <Tab 
          active={activeTab === 'shareholders'} 
          onClick={() => setActiveTab('shareholders')}
        >
          Actionnariat
        </Tab>
        <Tab 
          active={activeTab === 'groups'} 
          onClick={() => setActiveTab('groups')}
        >
          Groupes
        </Tab>
        <Tab 
          active={activeTab === 'mentoring'} 
          onClick={() => setActiveTab('mentoring')}
        >
          Mentorat
        </Tab>
        <Tab 
          active={activeTab === 'resources'} 
          onClick={() => setActiveTab('resources')}
        >
          Ressources
        </Tab>
      </TabsContainer>
      
      {activeTab === 'discussions' && (
        <div>
          <div className="mb-4">
            <Card>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#2D2D2D',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FF6B00',
                  fontWeight: 'bold'
                }}>
                  JD
                </div>
                <input 
                  type="text" 
                  placeholder="Partagez quelque chose avec la communauté..." 
                  style={{ 
                    flex: 1, 
                    backgroundColor: '#2D2D2D', 
                    border: 'none', 
                    borderRadius: '8px', 
                    padding: '0.75rem 1rem',
                    color: 'white'
                  }} 
                />
                <Button>Publier</Button>
              </div>
            </Card>
          </div>
          
          <PostsContainer>
            <PostCard>
              <PostHeader>
                <div className="avatar">SL</div>
                <div className="info">
                  <h3>Sophie Laurent</h3>
                  <p>
                    Designer UX/UI • Il y a 2 heures
                  </p>
                </div>
              </PostHeader>
              
              <PostContent>
                <p>
                  Je viens de terminer un projet passionnant pour une startup dans la fintech. J'ai pu mettre en place une refonte complète de leur interface utilisateur en utilisant un design system que j'ai créé de A à Z. Voici quelques captures d'écran du résultat final. N'hésitez pas à me faire vos retours !
                </p>
                <div style={{ 
                  height: '200px', 
                  backgroundColor: '#2D2D2D', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#999'
                }}>
                  [Image du projet]
                </div>
              </PostContent>
              
              <PostActions>
                <ActionButton>
                  <FiThumbsUp /> 24 J'aime
                </ActionButton>
                <ActionButton>
                  <FiMessageCircle /> 8 Commentaires
                </ActionButton>
                <ActionButton>
                  <FiShare2 /> Partager
                </ActionButton>
              </PostActions>
            </PostCard>
            
            <PostCard>
              <PostHeader>
                <div className="avatar">TM</div>
                <div className="info">
                  <h3>Thomas Martin</h3>
                  <p>
                    Développeur Full Stack • Il y a 5 heures
                  </p>
                </div>
              </PostHeader>
              
              <PostContent>
                <p>
                  Question pour les freelances qui travaillent avec des grands comptes : comment gérez-vous les délais de paiement souvent très longs ? J'ai actuellement un client qui me fait attendre plus de 60 jours pour chaque facture, et ça devient compliqué pour ma trésorerie. Avez-vous des astuces ou des solutions à recommander ?
                </p>
              </PostContent>
              
              <PostActions>
                <ActionButton>
                  <FiThumbsUp /> 18 J'aime
                </ActionButton>
                <ActionButton>
                  <FiMessageCircle /> 15 Commentaires
                </ActionButton>
                <ActionButton>
                  <FiShare2 /> Partager
                </ActionButton>
              </PostActions>
            </PostCard>
            
            <PostCard>
              <PostHeader>
                <div className="avatar">CL</div>
                <div className="info">
                  <h3>Claire Leroy</h3>
                  <p>
                    Consultante Marketing • Il y a 1 jour
                  </p>
                </div>
              </PostHeader>
              
              <PostContent>
                <p>
                  Je partage avec vous un article que j'ai écrit sur les stratégies de content marketing pour les freelances. J'y détaille comment créer du contenu qui attire des clients qualifiés et comment structurer sa présence en ligne pour se positionner en expert.
                </p>
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: '#2D2D2D', 
                  borderRadius: '8px',
                  marginTop: '1rem'
                }}>
                  <h4 style={{ marginBottom: '0.5rem' }}>5 stratégies de content marketing efficaces pour les freelances</h4>
                  <p style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '0.5rem' }}>blog.claireleroy.com</p>
                  <p style={{ fontSize: '0.85rem', color: '#aaa' }}>Découvrez comment attirer des clients qualifiés grâce à une stratégie de contenu adaptée aux indépendants...</p>
                </div>
              </PostContent>
              
              <PostActions>
                <ActionButton>
                  <FiThumbsUp /> 42 J'aime
                </ActionButton>
                <ActionButton>
                  <FiMessageCircle /> 7 Commentaires
                </ActionButton>
                <ActionButton>
                  <FiShare2 /> Partager
                </ActionButton>
              </PostActions>
            </PostCard>
          </PostsContainer>
        </div>
      )}
      
      {activeTab === 'events' && (
        <div>
          <div className="mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Événements à venir</h2>
            <Button variant="outline" icon={<FiCalendar />}>
              Créer un événement
            </Button>
          </div>
          
          <EventsGrid>
            <EventCard hoverable>
              <EventImage>
                <div className="badge">
                  <Badge variant="primary">En ligne</Badge>
                </div>
              </EventImage>
              
              <EventDetails>
                <h3>Workshop : Optimiser sa productivité en freelance</h3>
                <p>
                  Découvrez les meilleures techniques et outils pour maximiser votre productivité et mieux gérer votre temps en tant que freelance.
                </p>
                
                <EventMeta>
                  <MetaItem>
                    <FiCalendar />
                    <span>15 juin 2023 • 14:00 - 16:00</span>
                  </MetaItem>
                  
                  <MetaItem>
                    <FiUsers />
                    <span>42 participants</span>
                  </MetaItem>
                </EventMeta>
              </EventDetails>
              
              <Button fullWidth>S'inscrire</Button>
            </EventCard>
            
            <EventCard hoverable>
              <EventImage>
                <div className="badge">
                  <Badge variant="primary">Présentiel</Badge>
                </div>
              </EventImage>
              
              <EventDetails>
                <h3>Meetup Freelances & Tech</h3>
                <p>
                  Rencontrez d'autres freelances du secteur tech lors de cette soirée networking conviviale. Échangez sur vos expériences et développez votre réseau.
                </p>
                
                <EventMeta>
                  <MetaItem>
                    <FiCalendar />
                    <span>22 juin 2023 • 19:00 - 22:00</span>
                  </MetaItem>
                  
                  <MetaItem>
                    <FiMapPin />
                    <span>La Felicità, Paris</span>
                  </MetaItem>
                  
                  <MetaItem>
                    <FiUsers />
                    <span>78 participants</span>
                  </MetaItem>
                </EventMeta>
              </EventDetails>
              
              <Button fullWidth>S'inscrire</Button>
            </EventCard>
            
            <EventCard hoverable>
              <EventImage>
                <div className="badge">
                  <Badge variant="primary">En ligne</Badge>
                </div>
              </EventImage>
              
              <EventDetails>
                <h3>Webinaire : Fiscalité et statuts pour freelances</h3>
                <p>
                  Un expert-comptable spécialisé dans l'accompagnement des indépendants vous explique tout ce que vous devez savoir sur la fiscalité.
                </p>
                
                <EventMeta>
                  <MetaItem>
                    <FiCalendar />
                    <span>30 juin 2023 • 11:00 - 12:30</span>
                  </MetaItem>
                  
                  <MetaItem>
                    <FiUsers />
                    <span>125 participants</span>
                  </MetaItem>
                </EventMeta>
              </EventDetails>
              
              <Button fullWidth>S'inscrire</Button>
            </EventCard>
            
            <EventCard hoverable>
              <EventImage>
                <div className="badge">
                  <Badge variant="primary">Présentiel</Badge>
                </div>
              </EventImage>
              
              <EventDetails>
                <h3>Atelier : Négocier ses tarifs avec confiance</h3>
                <p>
                  Apprenez à valoriser vos services et à négocier vos tarifs efficacement pour augmenter vos revenus sans perdre de clients.
                </p>
                
                <EventMeta>
                  <MetaItem>
                    <FiCalendar />
                    <span>5 juillet 2023 • 09:30 - 12:30</span>
                  </MetaItem>
                  
                  <MetaItem>
                    <FiMapPin />
                    <span>WeWork Montmartre, Paris</span>
                  </MetaItem>
                  
                  <MetaItem>
                    <FiUsers />
                    <span>32 participants</span>
                  </MetaItem>
                </EventMeta>
              </EventDetails>
              
              <Button fullWidth>S'inscrire</Button>
            </EventCard>
          </EventsGrid>
        </div>
      )}
      
      {activeTab === 'governance' && (
        <div>
          <div className="mb-4">
            <h2>Gouvernance communautaire</h2>
            <p>
              FreelanceHub est une plateforme développée par et pour les freelances. Découvrez comment participer à son évolution et devenir actionnaire.
            </p>
          </div>
          
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
            
            <Button variant="primary" icon={<FiGift />}>
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
    </div>
  )
}

export default CommunityPage
