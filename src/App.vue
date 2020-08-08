<template>
  <v-app>
    <AppBar />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import AppBar from './components/layout/AppBar';

export default {
  name: 'App',

  components: {
    AppBar,
    // HelloWorld
  },

  data: () => ({
    //
  }),
};
</script>
