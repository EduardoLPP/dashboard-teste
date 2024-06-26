import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface ChartDataItem {
  value: number;
  name: string;
}

const PieChart: React.FC<{ data: ChartDataItem[] }> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            data: data
          }
        ]
      };

      myChart.setOption(option);

      return () => {
        myChart.dispose();
      };
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: '100%', height: '400px', marginBottom: -180 }} />;
};

export default PieChart;
