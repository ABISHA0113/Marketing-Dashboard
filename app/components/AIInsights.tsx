import { Sparkles, TrendingUp, Target, AlertCircle } from 'lucide-react';

export function AIInsights() {
  const insights = [
    {
      icon: TrendingUp,
      title: 'Growth Opportunity',
      description: 'Social media engagement up 23% this week',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Target,
      title: 'Optimization Suggestion',
      description: 'Increase budget for high-performing ads',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: AlertCircle,
      title: 'Alert',
      description: 'Bounce rate increased on mobile devices',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="w-5 h-5" />
        <h3 className="font-semibold">AI Insights</h3>
      </div>
      <p className="text-sm opacity-90 mb-6">Real-time AI-powered recommendations</p>
      <div className="space-y-4">
        {insights.map((insight, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="flex items-start space-x-3">
              <div className={`${insight.bgColor} p-2 rounded-lg`}>
                <insight.icon className={`w-4 h-4 ${insight.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium">{insight.title}</p>
                <p className="text-xs opacity-80 mt-1">{insight.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}