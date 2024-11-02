import React from 'react';
import { ArrowLeft, Gift } from 'lucide-react';

interface AdminDashboardProps {
  lotteryHistory: Array<{
    tier: string;
    timestamp: number;
  }>;
  t: {
    adminDashboard: string;
    drawHistory: string;
    tiers: Record<string, string>;
    noHistory: string;
    back: string;
  };
  tierColors: Record<string, string>;
  onBack: () => void;
  onLogout: () => void;
}

export function AdminDashboard({ 
  lotteryHistory, 
  t, 
  tierColors,
  onBack,
  onLogout
}: AdminDashboardProps) {
  const handleBack = () => {
    onLogout();
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white hover:bg-gray-50 transition-colors text-gray-700 shadow-sm border border-gray-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.back}</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">{t.adminDashboard}</h1>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gift className="text-blue-500" />
            {t.drawHistory}
          </h2>
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {lotteryHistory.length === 0 ? (
              <p className="text-gray-500 text-center py-8">{t.noHistory}</p>
            ) : (
              lotteryHistory.map((result, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                >
                  <span className={`font-medium ${tierColors[result.tier]}`}>
                    {t.tiers[result.tier]}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(result.timestamp).toLocaleString()}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}