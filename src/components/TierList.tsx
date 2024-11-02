import React from 'react';
import { Sparkles } from 'lucide-react';

interface TierListProps {
  t: {
    tiers: Record<string, string>;
    discounts: Record<string, string>;
  };
}

export function TierList({ t }: TierListProps) {
  const tiers = [
    { key: 'special', color: 'text-purple-600' },
    { key: 'gold', color: 'text-yellow-500' },
    { key: 'silver', color: 'text-gray-400' },
    { key: 'bronze', color: 'text-amber-700' },
    { key: 'basic', color: 'text-blue-500' }
  ];

  return (
    <div className="grid grid-cols-1 gap-2">
      {tiers.map(({ key, color }) => (
        <div key={key} className="flex items-center gap-2">
          <Sparkles className={`w-4 h-4 ${color}`} />
          <span>{t.tiers[key]}: {t.discounts[key]}</span>
        </div>
      ))}
    </div>
  );
}