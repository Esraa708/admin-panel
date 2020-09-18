<template>
  <v-app id="inspire" style="
  background: #17131c;">
    <!-- <RightMenu :menuToggle="drawer"></RightMenu> -->
    <RightMenu></RightMenu>

    <AppBar></AppBar>

    <v-main>
      <v-container class="pa-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
   
   
  </v-app>
</template>
<style lang="scss" >
@import "../src/assets/sass/colors";
body {
  background-color: $main-color;
}
h1 {
  color: $green;
}
</style>
<script>
import RightMenu from "./components/rightMenu";
import AppBar from "./components/AppBar";
export default {
  name: "mainPage",
  props: {
    source: String,
  },
  components: { RightMenu, AppBar },
  data: () => ({
    // drawer: false,
  }),
};
</script>
