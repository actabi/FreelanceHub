import React from 'react'
import styled from 'styled-components'
import { FiMenu, FiBell, FiMessageSquare, FiSearch, FiUser } from 'react-icons/fi'

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
`

const MenuButton = styled.button`
  background: none;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  width: 100%;
  max-width: 400px;
  
  input {
    background: none;
    border: none;
    color: ${props => props.theme.colors.white};
    margin-left: 0.5rem;
    width: 100%;
    outline: none;
    font-size: 0.9rem;
  }
`

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const IconButton = styled.button`
  background: none;
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  position: relative;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 0.7rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  color: ${props => props.theme.colors.white};
  
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavbarContainer>
      <MenuButton onClick={toggleSidebar}>
        <FiMenu />
      </MenuButton>
      
      <SearchBar>
        <FiSearch />
        <input type="text" placeholder="Rechercher..." />
      </SearchBar>
      
      <NavActions>
        <IconButton>
          <FiBell />
          <NotificationBadge>3</NotificationBadge>
        </IconButton>
        
        <IconButton>
          <FiMessageSquare />
          <NotificationBadge>5</NotificationBadge>
        </IconButton>
        
        <ProfileButton>
          <div className="avatar">
            <FiUser />
          </div>
        </ProfileButton>
      </NavActions>
    </NavbarContainer>
  )
}

export default Navbar
