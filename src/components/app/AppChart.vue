<template>
  <div class="home-chart">
    <canvas ref="chart" id="chart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  name: 'Chart',
  mounted () {
    const ctx = this.$refs.chart.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(237, 152, 59, 0.3)')
    gradient.addColorStop(1, 'rgba(237, 152, 59, 0)')

    const chart = new Chart(this.$refs.chart, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
          label: 'Test',
          data: [30, 40, 25, 30, 25, 20, 25, 35, 45],
          backgroundColor: gradient,
          borderColor: '#ED983B',
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            position: 'top',
            grid: {
              drawBorder: true,
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          y: {
            position: 'right',
            grid: {
              drawBorder: true,
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    })
  }
}
</script>
