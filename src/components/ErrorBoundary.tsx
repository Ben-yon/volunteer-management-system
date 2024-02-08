import React, { Component } from "react";
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "../interfaces/ErrorBoundaryInterface";

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="relative bg-admin bg-no-repeat bg-cover filter md:filter-none z-0 w-[100%] h-[100vh]">
          <div className="bg-primary opacity-95 bg-no-repeat bg-cover w-[100%] h-[100vh]">
            <div className="flex flex-wrap justify-center items-center min-h-screen text-4xl font-semibold text-red-500">
              Something went wrong. Please refresh the page or try again later.
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
