import React, { Component} from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../interfaces/ErrorBoundaryInterface";


export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('Error caught by ErrorBoundary:', error, errorInfo)
    }

    render(): React.ReactNode {
        if (this.state.hasError){
            return <div className="flex justify-center items-center min-h-screen text-3xl text-red-500">Something went wrong. Please refresh the page or try again later.</div>;
        }
        return this.props.children;
    }   

}

