<template>
  <table>
    <tr class="table-header">
      <th>NAME</th>
      <th>BIRTHDAY</th>
      <th>GENDER</th>
      <th>ADDRESS</th>
      <th>PHONE NUMBER</th>
    </tr>
    <tr>
      <td>idir ouldkhaoua</td>
      <td>2003-08-23</td>
      <td>Sigma</td>
      <td>FOCKING</td>
      <td>twdrly a36ini ta3k</td>
    </tr>
  </table>
</template>
<script>
export default {
  props: ['name', 'birthday', 'gender', 'address', 'phone']
}
</script>
<style>
table {
  font-family: sans-serif;
  border-collapse: collapse;
  width: 70%;
  background-color: rgba(0, 206, 200, 0.1);
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
