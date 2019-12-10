import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class SkillChart extends React.Component {
  lastWeek() {
    const chartLabels = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      chartLabels.unshift(date.toLocaleString().substr(0,9))
    }
    return chartLabels
    // Check to see if the date is within the past seven days
  }

  render() {
    const chartData = {
      labels: this.lastWeek(),
      datasets: [
        {
          label: 'Time',
          data: [
            60,
            80,
            40,
            90,
            20,
          ],
          backgroundColor: [
          ]
        }
      ]
    }

    return (
      <div className="skillChart container">
        <Bar
          data={chartData}
          width={100}
          height={50}
          options={{
            mainAspectRatio: false
          }}
        />
      </div>
    )
  }
}

export default SkillChart;