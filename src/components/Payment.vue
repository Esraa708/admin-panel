<template>
  <div>
    <BreadCrumbs :items="routesArray" title="طرق الدفع"></BreadCrumbs>
    <div class="hint ma-4">
      <v-row>
        <v-col sm="12">
          <p
            class="px-3"
          >عند تفعيلك لبوابات الدفع الموضحة ادناه، ستتمكن من ربط متجرك الإلكتروني بإحدى تلك البوابات المختلفة. كل بوابة من البوابات لديها إشتراطات معينة لتفعيل حسابك لديهم. خيارات الدفع تتيح لك استقبال المدفوعات الإلكترونية عبر البطاقات الإئتمانية وبعضهم يدعم خيار: مدى، للدفع الإلكتروني سنقوم بربطك الكترونيًا معهم ولكنك بحاجة أيضًا الى تفعيل اشتراكك لديهم وتعبئة النماذج اللازمة.</p>
        </v-col>
      </v-row>
    </div>
    <div class="gates ma-4">
      <v-row>
        <v-col>
          <p class="pt-3 pb-5 px-7 mb-0 gate-pay">بوابات الدفع</p>
        </v-col>
      </v-row>
      <v-row class="pa-5">
        <!-- sec1 -->
        <v-col sm="12" md="6" class="px-7">
          <v-row style="border:1px solid #443550; border-radius:6px" class="pa-5">
            <v-col md="6" class="pr-2">
              <p class="mb-0 par">بوابه تاب</p>
              <span class="activate">يمكنك تفعيل بوابه تاب للدفع</span>
              <a href class="btn mt-xs-5 mt-10">اضغط لمزيد من التفاصيل</a>
            </v-col>
            <v-col
              md="4"
              offset-md="2"
              class="d-flex flex-column justify-start align-end pt-0 pl-0"
            >
              <div class="badage">
                <span>اﻻختيار المفضل</span>
              </div>

              <v-icon class="mr-2 circle">mdi-circle</v-icon>
            </v-col>
          </v-row>
        </v-col>
        <!-- sec2 -->
        <v-col sm="12" md="6" class="px-7">
          <v-row style="border:1px solid #443550; border-radius:6px" class="pa-5">
            <v-col sm="6" class="pr-2">
              <p class="mb-0 par">بوابات دفع اخرى</p>
              <span class="activate">من هنا يمكنك تفعيل بوابات اخرى</span>
              <a href class="btn mt-xs-5 mt-10">اضغط لمزيد من التفاصيل</a>
            </v-col>
            <v-col
              md="4"
              offset-md="2"
              class="d-flex flex-column justify-start align-end pt-0 pl-0"
            >
              <v-icon class="mr-2 ml-5 mt-6 circle">mdi-circle</v-icon>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="apple pb-md-10">
        <div class="comp-logo ml-md-5">
          <img src="../assets/apple-pay-logo.svg" />
        </div>
        <p class="mb-0 txt ml-md-5">يمكنك الان تفعيل Apple Pay في متجرك</p>
        <a href class="btn more">اضغط لمعرفه المزيد</a>
      </div>
    </div>
    <div class="gates ma-4 mt-10">
      <v-row class="pa-5 mb-5 mb-md-9" no-gutters style="border-bottom:1px solid #443550;">
        <v-col md="2">
          <p class="pt-3 pb-5 px-7 mb-0 gate-pay">التحويل البنكى</p>
        </v-col>
        <v-col md="2" offset-md="8">
          <a href="#" class="mt-md-2 add">اضافه حساب جديد</a>
        </v-col>
      </v-row>
      <div v-for="bank in banks" :key="bank.id" class="banks">
        <Transfere :bankData="bank" @bankId="deleteBank"></Transfere>
      </div>
    </div>
    <v-row>
      <v-col class="d-flex flex-column justify-start align-center">
        <a href="#" class="more-pay">
          لمعرفه المزيد عن الدفع
          <v-icon class="mr-2 help">mdi-help</v-icon>
        </a>
      </v-col>
    </v-row>
    <footer class="mt-5 mt-md-10 d-flex flex-column justify-start align-center">
      <p>
        Copyright
        <span>Zid App</span> © 2016-2020
      </p>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/colors";

.hint {
  min-height: 50px;
  color: #8c5da7;
  background-color: rgba(117, 75, 136, 0.21);
  border-radius: 2.2rem;
  border-color: transparent;
  font-weight: 100;
  font-size: 1rem;
  padding: 6px;
}
.gates {
  min-height: 250px;
  background-color: $content;
  border-radius: 1rem;
  border-color: transparent;
  .gate-pay {
    font-size: 1.1rem;
    font-weight: bold;
    color: #fff;
  }
  .par {
    font-size: 16px;
    font-weight: bold;
  }
  .activate {
    font-family: serif;
    color: #d4ccde;
    font-size: 14px;
  }
  .btn {
    display: block;
    background: $button;
    padding: 6px 15px 6px 0px;
    color: #fff;
    text-decoration: none;
    border-radius: 9px;
    width: 214px;
  }
  .circle {
    color: #443550;
    font-size: 4rem;
  }
  .badage {
    background-color: rgba(118, 97, 129, 0.25);
    color: rgba(255, 255, 255, 0.45);
    font-size: 15px;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 5px;
    width: 125px;
  }
  .more {
    background: $green;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 25px;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    color: #fff;
    text-decoration: none;
  }
}
.apple {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .comp-logo {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0);
    padding: 5px;
    border-radius: 5px;
    background-color: #fff;
    width: 84px;
    height: 47px;
    height: auto;
    text-align: center;
  }
  .txt {
    color: #6c627a;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
  }

  .transfere {
    background-color: $content;
    min-height: 300px;
  }
}
.add {
  background: $green;
  font-size: 16px;
  font-weight: 600;
  display: block;
  padding: 11px 25px;
  border-radius: 5px;
  transition: all 0.3s ease;
  color: #fff;
  text-decoration: none;
  width: 181px;
}
.banks:last-of-type .row {
  border-bottom: none;
}
.more-pay {
  color: $text;
  font-weight: 600;
  padding: 6px 19px;
  border: 1px solid $text;
  border-radius: 5px;
  transition: all 0.3s ease;
  border-color: $text;
  text-decoration: none;
  display: block;
  .help {
    color: $text;
    font-size: 1.3rem;
  }
  &:hover {
    color: #fff;
    background: $button;
    .help {
      color: #fff;
    }
  }
}
footer {
  color: #5d5468;
  font-weight: 100;
  span {
    font-weight: bold;
  }
}
</style>

<script>
import BreadCrumbs from "./BreadCrumbs";
import Transfere from "./Transfere";
import { banks } from "../banks";
export default {
  name: "Payment",
  mounted() {
    let routes = this.$route.path.split("/");
    this.banks = banks;
    routes.shift();
    this.routes = routes;
    this.routes.forEach((route) => {
      this.routesArray.push({
        text: route,
        disabled: false,
        href: "/" + route,
      });
    });
    this.routesArray[this.routesArray.length - 1].disabled = true;
    console.log(banks);
  },
  components: {
    BreadCrumbs,
    Transfere,
  },
  data() {
    return {
      routes: [],
      routesArray: [],
      banks: [],
    };
  },
  methods: {
    deleteBank(id) {
      console.log(id);
      let index=this.banks.findIndex(ele =>ele.id == id)
      this.banks.splice(index,1);
      console.log(this.banks);
    },
  },
};
</script>

