<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      color: white;
      font-family: sans-serif;
      background-color: #00cec8;
      border-radius: 10px;
      height: auto;
      align-items: center;
      padding-top: 30px;
      padding-bottom: 30px;
      width: 120px;
      justify-content: space-between;
    "
  >
    <div>{{ formattedTime }}</div>
    <hr style="width: 80%; border: 1px solid white;"/>
    <div>{{ formattedDate }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formattedDate: '',
      formattedTime: ''
    }
  },
  methods: {
    updateDateTime() {
      const currentDate = new Date()

      // Get the date components
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1 // Months are zero-based
      const year = currentDate.getFullYear()

      // Get the time components
      const hours = currentDate.getHours()
      const minutes = currentDate.getMinutes()

      // Format the date and time
      this.formattedDate = `${day}/${month}/${year}`
      this.formattedTime = `${hours}:${minutes}`
    }
  },
  mounted() {
    // Call the function once when the component is mounted
    this.updateDateTime()

    // Update the date and time every second
    this.timer = setInterval(this.updateDateTime, 1000)
  },
  beforeUnmount() {
    // Changed from beforeDestroy to beforeUnmount
    // Clear the interval when the component is destroyed to prevent memory leaks
    clearInterval(this.timer)
  }
}
</script>
