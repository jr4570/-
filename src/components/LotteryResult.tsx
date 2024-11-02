import React from 'react';
import { Gift } from 'lucide-react';

interface LotteryResultProps {
  result: {
    tier: string;
    animation: string;
  } | null;
  tierColors: Record<string, string>;
  t: {
    waiting: string;
    congratulations: string;
    tiers: Record<string, string>;
  };
}

export function LotteryResult({ result, tierColors, t }: LotteryResultProps) {
  if (!result) {
    return (
      <div className="text-center text-gray-400">
        <Gift className="w-16 h-16 mx-auto mb-4" />
        <div className="text-xl">{t.waiting}</div>
      </div>
    );
  }

  return (
    <div className={`text-center transition-all duration-300 ${result.animation}`}>
      <Gift className={`w-16 h-16 mx-auto mb-4 ${tierColors[result.tier]}`} />
      <div className={`text-2xl font-bold mb-2 ${tierColors[result.tier]}`}>
        {t.congratulations}
      </div>
      <div className={`text-3xl font-bold ${tierColors[result.tier]}`}>
        {t.tiers[result.tier]}
      </div>
    </div>
  );
}