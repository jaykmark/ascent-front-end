import React from 'react';
import { Bar } from 'react-chartjs-2';

class SkillChart extends React.Component {
  lastWeek() {
    const chartLabels = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const splitDate = date.toLocaleString().split('/')
      const formattedDate = splitDate[0] + '/' + splitDate[1] + '/' + splitDate[2]
      chartLabels.unshift(formattedDate.split(',')[0])
    }
    return chartLabels
  }

  // Loop through last week of log times
  lastWeekLogTimes(logTimes) {
    const chartData = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const tempDate = date.toISOString().substr(0,10);
      let minutes = 0;
      logTimes.forEach(logTime => {
        // Compare to dates in chartLabels
        if (logTime.date.substr(0,10) === tempDate) {
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
      <div className="skillChart container card">
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