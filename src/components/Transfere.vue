<template>
  <v-row class="px-10 py-4 border-btm" style no-gutters>
    <v-col md="5" class="pb-3">
      <p class="name mb-0">{{bankData.name}}</p>
    </v-col>
    <v-col md="1" offset-md="6" class="d-flex justify-end">
      <a class="icons">
        <v-icon class="mr-2 circle">mdi-pencil</v-icon>
      </a>
      <a class="icons" @click.stop="emitId(bankData.id)">
        <v-icon class="mr-2 circle">mdi-trash-can-outline</v-icon>
      </a>
    </v-col>
    <v-row>
      <v-col class="d-flex flex-row flex-wrap pt-0">
        <div class="photo">
          <img :src="x(bankData.img)" alt class width="100" />
        </div>
        <div class="details mr-5">
          <p class="mb-2">المالك : {{bankData.owner}}</p>
          <p class="mb-2">رقم الحساب : {{bankData.accountNum}}</p>
          <p class="mb-2">اﻻيبان : {{bankData.ipan}}</p>
        </div>
      </v-col>
    </v-row>
  </v-row>
</template>
<style lang="scss" scoped>
@import "../assets/sass/colors";
.border-btm {
  border-bottom: 1px solid #443550;
}
.name {
  font-weight: bold;
  font-size: 1.1rem;
}
.icons {
  text-decoration: none;
  .circle {
    color: #665669;
  }
}
.photo {
  border: 1px solid #ffffff;
  padding: 5px;
  background: #ffffff;
  border-radius: 10px;
  img {
    display: inline-block;
  }
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #665669;
  font-size: 1rem;
}
</style>
<script>
export default {
  name: "Transfere",
  props: {
    bankData: Object,
  },
  methods: {
    emitId(id) {
      this.$emit("bankId", id);
    },
     x (iconName) {
        return iconName ? require(`../assets/${iconName}`) : ''
    }
  },
};
</script>