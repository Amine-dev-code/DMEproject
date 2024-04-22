<template>
    <div style=" margin-top: 118px ;display: flex; flex-direction: row; justify-content: space-between; width: 20vw; background-color: rgba(0, 206, 200, 0.1); border-radius: 10px; border: 2px  solid #00cec8; padding: 10px ; height: 41vh;">
        <div style="display: flex; flex-direction: column;">
            <p class="name">
                name: 
            </p>
            <p class="gender">
                gender: 
            </p>
            <p class="blood">
                blood type: 
            </p>
            <p class="birthday">
                birth date: 
            </p>
            <p class="phone">
                phone number: 
            </p>
            <p class="address">
                address:
            </p>
        </div>
        <div style="display: flex; flex-direction: column;">
            <p>
                {{ name }}
            </p>
            <p>
                {{ gender }}
            </p>
            <p>
                {{ bloodType }}
            </p>
            <p>
                {{ birthday }}
            </p>
            <p>
                {{  phone }}
            </p>
            <p>
                {{ address }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['name', 'gender', 'phone', 'blood-type', 'birthday', 'address']
}
</script>
<style>
</style>