import React from 'react';
import SidebarNav from '../Dashboard/SidebarNav';

/**
 * Sidebar component that wraps the main application navigation.
 * It utilizes the pre-built SidebarNav for consistent navigation structure.
 */
const Sidebar: React.FC = () => {
  // The SidebarNav component from the context is already styled with a fixed position
  // and appropriate width (w-60), so this component acts as a clean wrapper.
  return <SidebarNav />;
};

export default Sidebar;
