<template>
    <div class="appointments-container">
    <table class="appointments-table">
      <thead class="table-header">
        <th>NAME</th>
        <th>DATE</th>
        <th>TIME</th>
        <th>PHONE NUMBER</th>
      </thead>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>{{ name }}</td>
        <td>{{ date }}</td>
        <td>{{ time }}</td>
        <td>{{ phone }}</td>
      </tr>
    </table>
</div>

  </template>
  <script>
  export default {
    props: ['name', 'date', 'time', 'phone']
  }
  </script>
  <style>
  .appointments-container {
    max-height: 200px; /* Set max height for the scrollable area */
    overflow-y: auto; /* Enable vertical scrolling */
  }
  .appointments-table{
    width: 100%; /* Ensure the table fills its container */
    table-layout: fixed; /* Fix the table layout */
    border-collapse: collapse;
    font-family: sans-serif;
    background-color: rgba(0, 206, 200, 0.1);
  }
  .appointments-table thead {
    position: sticky; /* Make the header sticky */
    top: 0; /* Stick the header to the top */
    background-color: rgba(0, 206, 200, 1); /* Optional: Add background color for header */
    z-index: 1; 
  }
  .table-header {
    height: 50px;
  }
  th {
    color: #2a4b66;
    text-align: left;
    padding: 8px;
  }
  tr {
    height: 40px;
    border-bottom: 1px solid rgba(0, 206, 200, 1);
  }
  td {
    color: rgba(67, 106, 230, 1);
    text-align: left;
    padding: 8px;
  }
  </style>
  