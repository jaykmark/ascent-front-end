import React from 'react';
import { Bar } from 'react-chartjs-2';

class SkillChart extends React.Component {
  lastWeek() {
    const chartLabels = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      chartLabels.unshift(date.toLocaleString().substr(0,9))
    }
    return chartLabels
  }

  // Loop through last week of log times
  lastWeekLogTimes(logTimes) {
    const chartData = [];
    for (let i = 1; i < 8; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const tempDate = date.toISOString().substr(0,10);
      let minutes = 0;
      logTimes.forEach(logTime => {
        // Compare to dates in chartLabels
        if (logTime.date.substr(0,10) === tempDate) {
          console.log('BOOP');
          minutes += logTime.minutes;
        }
      })
      chartData.unshift(minutes);
    }  
    return chartData
  }

  render() {
    const chartData = {
      labels: this.lastWeek(),
      datasets: [
        {
          label: 'Minutes',
          data: this.lastWeekLogTimes(this.props.skillDetail.logTimes),
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