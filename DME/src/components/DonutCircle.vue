<template>
  <div class="donutContainer">
    <Doughnut :data="dataChart" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DonutCircle',
  components: {
    Doughnut
  },
  data() {
    return {
      dataChart: {
        labels: ['females', 'males'],
        datasets: [
          {
            label: 'Patients gender',
            data: [300, 300],
            backgroundColor: ['rgb(54, 162, 235)', '#00cec8'],
            hoverOffset: 4
          }
        ]
      }
    }
  }
}
</script>

<style>
.donutContainer {
}
</style>
