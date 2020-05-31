<template lang="pug">
  v-navigation-drawer(app clipped width="400" v-model="navigationModel")
    router-view(name="sidebar" :key="$route.fullPath")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavigationDrawer extends Vue {
  get navigationModel() { return this.$store.state.navigation.model }
  set navigationModel(model) { this.$store.commit('navigation/SET', model) }
}
</script>
