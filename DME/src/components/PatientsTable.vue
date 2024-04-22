<template>
  <!-- <div class="patients-container">
  <table class="patients-table">
    <thead class="table-header">
        <th>NAME</th>
        <th>BIRTHDAY</th>
        <th>GENDER</th>
        <th>ADDRESS</th>
        <th>PHONE NUMBER</th>
        <th>EMAIL ADDRESS</th>
    </thead>
    <a href="https://www.youtube.com/feed/subscriptions" style="display: table-row;">
      <tr>
        <td>idir ouldkhaoua</td>
        <td>2003-08-23</td>
        <td>Sigma</td>
        <td>FOCKING</td>
        <td>twdrly a36ini ta3k</td>
        <td>twdrly a36ini ta3k</td>
      </tr>
    </a>
    <tr>
      <td>idir ouldkhaoua</td>
      <td>2003-08-23</td>
      <td>Sigma</td>
      <td>FOCKING</td>
      <td>twdrly a36ini ta3k</td>
      <td>twdrly a36ini ta3k</td>
    </tr>
    <tr>
      <td>idir ouldkhaoua</td>
      <td>2003-08-23</td>
      <td>Sigma</td>
      <td>FOCKING</td>
      <td>twdrly a36ini ta3k</td>
      <td>twdrly a36ini ta3k</td>
    </tr>
    <tr>
      <td>idir ouldkhaoua</td>
      <td>2003-08-23</td>
      <td>Sigma</td>
      <td>FOCKING</td>
      <td>twdrly a36ini ta3k</td>
      <td>twdrly a36ini ta3k</td>
    </tr>
    <tr>
      <td>idir ouldkhaoua</td>
      <td>2003-08-23</td>
      <td>Sigma</td>
      <td>FOCKING</td>
      <td>twdrly a36ini ta3k</td>
      <td>twdrly a36ini ta3k</td>
    </tr>
  </table>
</div> -->
<div class="patients-container">
  <div class="table">
    <a class="table-header">
      <div class="header-cell">NAME</div>
      <div class="header-cell">BIRTHDAY</div>
      <div class="header-cell">GENDER</div>
      <div class="header-cell">ADDRESS</div>
      <div class="header-cell">PHONE NUMBER</div>
      <div class="header-cell">EMAIL ADDRESS</div>
    </a>
    <a class="table-row" href="https://www.youtube.com/feed/subscriptions">
      <div class="table-cell">idir ouldkhaoua</div>
      <div class="table-cell">2003-08-23</div>
      <div class="table-cell">Sigma</div>
      <div class="table-cell">FOCKING</div>
      <div class="table-cell">twdrly a36ini ta3k</div>
      <div class="table-cell">twdrly a36ini ta3k</div>
    </a>
    <a class="table-row" href="your_link_here">
      <div class="table-cell">idir ouldkhaoua</div>
      <div class="table-cell">2003-08-23</div>
      <div class="table-cell">Sigma</div>
      <div class="table-cell">FOCKING</div>
      <div class="table-cell">twdrly a36ini ta3k</div>
      <div class="table-cell">twdrly a36ini ta3k</div>
    </a>
    <a class="table-row" href="your_link_here">
      <div class="table-cell">idir ouldkhaoua</div>
      <div class="table-cell">2003-08-23</div>
      <div class="table-cell">Sigma</div>
      <div class="table-cell">FOCKING</div>
      <div class="table-cell">twdrly a36ini ta3k</div>
      <div class="table-cell">twdrly a36ini ta3k</div>
    </a>
</div>
</div>
</template>
<script>
export default {
  props: ['name', 'birthday', 'gender', 'address', 'phone', 'email']
}
</script>
<style>
.patients-container {
  max-height: 300px; /* Set max height for the scrollable area */
  overflow-y: auto;
  position: absolute;
  left: 200px ;
}

.table {
  display: table; /* Ensure the table fills its container */
  table-layout: fixed; /* Fix the table layout */
  border-collapse: collapse;
  font-family: sans-serif;
  border-collapse: collapse;

}
.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  color: rgba(67, 106, 230, 1);
  padding: 8px;
  border-bottom: 1px solid rgba(0, 206, 200, 1);
}

.table-row:hover {
  background-color: rgba(0, 206, 200, 0.1); /* Optional: Add hover effect */
}
.table-header {
  background-color: rgba(0, 206, 200, 0.3); /* Optional: Add hover effect */
  display: table-row;
}
.header-cell {
  display: table-cell;
  color: #2a4b66;
  padding: 8px;
  border-bottom: 1px solid rgba(0, 206, 200, 1);
}
</style>
