<template>
    <div class="appointment-preview-container">
        <p>
            date: {{ date }}
        </p>
        <p>
            time: {{ time }}
        </p>
    </div>
</template>

<script>
export default {
props: ['date', 'time']
}
</script>

<style>
.appointment-preview-container {
    height: min-content;
    width: 100%;
    border-radius: 10px;
    border: 2px solid #00cec8;
    color: #2a4b66;
    display:inline-flex;
    flex-direction: column;
    align-items: left;
}
.appointment-preview-container > p {
    padding-left: 10px;
}
</style>