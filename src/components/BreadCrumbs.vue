<template>
  <div class="pay px-10 py-5">
    <v-row>
      <v-col sm="12">
        <span class="way"> {{title}}</span>
        <v-breadcrumbs :items="items" class="pt-1">
          <template v-slot:divider>
            <v-icon class="chev">mdi-chevron-left</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.v-breadcrumbs a {
  color: #44a787 !important;
  text-decoration: underline;
  font-weight: 600px;
  font-size: 1.1rem;
}
.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,
.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled {
  color: rgba(255, 255, 255, 0.5) !important;
  text-decoration: none;
}
</style>
<style lang="scss" scoped>
@import "../assets/sass/colors";
.pay {
  background: $header;
  width: 100%;
  min-height: 150px;
  .way {
    display: block;
    font-size: 20px;
    margin-bottom: 7px;
    color: $text;
 .chev{
     font-size: 9px;
 }
  }
}
</style>


<script>
export default {
  name: "BreadCrumbs",
  data() {
    return {};
  },
  props: {
    items: Array,
    title:String
  },
};
</script>
