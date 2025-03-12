import React, { useState } from 'react'
import styled from 'styled-components'
import { FiMail, FiPercent, FiDollarSign, FiInfo, FiUsers, FiLink } from 'react-icons/fi'
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

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  
  input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${props => props.theme.colors.lightGrey};
    border-radius: 50%;
    position: relative;
    
    &:checked {
      border-color: ${props => props.theme.colors.primary};
      
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 50%;
      }
    }
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

const CooptationPreview = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  
  h4 {
    font-size: 1rem;
    margin: 0 0 1rem;
  }
  
  .preview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    
    .preview-item {
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

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    mission: '',
    client: '',
    initialRate: 600,
    cooptationType: 'percentage',
    cooptationValue: 15,
    cooptationLevels: 2
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData)
  }
  
  // Calcul des valeurs pour la prévisualisation
  const initialRate = parseFloat(formData.initialRate) || 0
  const cooptationValue = parseFloat(formData.cooptationValue) || 0
  const isPercentage = formData.cooptationType === 'percentage'
  
  // Calcul du montant de cooptation
  const cooptationAmount = isPercentage 
    ? (initialRate * cooptationValue / 100)
    : cooptationValue
  
  // Calcul du TJM final
  const finalRate = initialRate - cooptationAmount
  
  return (
    <FormContainer>
      <InfoBox>
        <FiInfo />
        <p>
          Créez une cooptation pour inviter un freelance à rejoindre la plateforme ou pour lui proposer une mission.
          Vous pouvez définir votre commission sous forme de pourcentage du TJM ou d'un montant fixe.
          La transparence est une valeur clé de notre communauté, tous les membres pourront voir les détails de cette cooptation.
        </p>
      </InfoBox>
      
      <form onSubmit={handleSubmit}>
        <FormSection>
          <h3>
            <FiUsers />
            Informations du freelance
          </h3>
          <FormGrid>
            <FormGroup>
              <label htmlFor="email">Email du freelance</label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="email@exemple.com"
                required
              />
              <div className="hint">Une invitation sera envoyée à cette adresse</div>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="firstName">Prénom</label>
              <Input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Prénom du freelance"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="lastName">Nom</label>
              <Input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Nom du freelance"
                required
              />
            </FormGroup>
          </FormGrid>
        </FormSection>
        
        <FormSection>
          <h3>
            <FiLink />
            Détails de la mission
          </h3>
          <FormGrid>
            <FormGroup>
              <label htmlFor="mission">Titre de la mission</label>
              <Input 
                type="text" 
                id="mission" 
                name="mission" 
                value={formData.mission}
                onChange={handleChange}
                placeholder="Ex: Développement API REST"
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
          </FormGrid>
        </FormSection>
        
        <FormSection>
          <h3>
            <FiDollarSign />
            Paramètres de cooptation
          </h3>
          
          <FormGroup>
            <label>Type de commission</label>
            <RadioGroup>
              <RadioOption>
                <input 
                  type="radio" 
                  name="cooptationType" 
                  value="percentage" 
                  checked={formData.cooptationType === 'percentage'}
                  onChange={handleChange}
                />
                Pourcentage du TJM
              </RadioOption>
              <RadioOption>
                <input 
                  type="radio" 
                  name="cooptationType" 
                  value="fixed" 
                  checked={formData.cooptationType === 'fixed'}
                  onChange={handleChange}
                />
                Montant fixe
              </RadioOption>
            </RadioGroup>
          </FormGroup>
          
          <FormGrid>
            <FormGroup>
              <label htmlFor="cooptationValue">
                {formData.cooptationType === 'percentage' ? 'Pourcentage (%)' : 'Montant fixe (€)'}
              </label>
              <Input 
                type="number" 
                id="cooptationValue" 
                name="cooptationValue" 
                value={formData.cooptationValue}
                onChange={handleChange}
                min="0"
                max={formData.cooptationType === 'percentage' ? "100" : ""}
                required
              />
              <div className="hint">
                {formData.cooptationType === 'percentage' 
                  ? 'Pourcentage du TJM que vous recevrez' 
                  : 'Montant fixe que vous recevrez par jour'}
              </div>
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="cooptationLevels">Niveaux de cooptation</label>
              <Select 
                id="cooptationLevels" 
                name="cooptationLevels" 
                value={formData.cooptationLevels}
                onChange={handleChange}
              >
                <option value="1">1 niveau</option>
                <option value="2">2 niveaux</option>
                <option value="3">3 niveaux</option>
              </Select>
              <div className="hint">Nombre de niveaux dans la chaîne de cooptation</div>
            </FormGroup>
          </FormGrid>
        </FormSection>
        
        <CooptationPreview>
          <h4>Prévisualisation de la cooptation</h4>
          <div className="preview-grid">
            <div className="preview-item">
              <h5>TJM initial</h5>
              <p>{initialRate} €</p>
            </div>
            <div className="preview-item">
              <h5>Commission de cooptation</h5>
              <p className="highlight">
                {cooptationAmount} € 
                {isPercentage && ` (${cooptationValue}%)`}
              </p>
            </div>
            <div className="preview-item">
              <h5>TJM final freelance</h5>
              <p>{finalRate} €</p>
            </div>
            <div className="preview-item">
              <h5>Niveaux de cooptation</h5>
              <p>{formData.cooptationLevels}</p>
            </div>
          </div>
        </CooptationPreview>
        
        <ButtonGroup>
          <Button variant="secondary" type="button">
            Annuler
          </Button>
          <Button variant="primary" type="submit" icon={<FiMail />}>
            Envoyer l'invitation
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  )
}

export default ReferralForm
