<template>
  <v-card
    class="mx-auto"
    max-width="344"
    color="#E0FFFF"
  >
    <div class="cardContainer">
      <v-col cols="4">
        <v-text-field
          label="Amount"
          value="1.00"
          prefix="$"
          type="number"
        ></v-text-field>
        <p class="country"> {{ country1.alpha3Code }} </p>

        <v-img
          class="white--text align-end"
          height="50px"
          width="80px"
          v-bind:src="country1.flag"
        />
      </v-col>
    
      <v-btn icon color="green" :x-large="true">
        <v-icon>mdi-cached</v-icon>
      </v-btn>

      <v-col cols="4">
        <v-text-field
          label="Amount"
          value="1.00"
          prefix="$"
          type="number"
        ></v-text-field>
        <p class="country"> {{ country2.alpha3Code }} </p>
        <v-img
          class="white--text align-end"
          height="50px"
          width="80px"
          v-bind:src="country2.flag"
        />
      </v-col>
    </div>
  </v-card>
</template>

<script>
  // import store from '../store.js'
  import axios from 'axios'
  export default {
    name: 'MoneyToMoney',
    props: ['fromCountry', 'toCountry'],
    data: () => ({
      country1: {},
      country2: {}
    }),
    created() {
    this.getCountry(this.fromCountry, 'first');
    this.getCountry(this.toCountry, 'second');
  },
  methods: {
    getCountry(code, countryN){
      axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
        .then(res => {
          const { name, alpha3Code, flag } = res.data;
          if(countryN === 'first') this.country1 = { name , alpha3Code, flag};
          if(countryN === 'second') this.country2 = { name , alpha3Code, flag};
        })
        .catch(err => console.log(err));
      }
    }   
  }
</script>

<style scoped>
  .country {
    font-size: 35px;
    text-align: initial;
  }
  .cardContainer {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
