import { useParams } from 'react-router-dom'
import React from 'react'
import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledDivider,
  StyledImage,
  StyledImageContainer,
  StyledImageFrame,
} from './styles'

export const Repo = () => {
  const params = useParams()
  return (
    <StyledContainer>
      <StyledContent>
        <h1
          style={{
            color: 'white',
            letterSpacing: '-0.1rem',
            width: '100%',
            fontSize: '3rem',
            lineHeight: '1.125',
            fontWeight: 'bold',
          }}
        >
          GoDaddy Repos
        </h1>
        <StyledImageContainer>
          <StyledImageFrame>
            <StyledImage src='https://place-hold.it/166x166' />
          </StyledImageFrame>
        </StyledImageContainer>

        <StyledDescription>Description goes here</StyledDescription>

        <StyledDivider />
      </StyledContent>
    </StyledContainer>
  )
}
