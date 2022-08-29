<template>
  <header class="px-6 pt-8 relative lg:px-40 md:h-40">
    <div class="flex justify-between">
      <img src="@/assets/logos/devjobs.svg" alt="" />
      <dark-mode-toggle-vue />
    </div>
    <query-component v-if="$route.path === '/'" />
  </header>
</template>

<script>
import DarkModeToggleVue from "./shared/DarkModeToggle.vue";
import QueryComponent from "./shared/QueryComponent.vue";

export default {
  name: "WebsiteHeader",
  components: { DarkModeToggleVue, QueryComponent },
  methods: {},
};
</script>

<style scoped>
header {
  background: url("@/assets/mobile/bg-pattern-header.svg") no-repeat center;
  background-size: cover;
  height: 136px;
}

@media (min-width: 768px) {
  header {
    background: url("@/assets/tablet/bg-pattern-header.svg") no-repeat;
    background-size: cover;
  }
}

@media (min-width: 1024px) {
  header {
    background: url("@/assets/desktop/bg-pattern-header.svg") no-repeat;
    background-size: cover;
  }
}
</style>
