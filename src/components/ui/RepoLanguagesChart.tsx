import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ChartData,
  ArcElement,
  Tooltip,
  Legend,
  ChartDataset,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Tipagem para os dados da API
type LanguageData = Record<string, number>;

const RepoLanguagesChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<'pie'> | null>(null);

  useEffect(() => {
    const repos = ['project', 'NewWLProject', 'Email-sender', 'EverGreen'];

    const fetchAllLanguages = async () => {
      const combinedData: LanguageData = {};

      for (const repo of repos) {
        const response = await fetch(`https://api.github.com/repos/codebyjv/${repo}/languages`);
        const data: LanguageData = await response.json();

        // Soma os bytes por linguagem
        for (const [lang, bytes] of Object.entries(data)) {
          combinedData[lang] = (combinedData[lang] || 0) + bytes;
        }
      }

      const total = Object.values(combinedData).reduce((sum, bytes) => sum + bytes, 0);
      const labels = Object.keys(combinedData);
      const percentages = Object.values(combinedData).map(bytes =>
        parseFloat(((bytes / total) * 100).toFixed(2))
      );

      setChartData({
        labels,
        datasets: [
          {
            label: 'Uso de Linguagens (%)',
            data: percentages,
            backgroundColor: [
              '#4ade80', '#60a5fa', '#facc15', '#f87171', '#a78bfa',
              '#34d399', '#fbbf24', '#f472b6', '#818cf8', '#2dd4bf',
            ],
            borderWidth: 1,
          } as ChartDataset<'pie', number[]>,
        ],
      });
    };

    fetchAllLanguages();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Linguagens do Projeto</h2>
      {chartData ? <Pie data={chartData} /> : <p>Carregando gráfico...</p>}
    </div>
  );
};

export default RepoLanguagesChart;
