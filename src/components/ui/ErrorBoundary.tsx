import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            padding: '2rem',
            margin: '2rem auto',
            maxWidth: '680px',
            borderRadius: '16px',
            backgroundColor: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            color: '#F87171',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
            {this.props.fallbackTitle || 'A component encountered an issue'}
          </h3>
          <p style={{ fontSize: '14px', lineHeight: 1.6, margin: '0 0 1.25rem 0', opacity: 0.9 }}>
            {this.props.fallbackMessage ||
              'This module experienced a temporary loading issue. The rest of the portfolio remains fully active.'}
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: '#EF4444',
              color: '#FFFFFF',
              border: 'none',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Retry Component
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
