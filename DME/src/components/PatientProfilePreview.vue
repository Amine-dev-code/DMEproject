<template>
    <div class="profile-preview-container">
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
                {{ name }} ouldkhaoua Idir
            </p>
            <p>
                {{ gender }} Male
            </p>
            <p>
                {{ bloodType }} A+
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
.profile-preview-container {
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    width: 20vw; 
    background-color: white; 
    border-radius: 10px; 
    border: 2px  solid #00cec8; 
    padding: 10px ; 
    color : #2a4b66;
    height: min-content;
}
</style>