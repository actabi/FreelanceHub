import React from 'react'
import styled from 'styled-components'
import { FiArrowRight, FiUsers, FiFileText, FiDollarSign, FiShield } from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    span {
      color: ${props => props.theme.colors.primary};
    }
  }
  
  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 2rem;
    color: #ccc;
  }
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
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

const StatsSection = styled.section`
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 4rem;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: #ccc;
  }
`

const CTASection = styled.section`
  text-align: center;
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 3rem 2rem;
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    max-width: 600px;
    margin: 0 auto 2rem;
    color: #ccc;
  }
`

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <h1>
          La plateforme qui <span>révolutionne</span> le freelancing
        </h1>
        <p>
          Collaborez, mutualisez vos compétences et simplifiez votre quotidien administratif pour accéder aux grands comptes comme une véritable ESN.
        </p>
        <Button size="large" icon={<FiArrowRight />}>
          Découvrir la plateforme
        </Button>
      </HeroSection>
      
      <h2>Pourquoi nous rejoindre ?</h2>
      
      <FeaturesGrid>
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
      </FeaturesGrid>
      
      <StatsSection>
        <h2 className="text-center mb-4">FreelanceHub en chiffres</h2>
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
      
      <CTASection>
        <h2>Prêt à transformer votre activité freelance ?</h2>
        <p>
          Rejoignez notre communauté de freelances et accédez à un écosystème complet pour développer votre activité sereinement.
        </p>
        <Button size="large" variant="primary">
          S'inscrire gratuitement
        </Button>
      </CTASection>
    </div>
  )
}

export default HomePage
