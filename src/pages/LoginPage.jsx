import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FiMail, FiLock, FiUser, FiGithub, FiLinkedin } from 'react-icons/fi'
import Button from '../components/ui/Button'

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${props => props.theme.colors.dark};
`

const LoginCard = styled.div`
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

const ForgotPassword = styled.div`
  text-align: right;
  
  a {
    color: ${props => props.theme.colors.primary};
    font-size: 0.9rem;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
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

const SignupLink = styled.div`
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

const LoginPage = ({ setIsAuthenticated }) => {
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simuler une connexion réussie
    setIsAuthenticated(true)
    navigate('/dashboard')
  }
  
  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <h1>FreelanceHub</h1>
          <p>La plateforme collaborative pour freelances</p>
        </Logo>
        
        <Form onSubmit={handleSubmit}>
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
              <input type="password" placeholder="Votre mot de passe" required />
            </InputGroup>
          </FormGroup>
          
          <ForgotPassword>
            <a href="#">Mot de passe oublié ?</a>
          </ForgotPassword>
          
          <Button type="submit" fullWidth size="large">
            Se connecter
          </Button>
        </Form>
        
        <Divider>
          <span>ou continuer avec</span>
        </Divider>
        
        <SocialButtons>
          <Button variant="secondary" icon={<FiGithub />}>
            GitHub
          </Button>
          <Button variant="secondary" icon={<FiLinkedin />}>
            LinkedIn
          </Button>
        </SocialButtons>
        
        <SignupLink>
          Pas encore de compte ? <Link to="/register">S'inscrire</Link>
        </SignupLink>
      </LoginCard>
    </LoginContainer>
  )
}

export default LoginPage
