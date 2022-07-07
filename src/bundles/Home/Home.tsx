import React from 'react'
import {
  Box,
  Input,
  Item,
  ScrollBox,
  ScrollContainer,
  SkeletonItem,
  StyledContainer,
} from './styles'
import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useInfiniteScroll } from '../../hooks'

export const Home = () => {
  const { ref, filter, setFilter, status, data, error, hasNextPage } = useInfiniteScroll()

  return (
    <StyledContainer>
      <Box>
        <Input
          placeholder='Dummy search'
          onChange={(e) => setFilter(e.target.value)}
          value={filter ?? ''}
        />
        <ScrollContainer>
          <ScrollBox disablePadding>
            {status === 'loading' ? (
              <p>Loading...</p>
            ) : status === 'error' ? (
              <span>Error: {error?.message}</span>
            ) : (
              <>
                {data?.pages.map((page) =>
                  page?.repos?.map((item) => (
                    <Item key={item.name} disablePadding>
                      <ListItemButton component={Link} to={`/repo/${item.name}`}>
                        <ListItemAvatar>
                          <Avatar>
                            <GitHubIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item?.name} />
                      </ListItemButton>
                    </Item>
                  )),
                )}
                {hasNextPage && (
                  <SkeletonItem as='div' ref={ref} width='100%' height={70}>
                    Loading more items ...
                  </SkeletonItem>
                )}
              </>
            )}
          </ScrollBox>
        </ScrollContainer>
      </Box>
    </StyledContainer>
  )
}
