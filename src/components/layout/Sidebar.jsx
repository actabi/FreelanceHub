import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { 
  FiHome, 
  FiBriefcase, 
  FiShoppingBag, 
  FiUsers, 
  FiFileText, 
  FiDollarSign, 
  FiSettings, 
  FiHelpCircle,
  FiUserPlus
} from 'react-icons/fi'

const SidebarContainer = styled.aside`
  background-color: ${props => props.theme.colors.darkGrey};
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 2rem 0;
  overflow-y: auto;
  transition: ${props => props.theme.transitions.normal};
  z-index: 100;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    box-shadow: ${props => props.isOpen ? props.theme.shadows.medium : 'none'};
  }
`

const Logo = styled.div`
  padding: 0 1.5rem 2rem;
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
  }
`

const NavSection = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #999;
    padding: 0 1.5rem;
    margin-bottom: 0.5rem;
  }
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li`
  margin-bottom: 0.25rem;
  
  a {
    display: flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    transition: ${props => props.theme.transitions.fast};
    position: relative;
    
    svg {
      margin-right: 0.75rem;
      font-size: 1.25rem;
    }
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    &.active {
      color: ${props => props.theme.colors.primary};
      background-color: rgba(255, 107, 0, 0.1);
      
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: ${props => props.theme.colors.primary};
      }
    }
  }
`

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Logo>
        <img src="/src/assets/logo.svg" alt="FreelanceHub" />
      </Logo>
      
      <NavSection>
        <NavList>
          <NavItem>
            <NavLink to="/dashboard" onClick={() => toggleSidebar(false)}>
              <FiHome />
              Tableau de bord
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/missions" onClick={() => toggleSidebar(false)}>
              <FiBriefcase />
              Missions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/marketplace" onClick={() => toggleSidebar(false)}>
              <FiShoppingBag />
              Marketplace
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/community" onClick={() => toggleSidebar(false)}>
              <FiUsers />
              Communauté
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cooptation" onClick={() => toggleSidebar(false)}>
              <FiUserPlus />
              Cooptation
            </NavLink>
          </NavItem>
        </NavList>
      </NavSection>
      
      <NavSection>
        <h3>Gestion</h3>
        <NavList>
          <NavItem>
            <NavLink to="/contracts" onClick={() => toggleSidebar(false)}>
              <FiFileText />
              Contrats
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/finance" onClick={() => toggleSidebar(false)}>
              <FiDollarSign />
              Finances
            </NavLink>
          </NavItem>
        </NavList>
      </NavSection>
      
      <NavSection>
        <h3>Compte</h3>
        <NavList>
          <NavItem>
            <NavLink to="/profile" onClick={() => toggleSidebar(false)}>
              <FiSettings />
              Paramètres
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/help" onClick={() => toggleSidebar(false)}>
              <FiHelpCircle />
              Aide
            </NavLink>
          </NavItem>
        </NavList>
      </NavSection>
    </SidebarContainer>
  )
}

export default Sidebar
