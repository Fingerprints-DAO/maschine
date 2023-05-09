import Error, { ErrorProps } from 'next/error'
import { PropsWithChildren } from 'react'

interface ErrorHandlingLayoutProps {
  error: ErrorProps
}

const ErrorHandlingLayout = ({ error, children }: PropsWithChildren<ErrorHandlingLayoutProps>) => {
  if (error) {
    return <Error statusCode={error.statusCode} />
  }

  return <>{children}</>
}

export default ErrorHandlingLayout
