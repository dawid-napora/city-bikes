<template lang="pug">
  .network
    v-list(tile): v-list-item.pa-4: v-text-field(
      autofocus
      label="Search"
      :placeholder="`Search for ${network.location.city} stations`"
      solo
      append-icon="mdi-magnify"
      hide-details
      name="query"
    )
    v-list
      v-list-item
        v-list-item-icon: v-btn(icon :to="{ name: 'Index' }"): v-icon mdi-chevron-left
        v-list-item-content(v-if="Object.keys(network).length")
          v-list-item-title {{ network.location.city }}, {{ network.location.country }}
          v-list-item-subtitle.text--primary(v-text="network.name")
          v-list-item-subtitle(v-text="network.stations.length + ' stations'")
        v-list-item-content(v-else): v-skeleton-loader(type="sentences")
    v-list(v-if="network.stations")
      v-list-item(v-for="station in network.stations" :key="station.id" :to="{ name: 'Station', params: { network: network.id, station: station.id } }")
        v-list-item-content
          v-list-item-title {{ station.name }}
          v-list-item-subtitle(v-text="station.free_bikes + ( station.extra.slots ? '/' + station.extra.slots : '' ) + ' bikes'")
        v-list-item-icon: v-icon mdi-chevron-right
    v-list(v-else)
      -for(let i = 0; i < 5; i++)
        v-list-item
          v-list-item-content: v-skeleton-loader(type="sentences")
          v-list-item-icon: v-skeleton-loader(type="button")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import axios from 'axios'

@Component
export default class NavigationDrawerNetworks extends Vue {
  network: any = {}

  mounted() {
    axios.get('https://api.citybik.es/v2/networks/' + this.$route.params.network)
      .then(({ data }) => {
        this.network = data.network
        this.$store.commit(
          'map/SET_MARKERS',
          this.network.stations.length ? this.network.stations.map((station: any) => {
            return {
              id: `${this.network.id}-${station.id}`,
              latLng: [station.latitude, station.longitude],
              name: station.name,
              onClick: () => this.$router.push(`/network/${this.network.id}/station/${station.id}`)
            }
          }) : [{
            id: this.network.id,
            latLng: [
              this.network.location.latitude,
              this.network.location.longitude
            ],
            name: this.network.location.city + ', ' + this.network.location.country,
            onClick: () => void 0
          }]
        )
      })
      .catch(error => console.log(error))
  }
}
</script>