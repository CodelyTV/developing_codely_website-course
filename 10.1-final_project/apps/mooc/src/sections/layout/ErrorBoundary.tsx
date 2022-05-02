import React, { ErrorInfo } from "react";

import { Button } from "@codely/design-system/src/atoms/Button";
import { Heading } from "@codely/design-system/src/atoms/Heading";
import { Container } from "@codely/design-system/src/objects/Container";

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Heading>¡Ups, ha habido un error!</Heading>
          <Button onClick={() => this.setState({ hasError: false })}>Vuelve a intentarlo 😅</Button>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
