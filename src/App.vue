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
// import HelloWorld from './components/HelloWorld';
import AppBar from './components/layout/AppBar';
import { setCountries } from "./store";

import axios from 'axios'
export default {
  name: 'App',

  components: {
    AppBar,
    // HelloWorld
  },

  data: () => ({
    //
  }),
  created() {
    axios.get('https://restcountries.eu/rest/v2')
    .then(res => {
      setCountries(res.data);
    })
    .catch(err => console.log(err))
  },
};
</script>
