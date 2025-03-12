import React, { useState } from 'react'
import styled from 'styled-components'
import { FiPlus, FiTrash2, FiInfo, FiDollarSign, FiBriefcase, FiUsers } from 'react-icons/fi'
import Button from '../ui/Button'

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FormSection = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .hint {
    font-size: 0.8rem;
    color: #ccc;
    margin-top: 0.5rem;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 0.9rem;
  transition: ${props => props.theme.transitions.normal};
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 0.9rem;
  transition: ${props => props.theme.transitions.normal};
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  color: ${props => props.theme.colors.white};
  font-size: 0.9rem;
  transition: ${props => props.theme.transitions.normal};
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`

const InfoBox = styled.div`
  background-color: rgba(255, 107, 0, 0.1);
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`

const CooptationLevelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const CooptationLevel = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 1.25rem;
  position: relative;
  
  .level-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
    h4 {
      font-size: 1rem;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    button {
      background: none;
      border: none;
      color: ${props => props.theme.colors.error};
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 4px;
      
      &:hover {
        background-color: rgba(244, 67, 54, 0.1);
      }
    }
  }
  
  .level-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
    }
  }
`

const AddLevelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: rgba(255, 107, 0, 0.1);
  color: ${props => props.theme.colors.primary};
  border: 1px dashed ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  transition: ${props => props.theme.transitions.normal};
  
  &:hover {
    background-color: rgba(255, 107, 0, 0.2);
  }
`

const SummaryBox = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  
  h4 {
    font-size: 1rem;
    margin: 0 0 1rem;
  }
  
  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    
    .summary-item {
      h5 {
        font-size: 0.85rem;
        color: #ccc;
        margin: 0 0 0.25rem;
      }
      
      p {
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
        
        &.highlight {
          color: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`

const MissionCooptationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    description: '',
    initialRate: 600,
    duration: 30,
    startDate: '',
    skills: '',
    cooptationLevels: [
      { id: 1, name: '', role: 'Apporteur d\'affaires', percentage: 15 },
    ]
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleLevelChange = (id, field, value) => {
    setFormData({
      ...formData,
      cooptationLevels: formData.cooptationLevels.map(level => 
        level.id === id ? { ...level, [field]: value } : level
      )
    })
  }
  
  const addCooptationLevel = () => {
    const newId = Math.max(0, ...formData.cooptationLevels.map(l => l.id)) + 1
    setFormData({
      ...formData,
      cooptationLevels: [
        ...formData.cooptationLevels,
        { id: newId, name: '', role: 'Coopteur niveau ' + formData.cooptationLevels.length, percentage: 5 }
      ]
    })
  }
  
  const removeCooptationLevel = (id) => {
    setFormData({
      ...formData,
      cooptationLevels: formData.cooptationLevels.filter(level => level.id !== id)
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData)
  }
  
  // Calcul des valeurs pour le récapitulatif
  const initialRate = parseFloat(formData.initialRate) || 0
  const duration = parseFloat(formData.duration) || 0
  const totalValue = initialRate * duration
  
  // Calcul du total des pourcentages de cooptation
  const totalCooptationPercentage = formData.cooptationLevels.reduce(
    (sum, level) => sum + (parseFloat(level.percentage) || 0), 
    0
  )
  
  // Calcul du montant total de cooptation
  const totalCooptationAmount = (initialRate * totalCooptationPercentage / 100) * duration
  
  // Calcul du TJM final
  const finalRate = initialRate * (1 - totalCooptationPercentage / 100)
  
  return (
    <FormContainer>
      <InfoBox>
        <FiInfo />
        <p>
          Créez une mission avec un système de cooptation multi-niveaux. Définissez les pourcentages pour chaque niveau
          de cooptation et invitez des freelances à participer. La transparence est une valeur clé de notre communauté,
          tous les membres pourront voir les détails de cette mission et sa structure de cooptation.
        </p>
      </InfoBox>
      
      <form onSubmit={handleSubmit}>
        <FormSection>
          <h3>
            <FiBriefcase />
            Détails de la mission
          </h3>
          <FormGrid>
            <FormGroup>
              <label htmlFor="title">Titre de la mission</label>
              <Input 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title}
                onChange={handleChange}
                placeholder="Ex: Développement API REST"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="client">Client</label>
              <Input 
                type="text" 
                id="client" 
                name="client" 
                value={formData.client}
                onChange={handleChange}
                placeholder="Nom du client"
                required
              />
            </FormGroup>
            
            <FormGroup style={{ gridColumn: 'span 2' }}>
              <label htmlFor="description">Description</label>
              <Textarea 
                id="description" 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                placeholder="Décrivez la mission en détail..."
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="initialRate">TJM initial (€)</label>
              <Input 
                type="number" 
                id="initialRate" 
                name="initialRate" 
                value={formData.initialRate}
                onChange={handleChange}
                min="0"
                required
              />
              <div className="hint">Taux journalier proposé au client</div>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="duration">Durée (jours)</label>
              <Input 
                type="number" 
                id="duration" 
                name="duration" 
                value={formData.duration}
                onChange={handleChange}
                min="1"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="startDate">Date de début</label>
              <Input 
                type="date" 
                id="startDate" 
                name="startDate" 
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="skills">Compétences requises</label>
              <Input 
                type="text" 
                id="skills" 
                name="skills" 
                value={formData.skills}
                onChange={handleChange}
                placeholder="Ex: React, Node.js, API"
              />
              <div className="hint">Séparées par des virgules</div>
            </FormGroup>
          </FormGrid>
        </FormSection>
        
        <FormSection>
          <h3>
            <FiUsers />
            Structure de cooptation
          </h3>
          
          <CooptationLevelsList>
            {formData.cooptationLevels.map((level, index) => (
              <CooptationLevel key={level.id}>
                <div className="level-header">
                  <h4>
                    <FiDollarSign />
                    Niveau {index + 1}
                  </h4>
                  {formData.cooptationLevels.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => removeCooptationLevel(level.id)}
                    >
                      <FiTrash2 />
                    </button>
                  )}
                </div>
                
                <div className="level-grid">
                  <FormGroup>
                    <label>Nom du coopteur</label>
                    <Input 
                      type="text" 
                      value={level.name}
                      onChange={(e) => handleLevelChange(level.id, 'name', e.target.value)}
                      placeholder="Nom du freelance"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label>Rôle</label>
                    <Input 
                      type="text" 
                      value={level.role}
                      onChange={(e) => handleLevelChange(level.id, 'role', e.target.value)}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label>Pourcentage (%)</label>
                    <Input 
                      type="number" 
                      value={level.percentage}
                      onChange={(e) => handleLevelChange(level.id, 'percentage', e.target.value)}
                      min="0"
                      max="100"
                      required
                    />
                  </FormGroup>
                </div>
              </CooptationLevel>
            ))}
          </CooptationLevelsList>
          
          {formData.cooptationLevels.length < 3 && (
            <AddLevelButton type="button" onClick={addCooptationLevel}>
              <FiPlus />
              Ajouter un niveau de cooptation
            </AddLevelButton>
          )}
        </FormSection>
        
        <SummaryBox>
          <h4>Récapitulatif de la mission</h4>
          <div className="summary-grid">
            <div className="summary-item">
              <h5>TJM initial</h5>
              <p>{initialRate} €</p>
            </div>
            <div className="summary-item">
              <h5>TJM final freelance</h5>
              <p className="highlight">{finalRate.toFixed(2)} €</p>
            </div>
            <div className="summary-item">
              <h5>Durée</h5>
              <p>{duration} jours</p>
            </div>
            <div className="summary-item">
              <h5>Valeur totale</h5>
              <p>{totalValue} €</p>
            </div>
            <div className="summary-item">
              <h5>Total cooptation</h5>
              <p>{totalCooptationPercentage}% ({totalCooptationAmount} €)</p>
            </div>
            <div className="summary-item">
              <h5>Revenu freelance</h5>
              <p className="highlight">{totalValue - totalCooptationAmount} €</p>
            </div>
          </div>
        </SummaryBox>
        
        <ButtonGroup>
          <Button variant="secondary" type="button">
            Annuler
          </Button>
          <Button variant="primary" type="submit">
            Créer la mission
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  )
}

export default MissionCooptationForm
