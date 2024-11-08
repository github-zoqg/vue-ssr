<template>
  <div>
    <h1>Home Page</h1>
    <div>
      {{ $store.state.defaultPageSize }}
    </div>
    <button @click="$router.push('/about')">router-push</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log("init home");
    },
  },
};
</script>

<style lang="scss" scoped></style>
