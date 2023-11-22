import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../styles/PieChart.css';


const PieChart = ({ chartOptions }) => {
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

const FourPieCharts = () => {
  const customColors = {
    backgroundColor: 'black',
    slices: [
      '#ff7b7b',
      '#ff5252',
      '#ff0000',
      '#a70000',
      '#e36359',
      '#FF998B',
    ],
    titleTextStyle: {
      color: 'white',
      fontSize: '16px', // Adjusted font size
    },
    legendTextStyle: {
      color: 'white',
    },
  };

  const commonOptions = {
    chart: {
      type: 'pie',
      backgroundColor: customColors.backgroundColor,
    },
    plotOptions: {
      pie: {
        colors: customColors.slices,
      },
    },
    credits: {
      enabled: false, // Disable Highcharts credits
    },
  };

  const chartOptions1 = {
    ...commonOptions,
    title: {
      text: 'Sector Distribution',
      style: customColors.titleTextStyle,
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: [
          { name: 'Fintech', y: 25 },
          { name: 'E-commerce', y: 20 },
          { name: 'Artificial Intelligence', y: 15 },
          { name: 'Healthcare Technology', y: 10 },
          // { name: 'Consumer Electronics', y: 10 },
          { name: 'Other', y: 30 },
        ],
      },
    ],
  };

  const chartOptions2 = {
    ...commonOptions,
    title: {
      text: 'Valuation Distribution',
      style: customColors.titleTextStyle,
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: [
          { name: '$0-$1 billion', y: 40 },
          { name: '$1-$2 billion', y: 30 },
          { name: '$2-$3 billion', y: 20 },
          { name: '$3-$5 billion', y: 5 },
          { name: 'Over $5 billion', y: 5 },
        ],
      },
    ],
  };

  const chartOptions3 = {
    ...commonOptions,
    title: {
      text: 'Year of Founding Distribution',
      style: customColors.titleTextStyle,
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: [
          { name: '2015-2017', y: 30 },
          { name: '2018-2020', y: 40 },
          { name: '2021-2023', y: 30 },
        ],
      },
    ],
  };

  const chartOptions4 = {
    ...commonOptions,
    title: {
      text: 'Geographical Distribution',
      style: customColors.titleTextStyle,
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true,
        data: [
          { name: 'Bengaluru', y: 40 },
          { name: 'Mumbai', y: 20 },
          { name: 'Delhi', y: 15 },
          { name: 'Hyderabad', y: 10 },
          { name: 'Other', y: 15 },
        ],
      },
    ],
  };

  
  return (
    <section id="Piecharts">
    <div>
      <p> </p>
      <h2 className="main-heading">PieChart Analysis</h2>
      <div className="pie-container">
        <div className="pie-chart">
          <PieChart chartOptions={chartOptions1} />
        </div>
        <div className="pie-chart">
          <PieChart chartOptions={chartOptions2} />
        </div>
        <div className="pie-chart">
          <PieChart chartOptions={chartOptions3} />
        </div>
        <div className="pie-chart">
          <PieChart chartOptions={chartOptions4} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default FourPieCharts;