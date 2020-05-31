<template lang="pug">
  .home
    l-map#map(
      ref="map"
      :zoom="zoom"
      :center="center"
      :maxBounds="maxBounds"
      :maxBoundsViscosity="maxBoundsViscosity"
      :minZoom="3"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    )
      l-tile-layer(:url="url")
      l-feature-group(ref="markers")
        l-marker(
          v-for="marker in markers"
          :key="marker.id"
          :lat-lng="marker.latLng"
          :icon="icon"
          @click="marker.onClick"
        )
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LFeatureGroup } from 'vue2-leaflet'

import 'leaflet/dist/leaflet.css'
import { mapGetters } from 'vuex'

@Component({
  components: { LMap, LTileLayer, LMarker, LFeatureGroup },
  computed: {
    ...mapGetters('map', {
      markers: 'getMarkers'
    })
  }
})
export default class HomePage extends Vue {
  url = 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
  zoom = 3
  center = [25, 0]
  bounds!: number[][]
  maxBounds = [[-90,-180], [90,180]]
  maxBoundsViscosity = 1

  markers!: any[]

  icon = L.icon({
    iconUrl: require('@/assets/img/pin.png'),
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })

  zoomUpdated(zoom: number) { this.zoom = zoom }
  centerUpdated(center: number[]) { this.center = center }
  boundsUpdated(bounds: number[][]) { this.bounds = bounds }

  @Watch('markers', { deep: true, immediate: true })
  onMarkersChange() {
    setTimeout(() => {
      const map = this.$refs.map as LMap
      const markers = this.$refs.markers as LFeatureGroup
      if (map.mapObject && markers.mapObject && markers.mapObject.getBounds()) {
        map.mapObject.flyToBounds(markers.mapObject.getBounds(), {
          animate: true,
          padding: [1, 1]
        })
      }
      
    }, 1)
  }
}
</script>

<style>
.home, #map {
  width: 100%;
  height: 100%;

  z-index: 1;
}
</style>
