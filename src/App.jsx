import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import Layout from './components/layout/Layout'

// Pages
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import MissionsPage from './pages/MissionsPage'
import MarketplacePage from './pages/MarketplacePage'
import CommunityPage from './pages/CommunityPage'
import ContractsPage from './pages/ContractsPage'
import FinancePage from './pages/FinancePage'
import ProfilePage from './pages/ProfilePage'
import CooptationPage from './pages/CooptationPage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? (
                <LoginPage setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            } 
          />
          <Route 
            path="/register" 
            element={
              !isAuthenticated ? (
                <RegisterPage setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <Layout>
                  <DashboardPage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? (
                <Layout>
                  <DashboardPage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/missions" 
            element={
              isAuthenticated ? (
                <Layout>
                  <MissionsPage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/marketplace" 
            element={
              isAuthenticated ? (
                <Layout>
                  <MarketplacePage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/community" 
            element={
              isAuthenticated ? (
                <Layout>
                  <CommunityPage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/contracts" 
            element={
              isAuthenticated ? (
                <Layout>
                  <ContractsPage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/finance" 
            element={
              isAuthenticated ? (
                <Layout>
                  <FinancePage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/profile" 
            element={
              isAuthenticated ? (
                <Layout>
                  <ProfilePage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/cooptation" 
            element={
              isAuthenticated ? (
                <Layout>
                  <CooptationPage />
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
