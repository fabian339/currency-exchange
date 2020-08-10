<template>
  <v-container>
    <v-row class="text-center">
      <div id="logo">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="250"
        />
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
      >
        <h2 class="headline font-weight-bold mb-3">
          Latest Exchange:
        </h2>

        <MoneyToMoney fromCurrency='USD' toCurrency='DOP'/>

        <v-row justify="center">
          <a class="subheading mx-3" >
            View More
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
import store from "./store";

export default {
  name: 'Home',
  components: {
    MoneyToMoney
  },
}
</script>

<style scoped>
  #logo {
    margin: -50px 25%;
  }
</style>
