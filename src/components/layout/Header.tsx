import React from 'react';
import TopHeader from '../Dashboard/TopHeader';

/**
 * Header component that wraps the top-level header of the application.
 * It uses the pre-built TopHeader which includes the page title and action buttons.
 */
const Header: React.FC = () => {
  // The TopHeader component from the context is already styled as a sticky header
  // with a fixed height (h-20), so this component serves as a structural wrapper.
  return <TopHeader />;
};

export default Header;
