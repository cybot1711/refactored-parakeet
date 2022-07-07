import { styled } from '@mui/material/styles'
import { Button, Container } from '@mui/material'

export const StyledContainer = styled(Container)(({ theme }) => ({
  marginLeft: 'unset',
  height: '100vh',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  backdropFilter: 'blur(8px)',
  boxShadow: '0px 10px 15px 10px rgb(0 0 0 / 15%)',
  backgroundColor: 'rgb(228 228 228 / 15%)',
  [theme.breakpoints.up('md')]: {
    maxWidth: '50%',
  },
}))

export const StyledContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}))

export const StyledImageContainer = styled('div')({
  display: 'block',
  lineHeight: 0,
  maxWidth: '100%',
  position: 'relative',
})

export const StyledImageFrame = styled('span')({
  width: '7rem',
  borderRadius: '100%',
  borderColor: 'rgba(255,255,255,0.149)',
  borderStyle: 'solid',
  borderWidth: 1,
  backfaceVisibility: 'hidden',
  transform: 'translate3d(0, 0, 0)',
  display: 'inline-block',
  maxWidth: '100%',
  overflow: 'hidden',
  verticalAlign: 'top',
  padding: '0.5rem',
})

export const StyledImage = styled('img')({
  borderRadius: 'inherit',
  maxWidth: '100%',
  verticalAlign: 'top',
  width: 'inherit',
})

export const StyledDescription = styled('p')({
  color: '#FFB4A3',
  letterSpacing: '-0.025rem',
  width: '100%',
  fontSize: '1em',
  lineHeight: 1.75,
  fontWeight: 400,
})

export const StyledDivider = styled('hr')({
  color: '#FFB4A3',
  marginBottom: '3rem',
})

export const StyledTitle = styled('h1')({
  color: 'white',
  letterSpacing: '-0.1rem',
  width: '100%',
  fontSize: '2.5rem',
  lineHeight: '1.125',
  fontWeight: 'bold',
})

export const StyledButtonLink = styled(Button)({
  color: 'white',
  marginBottom: '1rem',
}) as typeof Button
