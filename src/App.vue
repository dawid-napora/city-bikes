<template lang="pug">
  v-app
    app-bar
    navigation-drawer
    v-content: router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AppBar: () => import('@/components/AppBar.vue'),
    NavigationDrawer: () => import('@/components/NavigationDrawer.vue')
  }
})
export default class App extends Vue {
  navigation = true

  toggleNav() {
    this.navigation = !this.navigation
  }
}
</script>
