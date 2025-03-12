import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiArrowRight, FiUsers, FiFileText, FiDollarSign, FiShield, FiCheck, FiMenu, FiX, FiBriefcase, FiUserPlus, FiInfo } from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(18, 18, 23, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  
  span {
    margin-left: 0.5rem;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-right: 2rem;
  
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-weight: 500;
    transition: ${props => props.theme.transitions.normal};
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background-color: ${props => props.theme.colors.darkGrey};
  z-index: 200;
  padding: 2rem;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  
  .close-button {
    align-self: flex-end;
    background: none;
    color: ${props => props.theme.colors.white};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    font-weight: 500;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  button {
    margin-top: 1.5rem;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 150;
  display: ${props => props.isOpen ? 'block' : 'none'};
`

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 2rem;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    max-width: 800px;
    
    span {
      color: ${props => props.theme.colors.primary};
    }
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    max-width: 600px;
    margin-bottom: 2.5rem;
    color: #ccc;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
  
  .buttons {
    display: flex;
    gap: 1rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      flex-direction: column;
    }
  }
`

const AudienceToggle = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 50px;
  padding: 0.5rem;
  margin-bottom: 3rem;
  box-shadow: ${props => props.theme.shadows.small};
`

const AudienceButton = styled.button`
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.dark : props.theme.colors.white};
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.normal};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1.2rem;
  }
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  }
`

const Section = styled.section`
  padding: 5rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: center;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }
  
  p.section-intro {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 3rem;
    color: #ccc;
    font-size: 1.1rem;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const FeatureIcon = styled.div`
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

const StatsSection = styled(Section)`
  background-color: ${props => props.theme.colors.darkGrey};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #ccc;
  }
`

const PricingSection = styled(Section)`
  background-color: ${props => props.theme.colors.dark};
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const PricingCard = styled(Card)`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .price {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    
    span {
      font-size: 1rem;
      color: #ccc;
    }
  }
  
  .features {
    margin-bottom: 2rem;
    flex-grow: 1;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      
      svg {
        color: ${props => props.theme.colors.primary};
        margin-right: 0.75rem;
        flex-shrink: 0;
      }
    }
  }
`

const CTASection = styled(Section)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.dark};
  text-align: center;
  
  h2 {
    color: ${props => props.theme.colors.dark};
  }
  
  p {
    color: rgba(0, 0, 0, 0.7);
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
  }
`

const CooptationSection = styled(Section)`
  background-color: ${props => props.theme.colors.darkGrey};
  text-align: center;
  
  .cooptation-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cooptation-steps {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 3rem 0;
    
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      flex-direction: row;
    }
  }
  
  .cooptation-step {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    .step-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.dark};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
    
    p {
      color: #ccc;
      font-size: 0.9rem;
    }
  }
`

const InfoBox = styled.div`
  background-color: rgba(255, 107, 0, 0.1);
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-align: left;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
  }
`

const BusinessModelSection = styled(Section)`
  background-color: ${props => props.theme.colors.darkGrey};
  
  .model-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .model-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .model-card {
    text-align: center;
    padding: 2rem;
    
    h3 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: ${props => props.theme.colors.primary};
    }
    
    p {
      color: #ccc;
      margin-bottom: 1.5rem;
    }
    
    .model-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: rgba(255, 107, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      
      svg {
        font-size: 2.5rem;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`

const CommissionTable = styled.div`
  background-color: ${props => props.theme.colors.dark};
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  overflow-x: auto;
  
  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    th {
      font-weight: 600;
      color: ${props => props.theme.colors.primary};
    }
    
    tr:last-child td {
      border-bottom: none;
    }
  }
`

const Footer = styled.footer`
  background-color: ${props => props.theme.colors.darkGrey};
  padding: 4rem 2rem 2rem;
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 3rem;
  }
  
  .footer-column {
    h4 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: ${props => props.theme.colors.white};
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        margin-bottom: 0.75rem;
        
        a {
          color: #ccc;
          text-decoration: none;
          transition: ${props => props.theme.transitions.normal};
          
          &:hover {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #ccc;
    font-size: 0.9rem;
  }
`

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [audience, setAudience] = useState('freelance') // 'freelance' ou 'client'
  
  return (
    <HomeContainer>
      <Header>
        <Logo>
          <span>FreelanceHub</span>
        </Logo>
        
        <Nav>
          <NavLinks>
            <a href="#features">Fonctionnalités</a>
            <a href="#how-it-works">Comment ça marche</a>
            <a href="#business-model">Notre modèle</a>
            <a href="#contact">Contact</a>
          </NavLinks>
          
          <Link to="/login">
            <Button variant="secondary">Se connecter</Button>
          </Link>
        </Nav>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <FiMenu />
        </MobileMenuButton>
      </Header>
      
      <Overlay isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <button className="close-button" onClick={() => setMobileMenuOpen(false)}>
          <FiX />
        </button>
        
        <a href="#features" onClick={() => setMobileMenuOpen(false)}>Fonctionnalités</a>
        <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>Comment ça marche</a>
        <a href="#business-model" onClick={() => setMobileMenuOpen(false)}>Notre modèle</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        
        <Link to="/login">
          <Button variant="primary" fullWidth onClick={() => setMobileMenuOpen(false)}>
            Se connecter
          </Button>
        </Link>
      </MobileMenu>
      
      <HeroSection>
        <AudienceToggle>
          <AudienceButton 
            active={audience === 'freelance'} 
            onClick={() => setAudience('freelance')}
          >
            <FiUsers /> Freelance
          </AudienceButton>
          <AudienceButton 
            active={audience === 'client'} 
            onClick={() => setAudience('client')}
          >
            <FiBriefcase /> Client
          </AudienceButton>
        </AudienceToggle>
        
        {audience === 'freelance' ? (
          <>
            <h1>
              La plateforme qui <span>révolutionne</span> le freelancing
            </h1>
            <p>
              Collaborez, mutualisez vos compétences et simplifiez votre quotidien administratif pour accéder aux grands comptes comme une véritable ESN.
            </p>
            <InfoBox>
              <FiInfo />
              <p>
                <strong>FreelanceHub fonctionne sur invitation uniquement.</strong> Pour rejoindre notre communauté de freelances, vous devez être coopté par un membre existant. Cette approche garantit la qualité de notre réseau et favorise la collaboration entre professionnels.
              </p>
            </InfoBox>
            <div className="buttons">
              <Link to="/login">
                <Button size="large" variant="primary">
                  Se connecter
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="large" variant="secondary">
                  Comment rejoindre
                </Button>
              </a>
            </div>
          </>
        ) : (
          <>
            <h1>
              Accédez à un <span>réseau d'élite</span> de freelances qualifiés
            </h1>
            <p>
              Publiez vos missions et trouvez les meilleurs talents indépendants, pré-qualifiés et organisés en collectifs pour répondre à tous vos besoins.
            </p>
            <div className="buttons">
              <Link to="/login">
                <Button size="large" variant="primary">
                  Publier une mission
                </Button>
              </Link>
              <a href="#features">
                <Button size="large" variant="secondary">
                  Découvrir nos services
                </Button>
              </a>
            </div>
          </>
        )}
      </HeroSection>
      
      <Section id="features">
        <h2>{audience === 'freelance' ? 'Pourquoi nous rejoindre ?' : 'Nos avantages pour les entreprises'}</h2>
        <p className="section-intro">
          {audience === 'freelance' 
            ? 'FreelanceHub vous offre tous les outils nécessaires pour développer votre activité de freelance et accéder à des opportunités plus ambitieuses.'
            : 'Simplifiez votre processus de recrutement et accédez à des équipes complètes de freelances qualifiés pour tous vos projets.'}
        </p>
        
        <FeaturesGrid>
          {audience === 'freelance' ? (
            <>
              <Card hoverable>
                <FeatureIcon>
                  <FiUsers />
                </FeatureIcon>
                <h3>Collaborez efficacement</h3>
                <p>
                  Créez des collectifs de freelances pour proposer des prestations complètes et accéder à des missions plus ambitieuses.
                </p>
              </Card>
              
              <Card hoverable>
                <FeatureIcon>
                  <FiFileText />
                </FeatureIcon>
                <h3>Simplifiez votre administratif</h3>
                <p>
                  Automatisez vos contrats, factures et déclarations pour vous concentrer sur votre cœur de métier.
                </p>
              </Card>
              
              <Card hoverable>
                <FeatureIcon>
                  <FiDollarSign />
                </FeatureIcon>
                <h3>Sécurisez vos revenus</h3>
                <p>
                  Bénéficiez d'avances de trésorerie, de garanties contre les impayés et d'une mutuelle adaptée aux indépendants.
                </p>
              </Card>
              
              <Card hoverable>
                <FeatureIcon>
                  <FiShield />
                </FeatureIcon>
                <h3>Rassurez vos clients</h3>
                <p>
                  Offrez un cadre structuré et sécurisé qui inspire confiance aux grands comptes et facilite leur décision.
                </p>
              </Card>
            </>
          ) : (
            <>
              <Card hoverable>
                <FeatureIcon>
                  <FiUsers />
                </FeatureIcon>
                <h3>Talents pré-qualifiés</h3>
                <p>
                  Accédez à un réseau de freelances sélectionnés par cooptation, garantissant expertise et professionnalisme.
                </p>
              </Card>
              
              <Card hoverable>
                <FeatureIcon>
                  <FiBriefcase />
                </FeatureIcon>
                <h3>Équipes complètes</h3>
                <p>
                  Recrutez des collectifs entiers pour vos projets, avec un interlocuteur unique et une facturation simplifiée.
                </p>
              </Card>
              
              <Card hoverable>
                <FeatureIcon>
                  <FiFileText />
                </FeatureIcon>
                <h3>Gestion administrative allégée</h3>
                <p>
                  Simplifiez vos processus avec des contrats standardisés et une facturation centralisée pour tous vos freelances.
                </p>
              </Card>
              
              <Card hoverable>
                <FeatureIcon>
                  <FiShield />
                </FeatureIcon>
                <h3>Sécurité juridique</h3>
                <p>
                  Évitez les risques de requalification grâce à notre cadre contractuel sécurisé et conforme à la législation.
                </p>
              </Card>
            </>
          )}
        </FeaturesGrid>
      </Section>
      
      <CooptationSection id="how-it-works">
        <div className="cooptation-content">
          <h2>Comment ça fonctionne</h2>
          <p className="section-intro">
            {audience === 'freelance' 
              ? 'FreelanceHub est une communauté sélective de freelances qui fonctionne sur le principe de la cooptation pour garantir la qualité de son réseau.'
              : 'Publiez vos missions en quelques clics et accédez à notre réseau de freelances qualifiés.'}
          </p>
          
          {audience === 'freelance' ? (
            <div className="cooptation-steps">
              <div className="cooptation-step">
                <div className="step-number">1</div>
                <h3>Invitation</h3>
                <p>Recevez une invitation d'un freelance déjà membre de la plateforme</p>
              </div>
              <div className="cooptation-step">
                <div className="step-number">2</div>
                <h3>Inscription</h3>
                <p>Créez votre profil et complétez vos informations professionnelles</p>
              </div>
              <div className="cooptation-step">
                <div className="step-number">3</div>
                <h3>Validation</h3>
                <p>Votre profil est validé et vous accédez à toutes les fonctionnalités</p>
              </div>
            </div>
          ) : (
            <div className="cooptation-steps">
              <div className="cooptation-step">
                <div className="step-number">1</div>
                <h3>Publication</h3>
                <p>Créez et publiez votre offre de mission en quelques minutes</p>
              </div>
              <div className="cooptation-step">
                <div className="step-number">2</div>
                <h3>Sélection</h3>
                <p>Recevez des propositions de freelances ou de collectifs qualifiés</p>
              </div>
              <div className="cooptation-step">
                <div className="step-number">3</div>
                <h3>Collaboration</h3>
                <p>Démarrez votre projet avec un cadre contractuel sécurisé</p>
              </div>
            </div>
          )}
          
          {audience === 'freelance' && (
            <InfoBox>
              <FiInfo />
              <p>
                Vous n'avez pas encore d'invitation ? Contactez-nous pour nous présenter votre profil et vos compétences. Si votre profil correspond aux besoins de notre communauté, nous pourrons vous mettre en relation avec un membre susceptible de vous coopter.
              </p>
            </InfoBox>
          )}
          
          <Link to={audience === 'freelance' ? '/login' : '/login'}>
            <Button size="large" variant="primary">
              {audience === 'freelance' ? 'Se connecter' : 'Publier une mission'}
            </Button>
          </Link>
        </div>
      </CooptationSection>
      
      <BusinessModelSection id="business-model">
        <div className="model-content">
          <h2>Notre modèle économique</h2>
          <p className="section-intro">
            {audience === 'freelance' 
              ? 'FreelanceHub est entièrement gratuit pour les freelances. Notre modèle repose sur une commission prélevée uniquement auprès des clients.'
              : 'Nous prélevons une commission transparente sur les missions, sans frais cachés ni engagement de durée.'}
          </p>
          
          {audience === 'freelance' ? (
            <Card>
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>100% gratuit pour les freelances</h3>
              <p>
                Contrairement à la plupart des plateformes, FreelanceHub ne facture aucun abonnement ni commission aux freelances. Vous conservez 100% de vos revenus.
              </p>
              <p>
                Notre modèle économique repose uniquement sur une commission prélevée auprès des clients, ce qui nous permet de vous offrir tous nos services sans frais.
              </p>
              <p>
                À l'avenir, nous proposerons des services optionnels d'accompagnement juridique, financier et comptable, mais l'accès à la plateforme et à ses fonctionnalités de base restera toujours gratuit pour les freelances.
              </p>
            </Card>
          ) : (
            <>
              <CommissionTable>
                <table>
                  <thead>
                    <tr>
                      <th>Type de mission</th>
                      <th>Commission</th>
                      <th>Détails</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mission standard</td>
                      <td>8%</td>
                      <td>Missions individuelles avec un seul freelance</td>
                    </tr>
                    <tr>
                      <td>Mission collective</td>
                      <td>10%</td>
                      <td>Missions réalisées par un collectif de freelances</td>
                    </tr>
                    <tr>
                      <td>Grand compte</td>
                      <td>Sur mesure</td>
                      <td>Tarification adaptée au volume de missions</td>
                    </tr>
                  </tbody>
                </table>
              </CommissionTable>
              
              <InfoBox>
                <FiInfo />
                <p>
                  <strong>Transparence totale.</strong> Notre commission est clairement indiquée avant la validation de chaque mission. Aucun frais caché ni engagement de durée. Vous ne payez que lorsque vous trouvez le bon talent.
                </p>
              </InfoBox>
            </>
          )}
        </div>
      </BusinessModelSection>
      
      <StatsSection>
        <h2>FreelanceHub en chiffres</h2>
        <StatsGrid>
          <StatItem>
            <h3>2500+</h3>
            <p>Freelances actifs</p>
          </StatItem>
          
          <StatItem>
            <h3>350+</h3>
            <p>Entreprises clientes</p>
          </StatItem>
          
          <StatItem>
            <h3>1200+</h3>
            <p>Missions réalisées</p>
          </StatItem>
          
          <StatItem>
            <h3>98%</h3>
            <p>Taux de satisfaction</p>
          </StatItem>
        </StatsGrid>
      </StatsSection>
      
      {audience === 'client' && (
        <PricingSection id="pricing">
          <h2>Nos offres pour les entreprises</h2>
          <p className="section-intro">
            Des solutions adaptées à tous les types de projets et d'organisations.
          </p>
          
          <PricingGrid>
            <PricingCard>
              <h3>Essentiel</h3>
              <div className="price">
                0€ <span>+ commission</span>
              </div>
              <ul className="features">
                <li><FiCheck /> Publication limitée à 3 missions actives</li>
                <li><FiCheck /> Accès au réseau de freelances</li>
                <li><FiCheck /> Contrats standards</li>
                <li><FiCheck /> Support par email</li>
                <li><FiCheck /> Commission de 8% par mission</li>
              </ul>
              <Link to="/login">
                <Button fullWidth>Commencer gratuitement</Button>
              </Link>
            </PricingCard>
            
            <PricingCard>
              <h3>Business</h3>
              <div className="price">
                299€ <span>/ mois</span>
              </div>
              <ul className="features">
                <li><FiCheck /> Publication illimitée de missions</li>
                <li><FiCheck /> Accès prioritaire aux meilleurs profils</li>
                <li><FiCheck /> Contrats personnalisés</li>
                <li><FiCheck /> Support dédié par téléphone</li>
                <li><FiCheck /> Commission réduite à 6%</li>
                <li><FiCheck /> Tableau de bord analytique</li>
              </ul>
              <Link to="/login">
                <Button variant="primary" fullWidth>Essayer 14 jours</Button>
              </Link>
            </PricingCard>
            
            <PricingCard>
              <h3>Entreprise</h3>
              <div className="price">
                Sur mesure
              </div>
              <ul className="features">
                <li><FiCheck /> Tout ce qui est inclus dans Business</li>
                <li><FiCheck /> Intégration à vos outils internes</li>
                <li><FiCheck /> Équipe dédiée de recrutement</li>
                <li><FiCheck /> Reporting personnalisé</li>
                <li><FiCheck /> Accompagnement stratégique</li>
                <li><FiCheck /> Tarification adaptée à vos besoins</li>
              </ul>
              <Link to="/login">
                <Button variant="secondary" fullWidth>Demander un devis</Button>
              </Link>
            </PricingCard>
          </PricingGrid>
          
          <InfoBox style={{ marginTop: '3rem' }}>
            <FiInfo />
            <p>
              <strong>Qu'est-ce qu'une "mission active" ?</strong> Une mission est considérée comme active tant qu'elle est publiée sur la plateforme ou qu'un contrat lié à cette mission est en cours d'exécution. L'offre Essentiel vous permet de gérer jusqu'à 3 missions simultanément, tandis que l'offre Business vous permet de publier et gérer un nombre illimité de missions.
            </p>
          </InfoBox>
        </PricingSection>
      )}
      
      <CTASection>
        <h2>
          {audience === 'freelance' 
            ? 'Prêt à transformer votre activité freelance ?' 
            : 'Prêt à trouver les meilleurs talents pour vos projets ?'}
        </h2>
        <p>
          {audience === 'freelance'
            ? 'Demandez à un membre de vous coopter pour rejoindre notre communauté de freelances et accéder à un écosystème complet.'
            : 'Publiez votre première mission gratuitement et découvrez la puissance de notre réseau de freelances qualifiés.'}
        </p>
        <Link to="/login">
          <Button size="large" variant="dark">
            {audience === 'freelance' ? 'Se connecter' : 'Publier une mission'}
          </Button>
        </Link>
      </CTASection>
      
      <Footer>
        <div className="footer-content">
          <div className="footer-column">
            <h4>FreelanceHub</h4>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#team">Notre équipe</a></li>
              <li><a href="#careers">Carrières</a></li>
              <li><a href="#press">Presse</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Produit</h4>
            <ul>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#business-model">Notre modèle</a></li>
              <li><a href="#testimonials">Témoignages</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Ressources</h4>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#webinars">Webinaires</a></li>
              <li><a href="#events">Événements</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#help">Centre d'aide</a></li>
              <li><a href="#status">Statut du service</a></li>
              <li><a href="#community">Communauté</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 FreelanceHub. Tous droits réservés.</p>
        </div>
      </Footer>
    </HomeContainer>
  )
}

export default HomePage
