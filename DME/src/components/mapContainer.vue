<template>
  <div id="map" class="map-container"></div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export default {
  name: 'MapContainer',
  mounted() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [10,10],
        zoom: 5
      })
    });
  },
};
</script>

<style scoped>
</style>
