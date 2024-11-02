import React from 'react';
import { Trophy } from 'lucide-react';

interface LotteryHeaderProps {
  t: {
    title: string;
    subtitle: string;
  };
}

export function LotteryHeader({ t }: LotteryHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
        <Trophy className="text-yellow-500" />
        {t.title}
      </h1>
      <p className="text-gray-600 mb-8">{t.subtitle}</p>
    </div>
  );
}