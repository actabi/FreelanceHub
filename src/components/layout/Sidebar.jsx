import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { 
  FiHome, FiGrid, FiShoppingBag, FiUsers, FiBriefcase, 
  FiFileText, FiDollarSign, FiSettings, FiHelpCircle, FiX 
} from 'react-icons/fi'

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background-color: ${props => props.theme.colors.darkGrey};
  padding: 2rem 0;
  transition: ${props => props.theme.transitions.normal};
  z-index: 1000;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin: 0;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
`

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transitions.fast};
  
  svg {
    margin-right: 0.75rem;
    font-size: 1.25rem;
  }
  
  &:hover {
    background-color: rgba(255, 107, 0, 0.1);
    color: ${props => props.theme.colors.primary};
  }
  
  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`

const SectionTitle = styled.h3`
  font-size: 0.8rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  margin: 1.5rem 1rem 0.5rem;
  font-weight: 500;
`

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }
  
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={toggleSidebar}>
        <FiX />
      </CloseButton>
      
      <Logo>
        <h1>FreelanceHub</h1>
      </Logo>
      
      <NavMenu>
        <NavItem to="/" className={isActive('/')}>
          <FiHome /> Accueil
        </NavItem>
        
        <NavItem to="/dashboard" className={isActive('/dashboard')}>
          <FiGrid /> Tableau de bord
        </NavItem>
        
        <NavItem to="/marketplace" className={isActive('/marketplace')}>
          <FiShoppingBag /> Marketplace
        </NavItem>
        
        <NavItem to="/community" className={isActive('/community')}>
          <FiUsers /> Communauté
        </NavItem>
        
        <SectionTitle>Gestion</SectionTitle>
        
        <NavItem to="/missions" className={isActive('/missions')}>
          <FiBriefcase /> Missions
        </NavItem>
        
        <NavItem to="/contracts" className={isActive('/contracts')}>
          <FiFileText /> Contrats
        </NavItem>
        
        <NavItem to="/finance" className={isActive('/finance')}>
          <FiDollarSign /> Finances
        </NavItem>
        
        <SectionTitle>Compte</SectionTitle>
        
        <NavItem to="/profile" className={isActive('/profile')}>
          <FiSettings /> Profil
        </NavItem>
        
        <NavItem to="/help" className={isActive('/help')}>
          <FiHelpCircle /> Aide
        </NavItem>
      </NavMenu>
    </SidebarContainer>
  )
}

export default Sidebar
