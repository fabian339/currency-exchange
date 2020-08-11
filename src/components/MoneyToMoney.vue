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
        <p class="country"> {{ fromCountry.alpha3Code }} </p>

        <v-img
          class="white--text align-end"
          height="50px"
          width="80px"
          v-bind:src="fromCountry.flag"
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
        <p class="country"> {{ toCountry.alpha3Code }} </p>
        <v-img
          class="white--text align-end"
          height="50px"
          width="80px"
          v-bind:src="toCountry.flag"
        />
      </v-col>
    </div>
  </v-card>
</template>

<script>
  // import store from '../store.js'
  export default {
    name: 'MoneyToMoney',
    props: ['fromCountry', 'toCountry'],

    data: () => ({
    })
      
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
