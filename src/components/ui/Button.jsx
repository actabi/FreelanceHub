import React from 'react'
import styled, { css } from 'styled-components'

const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: ${props => props.theme.transitions.normal};
  gap: 0.5rem;
  
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  
  ${props => props.size === 'small' && css`
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  `}
  
  ${props => props.size === 'large' && css`
    padding: 1rem 2rem;
    font-size: 1rem;
  `}
  
  ${props => props.variant === 'primary' && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    
    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: ${props => props.theme.colors.lightGrey};
    color: ${props => props.theme.colors.white};
    
    &:hover {
      background-color: ${props => props.theme.colors.darkGrey};
    }
  `}
  
  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    
    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
    }
  `}
  
  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    padding: 0.5rem;
    
    &:hover {
      background-color: rgba(255, 107, 0, 0.1);
    }
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false, 
  icon, 
  ...props 
}) => {
  return (
    <ButtonBase 
      variant={variant} 
      size={size} 
      fullWidth={fullWidth} 
      {...props}
    >
      {icon && icon}
      {children}
    </ButtonBase>
  )
}

export default Button
