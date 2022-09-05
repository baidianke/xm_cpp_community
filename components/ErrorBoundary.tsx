import React, { ErrorInfo } from 'react';
// import * as Sentry from '@sentry/nextjs'

interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
}
class ErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
    // Sentry.captureUnderscoreErrorException(errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button type="button" onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
