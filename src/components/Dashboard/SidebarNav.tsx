import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  Receipt, 
  Package, 
  Mail, 
  Archive, 
  Calendar, 
  Settings, 
  HelpCircle,
  CircleDot,
  PanelLeft
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutGrid, active: true },
  { href: '#', label: 'Leads', icon: Users },
  { href: '#', label: 'Customers', icon: User },
  { href: '#', label: 'Proposals', icon: FileText },
  { href: '#', label: 'Invoices', icon: Receipt },
  { href: '#', label: 'Items', icon: Package },
  { href: '#', label: 'Mail', icon: Mail },
  { href: '#', label: 'Sheebox', icon: Archive },
  { href: '#', label: 'Calendar', icon: Calendar },
];

const secondaryNavItems: NavItem[] = [
  { href: '#', label: 'Help', icon: HelpCircle },
  { href: '#', label: 'Settings', icon: Settings },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-60 h-screen bg-secondary flex flex-col fixed">
      <div className="p-4 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-2">
          <CircleDot className="h-8 w-8 text-foreground" />
          <span className="font-bold text-lg">Acme</span>
        </div>
        <PanelLeft className="h-6 w-6 text-muted-foreground" />
      </div>
      <div className="flex-grow flex flex-col justify-between p-4">
        <nav className="flex flex-col gap-2">
          {mainNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium',
                item.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <nav className="flex flex-col gap-2">
          {secondaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium',
                item.active
                  ? 'bg-primary/10 text-primary'
                  : 'text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SidebarNav;
