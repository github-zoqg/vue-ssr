<template>
  <div>
    <h1>About page</h1>
    <div>
      {{ getCount }}
    </div>
    <button @click="$store.commit('setCount', 123)">Increment</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "About",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCount"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      console.log("init about page");
      await this.$store.dispatch("getUserInfo", 123);
      console.log("getUserInfo", this.$store.getters.getUserInfo);
    },
  },
};
</script>

<style lang="scss" scoped></style>
