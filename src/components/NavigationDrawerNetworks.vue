<template lang="pug">
  .networks
    v-list(tile): v-list-item.pa-4: v-text-field(
      autofocus
      label="Search"
      placeholder="Search for networks"
      solo
      append-icon="mdi-magnify"
      hide-details
      name="query"
    )
    v-list(v-if="networks.length")
      v-list-item
        v-list-item-icon: v-icon mdi-information-outline
        v-list-item-content
          v-list-item-title City Bikes around the World
          v-list-item-subtitle {{ networks.length }} networks
    v-list(v-if="networks.length")
      v-list-item(v-for="network in networks" :key="network.id" :to="{ name: 'Network', params: { network: network.id } }")
        v-list-item-content
          v-list-item-title {{ network.location.city }}, {{ network.location.country }}
          v-list-item-subtitle(v-text="network.name")
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
  networks: any[] = []

  mounted() {
    axios.get('https://api.citybik.es/v2/networks')
      .then(({ data }) => {
        this.networks = data.networks
        this.$store.commit(
          'map/SET_MARKERS',
          this.networks.map(network => {
            return {
              id: network.id,
              latLng: [
                network.location.latitude,
                network.location.longitude
              ],
              name: `${network.location.city}, ${network.location.country}`,
              onClick: () => this.$router.push(`/network/${network.id}`)
            }
          })
        )
      })
      .catch(error => console.log(error))
  }
}
</script>