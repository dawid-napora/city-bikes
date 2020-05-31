<template lang="pug">
  v-app-bar(app clipped-left color="white")
    v-app-bar-nav-icon(@click="toggleNav")
    v-toolbar-title City Bikes
    v-spacer
    v-btn(icon href="https://github.com/dawnap/city-bikes" target="_blank" rel="noopener"): v-icon mdi-github
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppBar extends Vue {
  toggleNav() { this.$store.dispatch('navigation/toggle') }
}
</script>
