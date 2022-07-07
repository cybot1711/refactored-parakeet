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
  StyledSpan,
  StyledTitle,
} from './styles'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Skeleton } from '@mui/material'
import { useGetRepo } from '../../hooks'

export const Repo = () => {
  const { data, isLoading } = useGetRepo()

  return (
    <StyledContainer>
      <StyledContent>
        <StyledImageContainer>
          <StyledImageFrame>
            {isLoading ? (
              <Skeleton variant='circular' width={142} height={142} />
            ) : (
              <StyledImage src={data?.repo?.organization?.avatar_url ?? ''} />
            )}
          </StyledImageFrame>
        </StyledImageContainer>
        <StyledTitle>{data?.repo?.name ?? ''}</StyledTitle>
        <StyledDescription>{data?.repo?.description ?? ''}</StyledDescription>

        <StyledButtonLink
          href={data?.repo?.html_url ?? ''}
          target='_blank'
          startIcon={<GitHubIcon />}
        >
          Github
        </StyledButtonLink>

        <StyledDivider />

        <StyledDescription>
          Languages: <StyledSpan>{Object.keys(data?.languages ?? {}).join(' ')}</StyledSpan>
        </StyledDescription>
        <StyledDescription>
          Forks: <StyledSpan>{data?.repo?.forks_count}</StyledSpan>
        </StyledDescription>
        <StyledDescription>
          Open issues: <StyledSpan>{data?.repo?.open_issues_count}</StyledSpan>
        </StyledDescription>
        <StyledDescription>
          Watchers: <StyledSpan>{data?.repo?.watchers_count}</StyledSpan>
        </StyledDescription>
      </StyledContent>
    </StyledContainer>
  )
}
