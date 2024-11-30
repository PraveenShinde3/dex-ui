// components/MDXLayout.tsx

import React, { ReactNode } from "react";

interface MDXLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const MDXLayout: React.FC<MDXLayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="mdx-layout">
      {/* Header */}
      <header className="mdx-header">
        <h1 className="mdx-title">{title}</h1>
        {description && <p className="mdx-description">{description}</p>}
      </header>

      {/* Main Content */}
      <main className="mdx-content">{children}</main>

      {/* Footer */}
      <footer className="mdx-footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>

      {/* Optional: Add custom styling */}
      <style jsx>{`
        .mdx-layout {
          display: flex;
          flex-direction: column;
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .mdx-header {
          margin-bottom: 20px;
        }
        .mdx-title {
          font-size: 2rem;
          margin: 0;
        }
        .mdx-description {
          font-size: 1rem;
          color: gray;
        }
        .mdx-content {
          flex-grow: 1;
        }
        .mdx-footer {
          margin-top: 20px;
          text-align: center;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};

export default MDXLayout;
