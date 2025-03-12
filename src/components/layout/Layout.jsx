import React from 'react'
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

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true)

  return (
    <LayoutContainer>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <MainContent>
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        {children}
      </MainContent>
    </LayoutContainer>
  )
}

export default Layout
