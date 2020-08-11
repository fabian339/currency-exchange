<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/layout/AppBar';

export default {
  name: 'App',

  components: {
    AppBar,
  },

};
</script>
