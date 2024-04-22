<template>
    <h1 style="text-align: center;">
        Book an appointment
    </h1>
<form action="post" style="display: flex; flex-direction: column; justify-content:space-between; gap:10px ; align-items:center;">
    <select class="input-style" style="width: 22vw;">
        <option value="">pick a doctor</option>
        <option value="name">{{ name }}</option>
    </select>
    <label for="date"></label>
    <input type="date" class="input-style" name="date">
    <label for="time"></label>
    <input type="time" class="input-style" name="time">
    <button type="submit" @click.prevent class="booking-btn" >
        Book an appointment
    </button>
</form>
</template>
<script>
export default {
    props:['name'],
    data() {
        return {
            //data for doctor
        };
    }
}
</script>

<style>
.input-style {
    width: 20vw; /* Adjust the width as needed */
    height: 40px;
    /*background-color: rgba(0, 206, 200, 0.1);*/
    border: 2px solid #00cec8;
    border-radius: 10px;
    padding: 0 10px; /* Add padding to the input field */
    line-height: 40px; /* Ensure the input field height matches the button */
    overflow: hidden;
    color: rgba(67, 106, 230, 0.5);
}
.booking-btn {
    width: 15vw; 
    background-color: rgba(67, 106, 230, 1);
    color:white ; 
    border: none; 
    border-radius: 10px ; 
    height: 40px ;
    margin-top: 10px ;
}
.booking-btn:hover {
    background-color: rgba(67, 106, 230, 0.8);
}
.booking-btn:active {
    background-color: rgba(67, 106, 230, 0.5);
}
</style>