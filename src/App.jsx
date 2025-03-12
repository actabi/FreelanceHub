import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import MarketplacePage from './pages/MarketplacePage'
import ProfilePage from './pages/ProfilePage'
import CommunityPage from './pages/CommunityPage'
import MissionsPage from './pages/MissionsPage'
import ContractsPage from './pages/ContractsPage'
import FinancePage from './pages/FinancePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  // Simuler un état d'authentification
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<RegisterPage setIsAuthenticated={setIsAuthenticated} />} />
        
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="missions" element={<MissionsPage />} />
          <Route path="contracts" element={<ContractsPage />} />
          <Route path="finance" element={<FinancePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
