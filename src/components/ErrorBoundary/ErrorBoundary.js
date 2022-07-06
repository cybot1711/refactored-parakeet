import React from 'react'
import * as Sentry from '@sentry/react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error)
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Custom error page can be rendered here</h1>
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
