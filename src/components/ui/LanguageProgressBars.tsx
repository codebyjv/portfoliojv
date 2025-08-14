import React, { useEffect, useState } from 'react';

type LanguageData = Record<string, number>;

const LanguageProgressBars: React.FC = () => {
  const [languages, setLanguages] = useState<{ name: string; percent: number }[]>([]);

  useEffect(() => {
    const repos = ['project', 'NewWLProject', 'Email-sender', 'EverGreen'];

    const fetchLanguages = async () => {
      const combined: LanguageData = {};

      for (const repo of repos) {
        const res = await fetch(`https://api.github.com/repos/codebyjv/${repo}/languages`);
        const data: LanguageData = await res.json();
        if ('message' in data || 'status' in data) continue;

        for (const [lang, bytes] of Object.entries(data)) {
          combined[lang] = (combined[lang] || 0) + bytes;
        }
      }

      const total = Object.values(combined).reduce((sum, val) => sum + val, 0);
      const result = Object.entries(combined).map(([name, bytes]) => ({
        name,
        percent: parseFloat(((bytes / total) * 100).toFixed(2)),
      }));

      setLanguages(result);
    };

    fetchLanguages();
  }, []);

  return (
    <div className="space-y-6">
      {languages.map(({ name, percent }) => (
        <div key={name}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{name}</span>
            <span className="text-sm text-gray-500">{percent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-purple-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LanguageProgressBars;
