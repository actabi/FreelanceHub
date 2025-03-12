import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FiMail, FiLock, FiUser, FiGithub, FiLinkedin } from 'react-icons/fi'
import Button from '../components/ui/Button'

const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${props => props.theme.colors.dark};
`

const RegisterCard = styled.div`
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 2.5rem;
  width: 100%;
  max-width: 480px;
  box-shadow: ${props => props.theme.shadows.medium};
`

const Logo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin: 0;
  }
  
  p {
    color: #ccc;
    margin-top: 0.5rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
`

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 0 1rem;
  
  svg {
    color: ${props => props.theme.colors.white};
    margin-right: 0.75rem;
  }
  
  input {
    flex: 1;
    background: none;
    border: none;
    color: ${props => props.theme.colors.white};
    padding: 0.75rem 0;
    outline: none;
    font-size: 0.9rem;
  }
`

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  input {
    width: 18px;
    height: 18px;
    accent-color: ${props => props.theme.colors.primary};
  }
  
  label {
    font-size: 0.9rem;
    color: #ccc;
    
    a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &:before, &:after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${props => props.theme.colors.lightGrey};
  }
  
  span {
    padding: 0 1rem;
    color: #ccc;
    font-size: 0.9rem;
  }
`

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  button {
    flex: 1;
  }
`

const LoginLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #ccc;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const RegisterPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simuler une inscription réussie
    setIsAuthenticated(true)
    navigate('/dashboard')
  }
  
  return (
    <RegisterContainer>
      <RegisterCard>
        <Logo>
          <h1>FreelanceHub</h1>
          <p>Rejoignez la communauté des freelances</p>
        </Logo>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nom complet</Label>
            <InputGroup>
              <FiUser />
              <input type="text" placeholder="Votre nom complet" required />
            </InputGroup>
          </FormGroup>
          
          <FormGroup>
            <Label>Email</Label>
            <InputGroup>
              <FiMail />
              <input type="email" placeholder="votre@email.com" required />
            </InputGroup>
          </FormGroup>
          
          <FormGroup>
            <Label>Mot de passe</Label>
            <InputGroup>
              <FiLock />
              <input type="password" placeholder="Créez un mot de passe" required />
            </InputGroup>
          </FormGroup>
          
          <Checkbox>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a>
            </label>
          </Checkbox>
          
          <Button type="submit" fullWidth size="large">
            Créer un compte
          </Button>
        </Form>
        
        <Divider>
          <span>ou s'inscrire avec</span>
        </Divider>
        
        <SocialButtons>
          <Button variant="secondary" icon={<FiGithub />}>
            GitHub
          </Button>
          <Button variant="secondary" icon={<FiLinkedin />}>
            LinkedIn
          </Button>
        </SocialButtons>
        
        <LoginLink>
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </LoginLink>
      </RegisterCard>
    </RegisterContainer>
  )
}

export default RegisterPage
