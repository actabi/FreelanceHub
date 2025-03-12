import React from 'react'
import styled from 'styled-components'
import { FiPlus, FiFilter, FiFileText, FiCalendar, FiDollarSign, FiDownload, FiEye, FiEdit } from 'react-icons/fi'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: space-between;
  }
`

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.white};
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: ${props => props.theme.transitions.normal};
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.darkGrey};
  }
`

const ContractsTable = styled.div`
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.colors.lightGrey};
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr 1fr;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  align-items: center;
  transition: ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 1rem;
    
    &:before {
      content: '';
      height: 1px;
      background-color: ${props => props.theme.colors.lightGrey};
      margin-bottom: 0.5rem;
    }
  }
`

const ContractTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: rgba(255, 107, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      color: ${props => props.theme.colors.primary};
      font-size: 1.25rem;
    }
  }
  
  .info {
    h3 {
      font-size: 1rem;
      margin: 0 0 0.25rem;
    }
    
    p {
      font-size: 0.85rem;
      color: #ccc;
      margin: 0;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Contrat';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const ClientInfo = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Client';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const DateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Date';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const AmountInfo = styled.div`
  font-weight: 500;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Montant';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const StatusInfo = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    &:before {
      content: 'Statut';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: flex-start;
    margin-top: 0.5rem;
    
    &:before {
      content: 'Actions';
      font-size: 0.8rem;
      color: #999;
      display: block;
      margin-bottom: 0.25rem;
    }
  }
`

const ContractsPage = () => {
  return (
    <div>
      <PageHeader>
        <div>
          <h1>Contrats</h1>
          <p>Gérez vos contrats et documents légaux</p>
        </div>
        
        <Button variant="primary" icon={<FiPlus />}>
          Nouveau contrat
        </Button>
      </PageHeader>
      
      <FilterBar>
        <FilterButton active>Tous</FilterButton>
        <FilterButton>Signés</FilterButton>
        <FilterButton>En attente</FilterButton>
        <FilterButton>Brouillons</FilterButton>
        <FilterButton icon={<FiFilter />}>Filtres</FilterButton>
      </FilterBar>
      
      <ContractsTable>
        <TableHeader>
          <div>Contrat</div>
          <div>Client</div>
          <div>Date</div>
          <div>Montant</div>
          <div>Statut</div>
        </TableHeader>
        
        <TableRow>
          <ContractTitle>
            <div className="icon">
              <FiFileText />
            </div>
            <div className="info">
              <h3>Contrat de prestation UX/UI</h3>
              <p>Réf: CONT-2023-042</p>
            </div>
          </ContractTitle>
          
          <ClientInfo>TechCorp</ClientInfo>
          
          <DateInfo>
            <FiCalendar />
            <span>15/06/2023</span>
          </DateInfo>
          
          <AmountInfo>12 000 €</AmountInfo>
          
          <StatusInfo>
            <Badge variant="success">Signé</Badge>
            <ActionButtons>
              <Button variant="text" size="small" icon={<FiDownload />}></Button>
              <Button variant="text" size="small" icon={<FiEye />}></Button>
            </ActionButtons>
          </StatusInfo>
        </TableRow>
        
        <TableRow>
          <ContractTitle>
            <div className="icon">
              <FiFileText />
            </div>
            <div className="info">
              <h3>Contrat de développement API</h3>
              <p>Réf: CONT-2023-045</p>
            </div>
          </ContractTitle>
          
          <ClientInfo>FinTech Solutions</ClientInfo>
          
          <DateInfo>
            <FiCalendar />
            <span>01/06/2023</span>
          </DateInfo>
          
          <AmountInfo>18 000 €</AmountInfo>
          
          <StatusInfo>
            <Badge variant="success">Signé</Badge>
            <ActionButtons>
              <Button variant="text" size="small" icon={<FiDownload />}></Button>
              <Button variant="text" size="small" icon={<FiEye />}></Button>
            </ActionButtons>
          </StatusInfo>
        </TableRow>
        
        <TableRow>
          <ContractTitle>
            <div className="icon">
              <FiFileText />
            </div>
            <div className="info">
              <h3>Contrat d'audit sécurité</h3>
              <p>Réf: CONT-2023-048</p>
            </div>
          </ContractTitle>
          
          <ClientInfo>E-Commerce Plus</ClientInfo>
          
          <DateInfo>
            <FiCalendar />
            <span>05/07/2023</span>
          </DateInfo>
          
          <AmountInfo>5 000 €</AmountInfo>
          
          <StatusInfo>
            <Badge variant="warning">En attente</Badge>
            <ActionButtons>
              <Button variant="text" size="small" icon={<FiEdit />}></Button>
              <Button variant="text" size="small" icon={<FiEye />}></Button>
            </ActionButtons>
          </StatusInfo>
        </TableRow>
        
        <TableRow>
          <ContractTitle>
            <div className="icon">
              <FiFileText />
            </div>
            <div className="info">
              <h3>Contrat de formation React</h3>
              <p>Réf: CONT-2023-050</p>
            </div>
          </ContractTitle>
          
          <ClientInfo>Digital Academy</ClientInfo>
          
          <DateInfo>
            <FiCalendar />
            <span>10/07/2023</span>
          </DateInfo>
          
          <AmountInfo>3 500 €</AmountInfo>
          
          <StatusInfo>
            <Badge variant="error">Brouillon</Badge>
            <ActionButtons>
              <Button variant="text" size="small" icon={<FiEdit />}></Button>
              <Button variant="text" size="small" icon={<FiEye />}></Button>
            </ActionButtons>
          </StatusInfo>
        </TableRow>
        
        <TableRow>
          <ContractTitle>
            <div className="icon">
              <FiFileText />
            </div>
            <div className="info">
              <h3>Contrat de stratégie marketing</h3>
              <p>Réf: CONT-2023-038</p>
            </div>
          </ContractTitle>
          
          <ClientInfo>Smart Marketing</ClientInfo>
          
          <DateInfo>
            <FiCalendar />
            <span>15/04/2023</span>
          </DateInfo>
          
          <AmountInfo>8 000 €</AmountInfo>
          
          <StatusInfo>
            <Badge variant="info">Archivé</Badge>
            <ActionButtons>
              <Button variant="text" size="small" icon={<FiDownload />}></Button>
              <Button variant="text" size="small" icon={<FiEye />}></Button>
            </ActionButtons>
          </StatusInfo>
        </TableRow>
      </ContractsTable>
    </div>
  )
}

export default ContractsPage
