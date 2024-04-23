<template>
    <div>
        <div>
            <div>
                <button>
                    Upcoming appointments
                </button>
                <button>
                    Past appointments
                </button>
            </div>
            <button>
                Add appointment
            </button>
        </div>
        <div class="appointemnts-container">
            <div class="appointment">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['name', 'date', 'time', 'phone']
}
</script>
<style>
.appointemnts-container {
    max-height: 300px;
    overflow-y: auto;
    border: 1px solid black;
    width: 400px ;
}
</style>