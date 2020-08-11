<template>
  <v-container>
    <v-row class="text-center">
      <div id="logo" >
        <img :src="require('../assets/logo.png')" alt="logo" width="400">
      </div>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Dr. PESO
        </h1>

        <p class="subheading font-weight-regular">
          Money Exchange for over 50+ countries...
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
         style="marginTop: -30px"
      >
        <h2 class="headline font-weight-bold mb-3">
          Latest Exchange:
        </h2>
        <!-- <p> {{store.countries}} </p> -->
        <v-container class="grey lighten-5">
          <v-row no-gutters>
            <v-col order="last">
              <MoneyToMoney  :fromCountry="fromCountryUSA" :toCountry="toCountryDOM" />
            </v-col>
            <v-col>
              <MoneyToMoney  :fromCountry="fromCountryUSA" :toCountry="toCountryCHN" />     
            </v-col>
          <v-col order="first">
              <MoneyToMoney  :fromCountry="fromCountryUSA" :toCountry="toCountryGBR" />
          </v-col>
        </v-row>
      </v-container>

        <v-row justify="center">
          <a class="subheading mx-3" >
            View More...
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What if we know when is the right time to exchange?
        </h2>

        <v-row justify="center">
          <a class="subheading mx-3" >
            Explore More...
          </a>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import MoneyToMoney from '@/components/MoneyToMoney.vue'
import axios from 'axios'

// import {getCountry} from "../store.js";

export default {
  name: 'Home',
  components: {
    MoneyToMoney
  },
  data: () => ({
    fromCountryUSA: {},
    toCountryDOM: {},
    toCountryCHN: {},
    toCountryGBR: {},
    //
  }),
  created() {
    this.getCountry('USA');
    this.getCountry('DOM');
    this.getCountry('CHN');
    this.getCountry('GBR');

  },
  methods: {
    getCountry(code){
      axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
          .then(res => {
            // console.log(code)
            const { name, alpha3Code, flag } = res.data;
            if (code === 'USA') this.fromCountryUSA = { name , alpha3Code, flag};
            if (code === 'DOM') this.toCountryDOM = { name , alpha3Code, flag};
            if (code === 'CHN') this.toCountryCHN = { name , alpha3Code, flag};
            if (code === 'GBR') this.toCountryGBR = { name , alpha3Code, flag};
          })
          .catch(err => console.log(err));
    }
  },
}
</script>

<style scoped>
  #logo {
    width: 100%;
    height: 190px;
    margin-top: -25px;
  }
</style>
