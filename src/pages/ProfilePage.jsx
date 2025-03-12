import React from 'react'
import styled from 'styled-components'
import { FiEdit, FiUser, FiBriefcase, FiStar, FiSettings, FiShield, FiCreditCard, FiFileText, FiUpload } from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  .edit {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border: 3px solid ${props => props.theme.colors.dark};
  }
`

const ProfileInfo = styled.div`
  flex: 1;
  
  h1 {
    margin-bottom: 0.5rem;
  }
  
  .tagline {
    font-size: 1.1rem;
    color: #ccc;
    margin-bottom: 1rem;
  }
  
  .badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
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

const ProfileGrid = styled.div`
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

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: ${props => props.theme.colors.lightGrey};
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colors.white};
    font-size: 0.9rem;
    font-family: inherit;
    
    &:focus {
      outline: 2px solid ${props => props.theme.colors.primary};
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  
  .hint {
    font-size: 0.8rem;
    color: #999;
    margin-top: 0.5rem;
  }
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const SkillInput = styled.div`
  display: flex;
  gap: 0.5rem;
  
  input {
    flex: 1;
  }
`

const ProfilePage = () => {
  const [activeTab, setActiveTab] = React.useState('info')
  
  return (
    <div>
      <ProfileHeader>
        <Avatar>
          JD
          <div className="edit">
            <FiEdit />
          </div>
        </Avatar>
        
        <ProfileInfo>
          <h1>Jean Dupont</h1>
          <p className="tagline">Développeur Full Stack & UX Designer</p>
          
          <div className="badges">
            <Badge variant="primary">Freelance depuis 2018</Badge>
            <Badge variant="secondary">Paris, France</Badge>
            <Badge variant="secondary">Disponible</Badge>
          </div>
        </ProfileInfo>
      </ProfileHeader>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'info'} 
          onClick={() => setActiveTab('info')}
        >
          <FiUser /> Informations
        </Tab>
        <Tab 
          active={activeTab === 'skills'} 
          onClick={() => setActiveTab('skills')}
        >
          <FiBriefcase /> Compétences
        </Tab>
        <Tab 
          active={activeTab === 'portfolio'} 
          onClick={() => setActiveTab('portfolio')}
        >
          <FiStar /> Portfolio
        </Tab>
        <Tab 
          active={activeTab === 'settings'} 
          onClick={() => setActiveTab('settings')}
        >
          <FiSettings /> Paramètres
        </Tab>
      </TabsContainer>
      
      {activeTab === 'info' && (
        <ProfileGrid>
          <GridItem span={8} tabletSpan={12}>
            <Card title="Informations personnelles">
              <FormGroup>
                <label>Nom complet</label>
                <input type="text" defaultValue="Jean Dupont" />
              </FormGroup>
              
              <FormGroup>
                <label>Titre professionnel</label>
                <input type="text" defaultValue="Développeur Full Stack & UX Designer" />
              </FormGroup>
              
              <FormGroup>
                <label>Email</label>
                <input type="email" defaultValue="jean.dupont@example.com" />
              </FormGroup>
              
              <FormGroup>
                <label>Téléphone</label>
                <input type="tel" defaultValue="+33 6 12 34 56 78" />
              </FormGroup>
              
              <FormGroup>
                <label>Localisation</label>
                <input type="text" defaultValue="Paris, France" />
              </FormGroup>
              
              <FormGroup>
                <label>À propos</label>
                <textarea defaultValue="Développeur Full Stack passionné avec plus de 5 ans d'expérience dans la création d'applications web et mobiles. Spécialisé en React, Node.js et UX/UI design. J'aime résoudre des problèmes complexes et créer des interfaces utilisateur intuitives et élégantes." />
              </FormGroup>
              
              <Button>Enregistrer les modifications</Button>
            </Card>
          </GridItem>
          
          <GridItem span={4} tabletSpan={12}>
            <Card title="Statut professionnel">
              <FormGroup>
                <label>Statut actuel</label>
                <select defaultValue="freelance">
                  <option value="freelance">Freelance</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="employee">Salarié</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label>Structure juridique</label>
                <select defaultValue="eurl">
                  <option value="eurl">EURL</option>
                  <option value="sasu">SASU</option>
                  <option value="ei">Entreprise Individuelle</option>
                  <option value="portage">Portage salarial</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label>Numéro SIRET</label>
                <input type="text" defaultValue="12345678900012" />
              </FormGroup>
              
              <FormGroup>
                <label>Numéro TVA</label>
                <input type="text" defaultValue="FR12345678900" />
              </FormGroup>
              
              <FormGroup>
                <label>Disponibilité</label>
                <select defaultValue="available">
                  <option value="available">Disponible pour de nouvelles missions</option>
                  <option value="limited">Disponibilité limitée</option>
                  <option value="unavailable">Indisponible</option>
                </select>
              </FormGroup>
              
              <Button>Enregistrer les modifications</Button>
            </Card>
          </GridItem>
        </ProfileGrid>
      )}
      
      {activeTab === 'skills' && (
        <ProfileGrid>
          <GridItem span={6} tabletSpan={12}>
            <Card title="Compétences techniques">
              <SkillsList>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">GraphQL</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">AWS</Badge>
              </SkillsList>
              
              <SkillInput>
                <input type="text" placeholder="Ajouter une compétence..." />
                <Button>Ajouter</Button>
              </SkillInput>
            </Card>
            
            <Card title="Langues" className="mt-4">
              <FormGroup>
                <label>Français</label>
                <select defaultValue="native">
                  <option value="native">Langue maternelle</option>
                  <option value="fluent">Courant</option>
                  <option value="advanced">Avancé</option>
                  <option value="intermediate">Intermédiaire</option>
                  <option value="beginner">Débutant</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label>Anglais</label>
                <select defaultValue="fluent">
                  <option value="native">Langue maternelle</option>
                  <option value="fluent">Courant</option>
                  <option value="advanced">Avancé</option>
                  <option value="intermediate">Intermédiaire</option>
                  <option value="beginner">Débutant</option>
                </select>
              </FormGroup>
              
              <Button variant="outline" size="small">
                Ajouter une langue
              </Button>
            </Card>
          </GridItem>
          
          <GridItem span={6} tabletSpan={12}>
            <Card title="Expérience professionnelle">
              <FormGroup>
                <label>Années d'expérience</label>
                <select defaultValue="5-10">
                  <option value="0-2">0-2 ans</option>
                  <option value="3-5">3-5 ans</option>
                  <option value="5-10">5-10 ans</option>
                  <option value="10+">Plus de 10 ans</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label>Expérience en freelance</label>
                <select defaultValue="3-5">
                  <option value="0-2">0-2 ans</option>
                  <option value="3-5">3-5 ans</option>
                  <option value="5-10">5-10 ans</option>
                  <option value="10+">Plus de 10 ans</option>
                </select>
              </FormGroup>
              
              <FormGroup>
                <label>Secteurs d'activité</label>
                <SkillsList>
                  <Badge variant="secondary">Fintech</Badge>
                  <Badge variant="secondary">E-commerce</Badge>
                  <Badge variant="secondary">SaaS</Badge>
                  <Badge variant="secondary">Santé</Badge>
                </SkillsList>
                
                <SkillInput>
                  <input type="text" placeholder="Ajouter un secteur..." />
                  <Button>Ajouter</Button>
                </SkillInput>
              </FormGroup>
              
              <FormGroup>
                <label>Taux journalier (€)</label>
                <input type="number" defaultValue="550" />
                <p className="hint">Ce taux sera visible uniquement pour les clients qui vous contactent.</p>
              </FormGroup>
              
              <Button>Enregistrer les modifications</Button>
            </Card>
          </GridItem>
        </ProfileGrid>
      )}
      
      {activeTab === 'settings' && (
        <ProfileGrid>
          <GridItem span={6} tabletSpan={12}>
            <Card 
              title="Sécurité" 
              icon={<FiShield />}
            >
              <FormGroup>
                <label>Mot de passe actuel</label>
                <input type="password" placeholder="Entrez votre mot de passe actuel" />
              </FormGroup>
              
              <FormGroup>
                <label>Nouveau mot de passe</label>
                <input type="password" placeholder="Entrez un nouveau mot de passe" />
              </FormGroup>
              
              <FormGroup>
                <label>Confirmer le mot de passe</label>
                <input type="password" placeholder="Confirmez votre nouveau mot de passe" />
              </FormGroup>
              
              <Button>Mettre à jour le mot de passe</Button>
            </Card>
            
            <Card 
              title="Notifications" 
              className="mt-4"
            >
              <FormGroup>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ margin: 0 }}>Emails de nouvelles missions</h4>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#ccc' }}>Recevez des alertes pour les missions correspondant à votre profil</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ margin: 0 }}>Notifications de paiement</h4>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#ccc' }}>Soyez alerté lorsqu'un paiement est reçu ou en retard</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ margin: 0 }}>Actualités de la communauté</h4>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: '#ccc' }}>Recevez les dernières nouvelles et événements</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
              </FormGroup>
              
              <Button>Enregistrer les préférences</Button>
            </Card>
          </GridItem>
          
          <GridItem span={6} tabletSpan={12}>
            <Card 
              title="Informations de paiement" 
              icon={<FiCreditCard />}
            >
              <FormGroup>
                <label>Coordonnées bancaires</label>
                <input type="text" placeholder="IBAN" defaultValue="FR76 1234 5678 9012 3456 7890 123" />
              </FormGroup>
              
              <FormGroup>
                <label>Nom du titulaire</label>
                <input type="text" defaultValue="Jean Dupont" />
              </FormGroup>
              
              <FormGroup>
                <label>Nom de la banque</label>
                <input type="text" defaultValue="Banque Exemple" />
              </FormGroup>
              
              <FormGroup>
                <label>BIC/SWIFT</label>
                <input type="text" defaultValue="EXAMPLEFRXXX" />
              </FormGroup>
              
              <Button>Enregistrer les informations</Button>
            </Card>
            
            <Card 
              title="Documents légaux" 
              className="mt-4" 
              icon={<FiFileText />}
            >
              <div style={{ 
                padding: '1.5rem', 
                border: '2px dashed #2D2D2D', 
                borderRadius: '8px', 
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                <FiUpload style={{ fontSize: '2rem', color: '#ccc', marginBottom: '1rem' }} />
                <p style={{ margin: '0 0 1rem' }}>Déposez vos documents ici ou</p>
                <Button variant="outline" size="small">Parcourir les fichiers</Button>
              </div>
              
              <div>
                <h4>Documents téléchargés</h4>
                <ul style={{ padding: 0, listStyle: 'none' }}>
                  <li style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: '#2D2D2D',
                    borderRadius: '8px',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <FiFileText />
                      <span>Attestation fiscale 2023.pdf</span>
                    </div>
                    <Button variant="text" size="small" icon={<FiDownload />}></Button>
                  </li>
                  <li style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '0.75rem',
                    backgroundColor: '#2D2D2D',
                    borderRadius: '8px',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <FiFileText />
                      <span>Assurance RC Pro.pdf</span>
                    </div>
                    <Button variant="text" size="small" icon={<FiDownload />}></Button>
                  </li>
                </ul>
              </div>
            </Card>
          </GridItem>
        </ProfileGrid>
      )}
    </div>
  )
}

export default ProfilePage
