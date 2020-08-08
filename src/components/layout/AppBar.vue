<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Dr. Peso</v-toolbar-title>


      <v-spacer></v-spacer>

    <v-btn to="/" text>
        <span>Home</span>
    </v-btn>

    <v-btn to="/profile" text>
        <span>Login</span>
    </v-btn>

    <v-btn to="/exchange" text>
        <span>Best time to exchange?</span>
    </v-btn>

    <v-btn to="/documentation" text>
        <span>Documentation</span>
    </v-btn>
    
    <v-btn to="/about" text>
        <span>About</span>
    </v-btn>
      
    </v-app-bar>
</template>

<style scoped>

</style>