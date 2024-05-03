<template>
  <div class="slider">
    <div
      v-for="(doctor, index) in doctors"
      :key="doctor.id"
      class="doctor"
      :style="doctorStyle(index)"
      @click="handleClick(index)"
    >
      <h1>{{ doctor.name }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam
        repudiandae explicabo expedita labore, sequi minus neque beatae voluptatum, quasi accusamus
        quia quis voluptas laborum ad! Ab totam doloribus, excepturi possimus rem vel quia fugit
        molestiae officiis!
      </p>
    </div>
    <button id="prev" @click.prevent="prev">Previous</button>
    <button id="next" @click.prevent="next">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      doctors: [
        { id: 1, name: 'doc 1' },
        { id: 2, name: 'doc 2' },
        { id: 3, name: 'doc 3' }
      ]
    }
  },
  methods: {
    calculateZIndex(index) {
      return index === this.activeIndex ? 1 : -Math.abs(index - this.activeIndex)
    },
    doctorStyle(index) {
      const isActive = index === this.activeIndex
      const stt = Math.abs(index - this.activeIndex)
      const transform = isActive
        ? 'none'
        : `translateX(<span class="math-inline">\{120 \* stt\}px\) scale\(</span>{1 - 0.2 * stt}) perspective(16px) rotateY(${isActive ? 0 : stt > 2 ? -1 : 1}deg)`
      const zIndex = isActive ? 1 : -stt
      const filter = isActive ? 'none' : 'blur(10px)'
      const opacity = isActive ? 1 : stt > 2 ? 0 : 0.2

      return {
        transform,
        zIndex,
        filter,
        opacity,
        cursor: isActive ? 'default' : 'pointer' // Add cursor pointer on hover
      }
    },
    handleClick(index) {
      this.activeIndex = index

      // Option 1: Inline Animation Update
      const items = document.querySelectorAll('.slider .doctor')
      let stt = 0
      for (var i = this.activeIndex + 1; i < items.length; i++) {
        stt++
        items[i].style.transform =
          `translateX(<span class="math-inline">\{120\*stt\}px\) scale\(</span>{1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`
        items[i].style.zIndex = -stt
        items[i].style.filter = 'blur(5px)'
        items[i].style.opacity = stt > 2 ? 0 : 0.6
      }
      stt = 0
      for (i = this.activeIndex - 1; i >= 0; i--) {
        stt++
        items[i].style.transform =
          `translateX(<span class="math-inline">\{\-120\*stt\}px\) scale\(</span>{1 - 0.2*stt}) perspective(16px) rotateY(1deg)`
        items[i].style.zIndex = -stt
        items[i].style.filter = 'blur(5px)'
        items[i].style.opacity = stt > 2 ? 0 : 0.6
      }

      // Option 2: External Animation Update (using slider.js)
      // Import slider.js (not shown here)
      // slider.loadShow(items, this.activeIndex);
    },
    next() {
      this.activeIndex = (this.activeIndex + 1) % this.doctors.length
    },
    prev() {
      this.activeIndex = (this.activeIndex - 1 + this.doctors.length) % this.doctors.length
    }
  }
}
</script>
<style scoped>
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
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
#prev,
#next {
  position: absolute;
  top: 50%;
  color: white;
  background-color: transparent;
  border: none;
  font-size: xx-large;
  font-family: sans-serif;
  font-weight: bold;
  transform: translateY(-50%);
  z-index: 2;
}
#prev {
  left: 20px;
}
#next {
  right: 20px;
}
</style>
