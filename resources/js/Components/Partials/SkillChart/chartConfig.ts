import { type ChartData, type ChartOptions } from 'chart.js';
import { Context } from 'chartjs-plugin-datalabels';

import { useAppStore } from '@/Store/Modules/App';

export const getChartData = (): ChartData<'bar'> => ({
  labels: [
    ['Vue', '88%'],
    ['Forms', '85%'],
    ['JS/TypeScript', '79%'],
    ['App State', '82%'],
    ['Animation', '78%'],
    ['Laravel/GraphQL', '40%'],
  ],
  datasets: [
    {
      backgroundColor: (context: {
        chart: { ctx: CanvasRenderingContext2D; chartArea: { top: number; bottom: number } };
        dataIndex: number;
      }) => {
        const { ctx, chartArea } = context.chart;
        if (!chartArea) return '#21d4fd';

        const index = context.dataIndex;
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

        switch (index) {
          case 0:
            gradient.addColorStop(0, '#04d4ff');
            gradient.addColorStop(1, '#9BDCE8FF');
            break;
          case 1:
            gradient.addColorStop(0, '#996a5b');
            gradient.addColorStop(1, '#D0A78CFF');
            break;
          case 2:
            gradient.addColorStop(0, '#e7af30');
            gradient.addColorStop(1, '#dec691');
            break;
          case 3:
            gradient.addColorStop(0, '#43A677FF');
            gradient.addColorStop(1, '#84CCA9FF');
            break;
          case 4:
            gradient.addColorStop(0, '#333333');
            gradient.addColorStop(1, '#fff');
            break;
          case 5:
            gradient.addColorStop(0, '#e14949');
            gradient.addColorStop(1, '#fff');
            break;

          default:
            return gradient;
        }

        return gradient;
      },
      data: [88, 85, 79, 82, 78, 60],
      borderRadius: 4,
      barPercentage: 0.96,
      categoryPercentage: 0.96,
    },
  ],
});

export const getChartOptions = (): ChartOptions<'bar'> & { plugins: { datalabels?: unknown } } => {
  const appStore = useAppStore();
  const isDesktop = appStore.isDesktop;
  const isTabletMobile = appStore.isTabletMobile;
  const isSmallerTablet = appStore.isSmallerTablet;
  const isMobile = appStore.isMobile;

  return {
    indexAxis: 'x' as const,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        color: '#fff',
        offset: 0,
        rotation: 0,
        clip: false,
        clamp: true,
        textAlign: 'center' as const,
        labels: {
          title: {
            display: true,
            font: {
              family: "'Acumin Pro Wide', sans-serif",
              size: isDesktop ? 16 : isSmallerTablet ? 11 : isMobile ? 6 : 12,
              weight: 'lighter' as const,
              lineHeight: 'normal',
            },
            color: '#fff',
            formatter: (_value: number, context: Context) => {
              const label = context.chart.data.labels?.[context.dataIndex];
              return Array.isArray(label) ? (label[0] as string) : (label as string);
            },
            clamp: true,
            anchor: 'start' as const,
            align: 'end' as const,
            offset: isDesktop ? 30 : isSmallerTablet ? 5 : isMobile ? 4 : 25,
          },
          subtitle: {
            display: true,
            font: {
              family: "'Proxima Nova', sans-serif, 'Helvetica Neue', Helvetica, Arial",
              size: isDesktop ? 42 : isSmallerTablet ? 24 : isMobile ? 18 : 32,
              weight: 600,
              lineHeight: 1.2,
            },
            color: '#fff',
            clamp: true,
            anchor: 'start' as const,
            align: 'end' as const,
            offset: isDesktop ? 48 : isSmallerTablet ? 20 : isMobile ? 15 : 40, // Adjust this offset to position it below the title
            formatter: (_value: number, context: Context) => {
              const label = context.chart.data.labels?.[context.dataIndex];
              return Array.isArray(label) ? (label[1] as string) : '';
            },
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: true,
        max: 100,
        min: 40,
        grid: {
          display: true,
        },
        border: {
          display: true,
        },
        ticks: {
          display: !isDesktop ? false : true,
          padding: isMobile ? 5 : 14,
          font: {
            family: "'Proxima Nova', sans-serif, 'Helvetica Neue', Helvetica, Arial",
            size: isMobile ? 9 : 14,
          },
          color: '#060606',
          callback: (value: string | number): string => {
            if (value === 100) return 'Seer';
            if (value === 80) return 'Magician';
            if (value === 60) return 'Geek';
            if (value === 40) return 'Caveman';
            return '';
          },
          stepSize: 20,
        },
      },
    },
  };
};
