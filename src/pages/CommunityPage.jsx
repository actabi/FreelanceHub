import React from 'react'
import styled from 'styled-components'
import { FiMessageSquare, FiUsers, FiCalendar, FiMapPin, FiThumbsUp, FiMessageCircle, FiShare2 } from 'react-icons/fi'
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

const CommunityPage = () => {
  const [activeTab, setActiveTab] = React.useState('discussions')
  
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
    </div>
  )
}

export default CommunityPage
