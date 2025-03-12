import React from 'react'
import styled, { css } from 'styled-components'

const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadows.small};
  transition: ${props => props.theme.transitions.normal};
  
  ${props => props.hoverable && css`
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${props => props.theme.shadows.medium};
    }
  `}
  
  ${props => props.bordered && css`
    border: 1px solid ${props => props.theme.colors.lightGrey};
  `}
  
  ${props => props.highlight && css`
    border-left: 4px solid ${props => props.theme.colors.primary};
  `}
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`

const CardBody = styled.div`
  margin-bottom: 1rem;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
`

const Card = ({ 
  children, 
  title, 
  action, 
  footer, 
  hoverable = false, 
  bordered = false, 
  highlight = false, 
  ...props 
}) => {
  return (
    <CardContainer 
      hoverable={hoverable} 
      bordered={bordered} 
      highlight={highlight} 
      {...props}
    >
      {(title || action) && (
        <CardHeader>
          {title && <h3>{title}</h3>}
          {action && action}
        </CardHeader>
      )}
      
      <CardBody>
        {children}
      </CardBody>
      
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </CardContainer>
  )
}

export default Card
