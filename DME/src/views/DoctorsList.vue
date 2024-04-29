<template>
  
    <div class="slider">
        <div class="doctor">
            <h1>Slide 1</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="doctor">
            <h1>Slide 2</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="doctor">
            <h1>Slide 3</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="doctor">
            <h1>Slide 4</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="doctor">
            <h1>Slide 5</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="doctor">
            <h1>Slide 6</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <div class="doctor">
            <h1>Slide 7</h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit molestiae officiis!
        </div>
        <button id="next">></button>
        <button id="prev"><</button>
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
        // const script = document.createElement('script');
        // script.src = '/Users/edyrr/dmee/DMEproject/DME/src/views/drls.js';
        // document.head.appendChild(script);
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