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
    const fetchLanguages = async () => {
      const response = await fetch('https://api.github.com/repos/codebyjv/project/languages');
      const data: LanguageData = await response.json();

      const total = Object.values(data).reduce((sum, bytes) => sum + bytes, 0);

      const labels = Object.keys(data);
      const percentages = Object.values(data).map(bytes => parseFloat(((bytes / total) * 100).toFixed(2)));

      setChartData({
        labels,
        datasets: [
          {
            label: 'Uso de Linguagens (%)',
            data: percentages,
            backgroundColor: [
              '#4ade80', // verde
              '#60a5fa', // azul
              '#facc15', // amarelo
              '#f87171', // vermelho
              '#a78bfa', // roxo
            ],
            borderWidth: 1,
          } as ChartDataset<'pie', number[]>,
        ],
      });
    };

    fetchLanguages();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Linguagens do Projeto</h2>
      {chartData ? <Pie data={chartData} /> : <p>Carregando gráfico...</p>}
    </div>
  );
};

export default RepoLanguagesChart;
