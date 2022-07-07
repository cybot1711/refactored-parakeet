import { useParams } from 'react-router-dom'
import React from 'react'
import {
  StyledButtonLink,
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledDivider,
  StyledImage,
  StyledImageContainer,
  StyledImageFrame,
  StyledTitle,
} from './styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Button } from '@mui/material'

export const Repo = () => {
  const params = useParams()
  return (
    <StyledContainer>
      <StyledContent>
        <StyledImageContainer>
          <StyledImageFrame>
            <StyledImage src='https://place-hold.it/166x166' />
          </StyledImageFrame>
        </StyledImageContainer>

        <StyledTitle>Repository information</StyledTitle>

        <StyledDescription>Description goes here</StyledDescription>

        <StyledButtonLink
          href='https://github.com/'
          target='_blank'
          startIcon={<GitHubIcon />}
          sx={{ color: 'white' }}
        >
          Github
        </StyledButtonLink>

        <StyledDivider />

        <StyledDescription>Languages: C C++ C#</StyledDescription>
        <StyledDescription>Forks: C C++ C#</StyledDescription>
        <StyledDescription>Open issues: C C++ C#</StyledDescription>
        <StyledDescription>Watchers: C C++ C#</StyledDescription>
      </StyledContent>
    </StyledContainer>
  )
}
