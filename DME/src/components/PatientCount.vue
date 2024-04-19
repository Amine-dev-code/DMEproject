<template>
  <div class="chartContainer">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [40, 20, 12, 80, 100, 200],
            backgroundColor: '#00ceca1A',
            borderColor: '#00cec8',
            borderWidth: '2',
            borderRadius: '10',
            label: 'patient count'
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style>
.chartContainer {
  /*width: 41vw;*/
}
</style>
