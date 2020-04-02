import React from 'react';
import { Bar } from 'react-chartjs-2';

class SkillChart extends React.Component {
  lastWeek() {
    const chartLabels = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const splitDate = date.toLocaleString().split('/');
      const formattedDate = splitDate[0] + '/' + splitDate[1] + '/' + splitDate[2]
      chartLabels.unshift(formattedDate.split(',')[0])
    }
    return chartLabels
  }

  // Loop through last week of log times
  lastWeekLogTimes(logTimes) {
    const chartData = [];


    for (let i = 0; i < 7; i++) {
      // Get now data
      const now = new Date();
      now.setDate(now.getDate() - i);
      let year = now.getFullYear().toString();
      let month = parseInt(now.getMonth() + 1).toString();
      let date = now.getDate().toString();

      // Add leading zeroes to single digits
      if (month.length === 1) {
        month = `0${month}`;
      }

      if (date.length === 1) {
        date = `0${date}`;
      }

      let nowFormattedDate = `${year}-${month}-${date}`;

      let minutes = 0;
      logTimes.forEach(logTime => {
        // Compare to dates in chartLabels
        if (logTime.date.substr(0, 10) === nowFormattedDate) {
          minutes += logTime.minutes;
        }
      })
      chartData.unshift(minutes);
    }
    return chartData;
  }

  render() {
    const chartData = {
      labels: this.lastWeek(),
      datasets: [
        {
          label: 'Minutes',
          data: this.lastWeekLogTimes(this.props.skillDetail.logTimes),
          backgroundColor: [
            '#072A40',
            '#072A40',
            '#072A40',
            '#072A40',
            '#072A40',
            '#072A40',
            '#072A40',
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
