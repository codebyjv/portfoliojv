import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  ChartData,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// Tipagem para os dados da API
type LanguageData = Record<string, number>;

const RepoLanguagesChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<'bar'> | null>(null);

  useEffect(() => {
    const fetchAllLanguages = async () => {
      const repos = ['project', 'NewWLProject', 'Email-sender', 'EverGreen'];
      const combinedData: LanguageData = {};

      for (const repo of repos) {
        const response = await fetch(`https://api.github.com/repos/codebyjv/${repo}/languages`);
        const data: LanguageData = await response.json();

        // Ignora se a resposta contém campos de erro
        if ('message' in data || 'status' in data) continue;

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
            backgroundColor: '#60a5fa',
            borderWidth: 1,
          },
        ],
      });
    };

    fetchAllLanguages();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <p className="text-xl font-bold mb-4 text-center">All the languages used in my personal study projects, which include web and desktop (portable) tools.</p>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            indexAxis: 'y',
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: context => `${context.parsed.x}%`,
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
                max: 100,
                title: {
                  display: true,
                  text: 'Porcentagem (%)',
                },
              },
            },
          }}
        />
      ) : (
        <p>Carregando gráfico...</p>
      )}
    </div>
  );
};

export default RepoLanguagesChart;
