<template>
    <div class="slider">
        <div class="doctor">
            <h1>
                Slider 1
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto perferendis a cupiditate excepturi mollitia quasi exercitationem eligendi assumenda ipsa error expedita natus obcaecati delectus corporis, sit animi adipisci itaque suscipit non consequuntur pariatur tempora. Consequuntur 
            </p>
        </div>
        <div class="doctor">
            <h1>
                Slider 2
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto perferendis a cupiditate excepturi mollitia quasi exercitationem eligendi assumenda ipsa error expedita natus obcaecati delectus corporis, sit animi adipisci itaque suscipit non consequuntur pariatur tempora. Consequuntur 
            </p>
        </div>
        <div class="doctor">
            <h1>
                Slider 3
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iusto perferendis a cupiditate excepturi mollitia quasi exercitationem eligendi assumenda ipsa error expedita natus obcaecati delectus corporis, sit animi adipisci itaque suscipit non consequuntur pariatur tempora. Consequuntur 
            </p>
        </div>
        <button id="prev">
            <
        </button>
        <button id="next">
            >
        </button>
    </div>
</template>

<script>
export default {
    props:['name'],
    data() {
        return {

        };
    },
    created() {
        const script = document.createElement('script');
        script.src = '/Users/edyrr/dmee/DMEproject/DME/src/views/drls.js';
        document.head.appendChild(script);
  }
}
</script>

<style>
.slider {
    position: relative;
    width: 100%;
    height: 370px;
    overflow: hidden;
}
.doctor {
    position: absolute;
    width: 200px;
    height: 320px;
    text-align: justify;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    transition: 0.5s;
    left: calc(50% - 110px);
    top: 0;
}
#prev, #next {
    position: absolute;
    top: 40%;
    color: white;
    background-color: transparent;
    border: none;
    font-size: xx-large;
    font-family: sans-serif;
    font-weight: bold;
    left: 50px;
}
#next {
    left: unset ;
    right: 50px;
}
</style>