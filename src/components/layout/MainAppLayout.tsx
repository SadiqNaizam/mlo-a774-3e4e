import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 * It accepts children to render the main content of a page.
 */
interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Defines the main structural layout for the application.
 * This component orchestrates the fixed sidebar, sticky header, and the main content area.
 * It ensures that the page content flows correctly and does not overlap with fixed elements.
 * The layout is based on the provided context components where Sidebar is 'fixed' and Header is 'sticky'.
 * A left margin on the main content container prevents it from being obscured by the sidebar.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className="relative min-h-screen bg-background">
      <Sidebar />
      <div className="ml-60 flex h-full min-h-screen flex-col">
        <Header />
        <main className={cn('flex-1 p-8', className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
