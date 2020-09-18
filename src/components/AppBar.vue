<template>
  <v-app-bar app color="#302539" class="bar" height="83"  extended extension-height="0" no-gutters>
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
    <v-row no-gutters>
      
      <v-col sm="2" md="4" class="d-flex flex-row">
        <v-app-bar-nav-icon @click.stop="clickToggle()"></v-app-bar-nav-icon>
        <div class="d-none d-md-flex flex-row justifiy-center align-center">
          <v-icon class="mr-2">mdi-clock</v-icon>
          <span class="time mr-2">الساعه 8:38 صباحا بتوقيت الرياض</span>
        </div>
      </v-col>
      <v-col sm="8" md="4" offset-sm="2" offset-md="4" class="d-flex flex-row align-center">
        <form action style="position:relative">
          <input type="text" name="search" id="search" placeholder="ابحث هنا" class="search" />
          <i class="fas fa-search search-icon"></i>
        </form>
        <div class="log-out">
          <a href="#" class="mr-2">تسجيل خروج</a>
          <i class="fas fa-sign-out-alt mr-2"></i>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
<style lang="scss" scoped>
.bar {
  box-shadow: none;
  .time {
    font-size: 17px;
  }
  form {
    width: 67%;
  }
  .search {
    background: #5a5068;
    color: #d4cce0;
    border: 1px solid #5a5068;
    border-radius: 50px;
    width: 100%;
    height: 44px;
    padding: 7px 18px;
    padding-left: 40px;
    font-size: 13px;
    outline: none;
    transition: all 0.3s ease;
  }
  .search-icon{
    position: absolute;
    left: 6%;
    top: 32%;
    font-size: 21px;
    // content: "\f002";
    // font-family: "Font Awesome 5 Free";
    // font-weight: 900;
    // color: #fff;
    // font-size: 50px;
  }
  .log-out {
    color: #fff;
    margin-left: 21px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    a,
    i {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
    i {
      font-size: 18px;
    }
  }
}
</style>
<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    clickToggle() {
      this.drawer = !this.drawer;
      this.$root.$emit("eventing", this.drawer);
    },
  },
};
</script>