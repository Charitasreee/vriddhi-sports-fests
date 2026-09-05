import React from "react";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bangers text-primary tracking-wider">404</h1>
        <p className="text-xl text-muted-foreground font-russo">Oops! Page not found</p>
        <div>
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-russo hover:bg-primary/90 transition-all shadow-glow-primary"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
