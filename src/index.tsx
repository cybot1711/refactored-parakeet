import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserTracing } from '@sentry/tracing'
import * as Sentry from '@sentry/react'
import { CssBaseline } from '@mui/material'
import { ErrorBoundary } from './components/ErrorBoundary'

Sentry.init({
  dsn: process.env.SENTRY,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  </React.StrictMode>,
)
