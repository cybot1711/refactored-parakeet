import { useParams } from 'react-router-dom'
import React from 'react'

export const Repo = () => {
  const params = useParams()
  return <h1 style={{ color: 'white' }}>repos: {params.slug}</h1>
}
