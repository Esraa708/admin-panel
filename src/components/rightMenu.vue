<template>
  <v-navigation-drawer
    :value="menuToggle"
    width="260px"
    app
    right
    color="#17131c"
  >
    <div class="first-sec mt-md-4">
      <div class="company mt-md-5 mb-5">
        <img src="../assets/no-logo.png" alt class="ml-md-4" width="60" />
        <span class="name">اسم المتجر</span>
      </div>
      <a href="#" class="watch mb-3">مشاهده المتجر</a>
      <a href="#" class="specific">تخصيص الواجهه</a>
    </div>
    <v-list class="mt-4">
      <v-list-item link class="tile font py-2 mb-3">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>الرئيسيه</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link class="tile py-2 mb-3">
        <v-list-item-action>
          <v-icon>mdi-chart-pie</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>التقارير</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        prepend-icon="mdi-basket"
        value="true"
        class="tile font py-2 mb-3"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          link
          style="background:#17131c"
        >
          <v-list-item-content class="inner-list">
            <v-list-item-title
              class="items"
              v-text="subItem.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group
        v-for="item in settings"
        :key="item.title"
        v-model="item.active"
        prepend-icon="mdi-cog"
        value="true"
        class="tile font py-2 mb-3"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"> </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          link
          style="background:#17131c"
        >
          <v-list-item-content class="inner-list">
            <v-list-item-title class="items" >
              <router-link to="/settings/payment" class="links">
                {{ subItem.title }}
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    
    </v-list>
  </v-navigation-drawer>
</template>
<style lang="scss">
@import "../assets/sass/colors";

.first-sec {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .company {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
      border-radius: 100px;
    }
    .name {
      font-size: 18px;
      font-weight: bold;
      font-family: "Cairo", sans-serif;
    }
  }
  .watch,
  .specific {
    background-color: $button;
    border-radius: 7px;
    color: #fff;
    font-size: 17px;
    width: 80%;
    text-align: center;
    font-weight: bold;
    font-family: "Cairo", sans-serif;
    padding: 7px;
    text-decoration: none;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    &:hover {
      background-color: $green;
    }
  }
  .specific {
    background-color: $green;
    &:hover {
      background-color: #35836a;
    }
  }

  .watch::before,
  .specific::before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f06e";
    margin-left: 14px;
  }
  .specific::before {
    content: "\f303";
  }
}
.tile {
  background: $menu-item;
  font-size: 20px;
  font-style: normal;
  // &:hover {
  //   background-color: $green;
  // }
}
.fa-chevron-down:before {
  font-size: 17px;
  color: $button;
}
.v-list-item--link:visited {
  background-color: $green;
  color: #fff;
}
.theme--dark.v-list-item {
  background: $menu-item;
}
.theme--dark.v-list-item:hover {
  background-color: $green;
  color: #fff;
}
.items {
  color: #c5bacb;
  font-size: 13px !important;
  padding: 6px 30px;
}
.inner-list {
  background: $main-color;
}
.links{
  text-decoration: none;
  color: #C5BACB;
}
.links:hover{
  cursor: pointer;
}
</style>
<script>
export default {
  name: "RightMenu",
  // props: ["menuToggle"],
  mounted() {
    this.$root.$on("eventing", (data) => {
      console.log(data);
      this.menuToggle = data;
    });
  },
  data: function() {
    return {
      menuToggle: true,
      items: [
        {
          action: "mdi-basket",
          title: "الطلبات",
          text: "hhh",
          items: [
            { title: "الطلبات" },
            { title: "انشاء طلب" },
            { title: "المسودات" },
            { title: "رسائل حالات الطلبات" },
          ],
        },
      ],
      settings: [
        {
          action: "mdi-cog",
          title: "الاعدادات",
          text: "hhh",
          items: [{ title: "الدفع" }],
        },
      ],
    };
  },
};
</script>
