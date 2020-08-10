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
        <p class="country"> {{fromCurrency}} </p>
      </v-col>
    
      <v-btn icon color="green" :large="true">
        <v-icon>mdi-cached</v-icon>
      </v-btn>

      <v-col cols="4">
        <v-text-field
          label="Amount"
          value="1.00"
          prefix="$"
          type="number"
        ></v-text-field>
        <p class="country"> {{toCurrency}} </p>
      </v-col>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'MoneyToMoney',
    props: ['fromCurrency', 'toCurrency'],

    data: () => ({
    })
      
  }
</script>

<style scoped>
  .country {
    font-size: 35px;
  }
  .cardContainer {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
