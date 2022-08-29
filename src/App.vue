<template>
  <website-header-vue class="" />
  <router-view />
</template>

<script>
import WebsiteHeaderVue from "./components/WebsiteHeader.vue";

export default {
  name: "App",
  components: { WebsiteHeaderVue },
  mounted() {
    this.$store.dispatch("fetchJobs");
    this.$store.dispatch("fetchDefaultColorScheme");
  },
};
</script>

<style>
body {
  @apply dark:bg-dev-jobs-midnight bg-dev-jobs-light-grey;
  overflow: scroll;
}

#app {
  font-family: "Kumbh Sans";
  @apply dark:bg-dev-jobs-midnight h-screen bg-dev-jobs-light-grey;

  /* overflow: scroll; */
}

#app h1.heading {
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
}

#app h2.heading {
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
}

#app h3.heading {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
}

#app h4.heading {
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
}

#app p.heading {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
</style>
