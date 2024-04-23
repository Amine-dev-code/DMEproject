<template>
    <div class="payment-container">
        <p style="font-size: 20px; font-weight: bold; color: rgba(67, 106, 230, 1);">
            Payments
        </p>
        <div class="light" style="display: flex; flex-direction: row; justify-content: space-between;">
            <p>Transaction</p>
            <p>Amount</p>
        </div>
        <div class="payment">
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div class="status" style="margin-right: 10px ;"></div>
                <p>Medicine</p>
            </div>
            <p>2000 DA</p>
        </div>
        <div class="payment">
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div class="status" style="margin-right: 10px ;"></div>
                <p>Appointment</p>
            </div>
            <p>2000 DA</p>
        </div>
        <div class="payment last">
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div class="status" style="margin-right: 10px ;"></div>
                <p>CT scanner</p>
            </div>
            <p>2000 DA</p>
        </div>
        <div class="light" style="display: flex; flex-direction: row; justify-content: space-between; border-top: 1px solid rgba(67, 106, 230, 1);">
            <p>Total</p>
            <p class="dark">6000 DA</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['price', 'expense']
}
</script>
<style>
.payment-container {
    width: 250px; 
    padding: 20px; 
    background-color: rgba(67, 106, 230, 0.1); 
    border-radius: 10px;
}
.status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(7, 219, 7);
}
.payment {
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between; 
    border-bottom: 1px solid rgba(67, 106, 230, 0.5);
    color: rgba(67, 106, 230, 1);
}
.last {
    border: none ;
}
.light {
    color: rgba(67, 106, 230, 0.5);
}
.dark {
    color: rgba(67, 106, 230, 1);
}
</style>