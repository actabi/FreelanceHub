import React from 'react'
import styled, { css } from 'styled-components'

const BadgeContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => props.variant === 'primary' && css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  `}
  
  ${props => props.variant === 'secondary' && css`
    background-color: ${props => props.theme.colors.lightGrey};
    color: ${props => props.theme.colors.white};
  `}
  
  ${props => props.variant === 'success' && css`
    background-color: ${props => props.theme.colors.success};
    color: ${props => props.theme.colors.white};
  `}
  
  ${props => props.variant === 'warning' && css`
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.dark};
  `}
  
  ${props => props.variant === 'error' && css`
    background-color: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.white};
  `}
  
  ${props => props.variant === 'info' && css`
    background-color: ${props => props.theme.colors.info};
    color: ${props => props.theme.colors.white};
  `}
  
  ${props => props.outline && css`
    background-color: transparent;
    border: 1px solid ${props => {
      switch (props.variant) {
        case 'primary': return props.theme.colors.primary;
        case 'success': return props.theme.colors.success;
        case 'warning': return props.theme.colors.warning;
        case 'error': return props.theme.colors.error;
        case 'info': return props.theme.colors.info;
        default: return props.theme.colors.lightGrey;
      }
    }};
    color: ${props => {
      switch (props.variant) {
        case 'primary': return props.theme.colors.primary;
        case 'success': return props.theme.colors.success;
        case 'warning': return props.theme.colors.warning;
        case 'error': return props.theme.colors.error;
        case 'info': return props.theme.colors.info;
        default: return props.theme.colors.white;
      }
    }};
  `}
`

const Badge = ({ 
  children, 
  variant = 'primary', 
  outline = false, 
  ...props 
}) => {
  return (
    <BadgeContainer 
      variant={variant} 
      outline={outline} 
      {...props}
    >
      {children}
    </BadgeContainer>
  )
}

export default Badge
