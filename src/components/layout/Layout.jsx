import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: 250px;
  transition: ${props => props.theme.transitions.normal};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 0;
    padding: 1rem;
  }
`

const Layout = ({ isAuthenticated }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)

  // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <LayoutContainer>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <MainContent>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Outlet />
      </MainContent>
    </LayoutContainer>
  )
}

export default Layout
