import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelData from '../components/Dashboard/FunnelData';
import StatsOverview from '../components/Dashboard/StatsOverview';
import LeadTrackingChart from '../components/Dashboard/LeadTrackingChart';
import ReasonsLost from '../components/Dashboard/ReasonsLost';
import OtherData from '../components/Dashboard/OtherData';

/**
 * Dashboard Overview Page (DashboardPage)
 * 
 * This is the main page of the application, presenting a comprehensive overview of lead analytics.
 * It uses `MainAppLayout` to establish the core structure with a sidebar and header.
 * The main content area is arranged in a responsive two-column grid, populating it
 * with various data visualization components that show funnel stats, lead sources, tracking charts,
 * and other key metrics.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min gap-8">
      {/* Row 1 */}
      <FunnelData />
      <StatsOverview />

      {/* Row 2 - Spans both columns as defined in its component */}
      <LeadTrackingChart />

      {/* Row 3 */}
      <ReasonsLost />
      <OtherData />
    </MainAppLayout>
  );
};

export default IndexPage;
