'use client';

import { useState } from 'react';
import { 
  Activity, 
  Users, 
  TrendingUp, 
  DollarSign,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  Download,
  Calendar
} from 'lucide-react';
import { StatsCard } from './StatsCard';
import { RevenueChart } from './RevenueChart';
import { CampaignPerformance } from './CampaignPerformance';
import { TopChannels } from './TopChannels';
import { RecentActivity } from './RecentActivity';
import { AIInsights } from './AIInsights';

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: 'Total Revenue',
      value: '$54,239',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-emerald-500',
      trend: 'up' as const
    },
    {
      title: 'Active Users',
      value: '24,892',
      change: '+8.2%',
      icon: Users,
      color: 'bg-blue-500',
      trend: 'up' as const
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'bg-purple-500',
      trend: 'up' as const
    },
    {
      title: 'ROI',
      value: '284%',
      change: '+18.3%',
      icon: Activity,
      color: 'bg-orange-500',
      trend: 'up' as const
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Analytics
            </span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {['Dashboard', 'Campaigns', 'Analytics', 'Audience', 'Settings'].map((item) => (
            <button key={item} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900">
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4 flex-1 max-w-md ml-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search campaigns, analytics..." 
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Header section */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Marketing Analytics</h1>
              <p className="text-gray-600 mt-1">AI-powered insights for your marketing campaigns</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Last 30 days</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <StatsCard key={idx} {...stat} />
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <TopChannels />
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CampaignPerformance />
            </div>
            <div>
              <AIInsights />
            </div>
          </div>

          {/* Recent Activity */}
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}