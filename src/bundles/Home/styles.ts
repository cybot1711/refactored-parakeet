import { Container, Skeleton, styled } from '@mui/material'

export const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledLayout = styled('div')({
  display: 'flex',
  height: '100vh',
  background: 'conic-gradient(hsla(354, 95%, 24%, 1) 50%, hsla(234, 70%, 24%, 1))',
})

export const Box = styled('div')({
  backdropFilter: 'blur(8px)',
  boxShadow: '0px 10px 15px 10px rgb(0 0 0 / 15%)',
  backgroundColor: 'rgb(228 228 228 / 15%)',
  width: 600,
  height: 700,
  borderRadius: 16,
  padding: 24,
  color: 'white',
  overflow: 'hidden',
})

export const Item = styled('div')({
  backdropFilter: 'blur(8px)',
  boxShadow: '0 10px 15px 10px rgb(0 0 0 / 15%)',
  color: 'white',
  width: '100%',
  padding: 21,
  borderRadius: 8,
  marginBottom: 10,
})

export const SkeletonItem = styled(Skeleton)({
  backdropFilter: 'blur(8px)',
  boxShadow: '0 10px 15px 10px rgb(0 0 0 / 15%)',
  color: 'white',
  padding: 21,
  borderRadius: 8,
  marginBottom: 10,
})

export const Input = styled('input')({
  width: '100%',
  border: 'none',
  outline: 'none',
  background: 'none',
  fontSize: 18,
  color: '#FFF',
  fontWeight: 'bold',
  padding: '20px 10px 20px 20px',
  marginBottom: '30px',
  borderRadius: '25px',
  boxShadow: 'inset 8px 8px 8px hsla(354, 95%, 24%, 0.5)',
  inset: '-8px -8px 8px #ffffff',
})

export const ScrollContainer = styled('div')({
  height: '95%',
  margin: 0,
})

export const ScrollBox = styled('div')({
  height: '90%',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: 10,
})
