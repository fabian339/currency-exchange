import Vue from "vue";
const state = Vue.observable({ countries: [] });
// export const increment = () => state.counter++;
export const setCountries = (countries) => {
          console.log('This that Data on state=>' , countries);

    state.countries = countries;
}
export default state;