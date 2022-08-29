<template>
  <home-component-vue />
</template>

<script>
// @ is an alias to /src
import HomeComponentVue from "@/components/Home/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponentVue,
  },
};
</script>
